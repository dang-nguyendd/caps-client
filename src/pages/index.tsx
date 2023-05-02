import {
  DragEvent,
  KeyboardEvent,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";

import { IconPlus, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

import MessageInput from "@/core/message-input";
import ConversationModal from "@/shared/conversation-modal";
import SearchInput from "@/shared/search-input";

const Home = () => {
  const [showConversationModal, setShowConversationModal] = useState(false);
  const [conversationNames, setConversationNames] = useState<string[]>([]);

  const handleOpenConversationModal = () => {
    setShowConversationModal(true);
  };

  const handleCloseConversationModal = () => {
    setShowConversationModal(false);
  };

  const handleSaveConversation = () => {};

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
                onClick={handleOpenConversationModal}
              >
                <IconPlus />
                <span className="ml-2 text-white">New Conversation</span>
              </div>
            </div>

            <ConversationModal
              isOpen={showConversationModal}
              onClose={handleCloseConversationModal}
              handleCancelClick={handleCloseConversationModal}
              handleSaveClick={handleSaveConversation}
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
