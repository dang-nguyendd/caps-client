import { IconPlus, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

import MessageInput from "@/core/message-input";
import SearchInput from "@/shared/search-input";
import { useState } from "react";
import ChatModal from "@/shared/chat-modal";
const Home = () => {
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatNames, setChatNames] = useState("");

  const handleOpenChatModal = () => {
    setShowChatModal(true);
  };

  const handleCloseChatModal = () => {
    setShowChatModal(false);
  };

  const handleSaveChat = () => {
    handleCloseChatModal();
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-900 text-gray-200 antialiased">
      <div className="flex flex-1 flex-col">
        <main className="flex min-h-0 grow flex-row">
          <section className="flex w-24 flex-none flex-col overflow-auto  md:w-2/5 lg:max-w-sm">
            <div className="flex flex-none flex-row items-center justify-between p-4">
              <p className="hidden text-lg font-bold md:block">
                Dengue Intelligent Chatbot Assistance
              </p>
            </div>

            <div className="flex-none p-4">
              <SearchInput
                placeholder="Search anything"
                searchTerm={""}
                onSearch={() => {}}
                onFocus={() => {}}
                onBlur={() => {}}
              />
            </div>
            <div className="mx-4 flex-none cursor-pointer gap-3 rounded-md border border-white/20 p-4 text-sm text-white transition-colors duration-200 hover:bg-gray-500/10">
              <div
                className="flex cursor-pointer items-center"
                onClick={handleOpenChatModal}
              >
                <IconPlus />
                <span className="ml-2 text-white">New chat</span>
              </div>
            </div>
            <div>Chat Room {chatNames}</div>

            <ChatModal
              isOpen={showChatModal}
              handleNameChange={setChatNames}
              onClose={handleCloseChatModal}
              handleCancelClick={handleCloseChatModal}
              handleSaveClick={handleSaveChat}
            />

            <div className="grow"></div>
            <Link href={"/settings"}>
              <div className="flex border-t border-gray-800 p-4 pt-8">
                <IconExternalLink />
                <span className="ml-2 cursor-pointer text-sm text-white">
                  Open settings
                </span>
              </div>
            </Link>
          </section>
          <section className="flex flex-auto flex-col border-l border-gray-800">
            <div className="flex-1 overflow-y-scroll p-4"></div>
            <div className="flex-none">
              <div className="flex flex-row items-center p-4">
                <MessageInput />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
