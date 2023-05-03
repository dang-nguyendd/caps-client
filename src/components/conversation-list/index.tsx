import React, {useContext, useEffect} from "react";
import useConversation from "@/hooks/conversation/useConversation";
import Conversation from "@/shared/conversation";
import {useImmer} from "use-immer";
import {ConversationNS} from "@/services/conversation/type";

export const ConversationList: React.FC = () => {
    const [selectedConversation, setSelectedConversation] = useImmer<ConversationNS.Conversation>(null)
    const {getAllConversations, conversations} = useConversation()
    const [localConversations, setLocalConversations] = useImmer<ConversationNS.Conversation[]>([])
    const _onSelectConversation = (item: ConversationNS.Conversation) => {
        setSelectedConversation(item)
    }

    useEffect(() => {
        getAllConversations()
    }, [])

    useEffect(() => {
        if (conversations && conversations.length && !selectedConversation) {
            setSelectedConversation(conversations[0])
        }
    }, [conversations])

    useEffect(() => {
        if (conversations) setLocalConversations(conversations)
    }, [conversations])

    if (!localConversations) return <div className='text-gray-300 font-bold'> Empty Conversation </div>

    return <div className='flex flex-col gap-2 border-b-amber-100 overflow-y-scroll scroll-m-2 mt-1'>
        {localConversations.map(conversation => (
            <div onClick={() => _onSelectConversation(conversation)}>
            <Conversation conversation={conversation} selected={selectedConversation?.id === conversation?.id}/>
            </div>
        ))}

    </div>
}
export default ConversationList