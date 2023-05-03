import React, {useContext, useState} from "react";
import SearchInput from "@/shared/search-input";
import {IconExternalLink, IconPlus, IconUserCancel} from "@tabler/icons-react";
import ConversationModal from "@/shared/conversation-modal";
import Link from "next/link";
import ChatMessage from "@/core/chat-message";
import MessageInput from "@/core/message-input";
import withAuth from "@/hoc/withLogin";
import {AuthContext} from "@/contexts/auth-context";
import useConversation from "@/hooks/conversation/useConversation";
import ConversationList from "@/components/conversation-list";
import {useImmer} from "use-immer";
import {User} from "@/types/context/with-auth-context";

const Component: React.FC = () => {
    {
        const [showConversationModal, setShowConversationModal] = useState(false);
        const {user, signOut} = useContext(AuthContext)
        const handleOpenConversationModal = () => {
            setShowConversationModal(true);
        };

        console.log('user from here', user)

        const handleCloseConversationModal = () => {
            setShowConversationModal(false);
        };

        return (
            <div className="flex h-screen w-full overflow-hidden bg-gray-900 text-gray-200 antialiased">
                <div className="flex flex-1 flex-col">
                    <main className="flex min-h-0 grow flex-row">
                        <section className="flex w-24 flex-none flex-col overflow-auto  md:w-2/5 lg:max-w-sm">
                            <div className="flex flex-none flex-row items-center justify-between p-4">
                                <p className="hidden text-lg font-bold md:block">
                                    Welcome, {user?.name}
                                </p>
                            </div>

                            <div className="flex-none p-4">
                                <SearchInput
                                    placeholder="Search anything"
                                    searchTerm={""}
                                    onSearch={() => {
                                    }}
                                    onFocus={() => {
                                    }}
                                    onBlur={() => {
                                    }}
                                />
                            </div>
                            <div
                                className="mx-4 flex-none cursor-pointer gap-3 rounded-md border border-white/20 p-4 text-sm text-white transition-colors duration-200 hover:bg-gray-500/10">
                                <div
                                    className="flex cursor-pointer items-center"
                                    onClick={handleOpenConversationModal}
                                >
                                    <IconPlus/>
                                    <span className="ml-2 text-white">New Conversation</span>
                                </div>
                            </div>
                            <ConversationList />
                            <ConversationModal
                                isOpen={showConversationModal}
                                onClose={handleCloseConversationModal}
                            />

                            <div className="grow"></div>
                            <div className="flex border-t border-gray-800 p-4 pt-8">
                                <div className='flex flex-col gap-1'>
                                    <Link href={"/settings"}
                                          className='flex flex-row gap-1 items-center cursor-pointer'>
                                        <IconExternalLink/>
                                        <span className="ml-2 cursor-pointer text-sm text-white">Open settings</span>
                                    </Link>
                                    <div className='flex flex-row gap-1 items-center cursor-pointer'>
                                        <IconUserCancel/>
                                        <span className="ml-2 cursor-pointer text-sm text-white"
                                              onClick={signOut}>Logout</span>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-auto flex-col border-l border-gray-800">
                            <div className="flex-1 overflow-y-scroll p-4">
                                <ChatMessage
                                    conservationId={0}
                                    content={
                                        "chatbotchatbotchatbotchatbotchatbotchatbotchatbotchatbotchatbotchatbotchatbotchatbotchatbotchatbot"
                                    }
                                    senderType={"chatbot"}
                                />
                                <ChatMessage
                                    conservationId={0}
                                    content={
                                        "useruseruseruseruseruseruseruseruseruseruseruseruseruseruseruser"
                                    }
                                    senderType={"user"}
                                />
                                <ChatMessage
                                    conservationId={0}
                                    content={
                                        "useruseruseruseruseruseruseruseruseruseruseruseruseruseruseruser"
                                    }
                                    senderType={"user"}
                                />
                            </div>
                            <div className="flex-none">
                                <div className="flex flex-row items-center p-4">
                                    <MessageInput/>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
    ;
}

export default withAuth(Component)