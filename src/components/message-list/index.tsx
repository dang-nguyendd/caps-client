import React, {useEffect, useRef} from "react";
import ChatMessage from "@/core/chat-message";
import MessageInput from "@/core/message-input";
import {IMessageList} from "@/components/message-list/type";
import useMessage from "@/hooks/message";
import {closeSocket, getSocket, initSocket} from "@/socket";
import {IconSend} from "@tabler/icons-react";
import {useImmer} from "use-immer";
import {MessageNS} from "@/services/message/type";

const Component: React.FC = (props: IMessageList) => {
    const {selectedConversation} = props
    const {getAllMessages, messages, setMessages} = useMessage()
    const [message, setMessage] = useImmer<string>('')
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const _clearMessage = () => {
        setMessage('')
    }

    const _onValueChange = (message: string) => {
        setMessage(message)
    }


    useEffect(() => {
        if (selectedConversation && selectedConversation.id) getAllMessages({conversationId: selectedConversation.id})
    }, [selectedConversation])

    useEffect(() => {
        initSocket();

        const socket = getSocket();

        if (socket) {
            socket.on('message', (message: MessageNS.Message) => {
                setMessages(message)
            });
        }

        return () => {
            closeSocket();
        };
    }, []);

    const scrollToBottom = () => {
        if (messagesEndRef && messagesEndRef.current) {
            const dom = messagesEndRef.current as HTMLDivElement
            dom.scrollIntoView({behavior: 'smooth'});
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages[messages.length - 1]]); // Watch the last message in the array


    const _handleSend = () => {
        const socket = getSocket();
        if (socket && selectedConversation && selectedConversation.id) {
            socket.emit('message', {
                conversationId: selectedConversation.id,
                content: message,
                sender: MessageNS.SenderType.USER
            })
            _clearMessage()
        }
    }


    return <section className="flex flex-auto flex-col border-l border-gray-800">
        <div className="flex-1 overflow-y-scroll p-4">
            {messages.map(message => <ChatMessage
                conservationId={message.id}
                content={message.content}
                senderType={message.sender}
            />)}
            <div ref={messagesEndRef}></div>
            {(messages && messages.length && messages[messages.length - 1].sender === MessageNS.SenderType.USER) ? (
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                }}>
                    The chat advisor is typing...
                </div>
            ) : null}
    </div>
    <div className="flex-none">
        <div className="flex flex-row items-center p-4">
            <div className="relative grow">
                <input
                    className="w-full rounded-full border border-gray-800 bg-gray-800 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
                    type="text"
                    value={message}
                    onChange={e => _onValueChange(e.target.value)}
                    placeholder="Ask anything ( Shift-Enter to new line)"
                />
            </div>
            <button
                type="button"
                className="mx-2 flex h-6 w-6 shrink-0 text-blue hover:text-blue focus:outline-none"
                onClick={message ? _handleSend : () => {
                }}
            >
                <IconSend color="white"/>
            </button>
        </div>
    </div>
</section>
}

export default Component