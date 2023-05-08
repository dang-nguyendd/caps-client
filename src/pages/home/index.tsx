import React, { useContext, useState } from "react";

import {
  IconExternalLink,
  IconPlus,
  IconUserCancel,
} from "@tabler/icons-react";
import Link from "next/link";

import ConversationList from "@/components/conversation-list";
import MessageList from "@/components/message-list";
import OnboardingTutorial from "@/components/onboarding-tutorial";
import Weather from "@/components/weather-report";
import { AuthContext } from "@/contexts/auth-context";
import withAuth from "@/hoc/withLogin";
import useConversation from "@/hooks/conversation/useConversation";
import ConversationModal from "@/shared/conversation-modal";
import SearchInput from "@/shared/search-input";

const Component: React.FC = () => {
  {
    const [showConversationModal, setShowConversationModal] = useState(false);
    const { user, signOut } = useContext(AuthContext);
    const {
      getAllConversations,
      conversations,
      createNewConversation,
      selectedConversation,
      setSelectedConversation,
    } = useConversation();
    const _handleOpenConversationModal = () => {
      setShowConversationModal(true);
    };

    const _handleCloseConversationModal = () => {
      setShowConversationModal(false);
    };

    const steps = [
      {
        target: '[data-tour="step1"]',
        content: "Create new conversation to start asking question",
        disableBeacon: true,
      },
      {
        target: '[data-tour="step2"]',
        content:
          "This will show the model type that you will be using in this conversation",
        disableBeacon: true,
      },
      {
        target: '[data-tour="step3"]',
        content: "The current weather on your location will show here",
        disableBeacon: true,
      },
      {
        target: '[data-tour="step4"]',
        content: "Your chat message will show here",
        disableBeacon: true,
      },
      {
        target: '[data-tour="step5"]',
        content: "You can start asking the question here",
        disableBeacon: true,
      },
    ];

    return (
      <div className="flex h-screen w-full overflow-hidden bg-gray-900 text-gray-200 antialiased">
        <div className="flex flex-1 flex-col">
          <main className="flex min-h-0 grow flex-row">
            <section className="group flex w-24 flex-none flex-col overflow-auto transition-all duration-300 ease-in-out md:w-2/5 lg:max-w-sm">
              <div className="flex flex-none flex-row items-center justify-between p-4">
                <p className="hidden text-lg font-bold md:block">
                  Welcome, {user?.name}
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
                  data-tour="step1"
                  className="flex cursor-pointer items-center"
                  onClick={_handleOpenConversationModal}
                >
                  <IconPlus />
                  <span className="ml-2 text-white">New Conversation</span>
                </div>
              </div>
              <ConversationList
                conversations={conversations}
                getAllConversations={getAllConversations}
                selectedConversation={selectedConversation}
                setSelectedConversation={setSelectedConversation}
              />
              <ConversationModal
                isOpen={showConversationModal}
                onClose={_handleCloseConversationModal}
                createNewConversation={createNewConversation}
              />
              <div className="grow"></div>
              <div className="flex border-t border-gray-800 p-4 pt-8">
                <div className="flex flex-col gap-1">
                  <Link
                    href={"/settings"}
                    className="flex cursor-pointer flex-row items-center gap-1"
                  >
                    <IconExternalLink />
                    <span className="ml-2 cursor-pointer text-sm text-white">
                      Open settings
                    </span>
                  </Link>
                  <div className="flex cursor-pointer flex-row items-center gap-1">
                    <IconUserCancel />
                    <span
                      className="ml-2 mt-4 cursor-pointer text-sm text-white"
                      onClick={signOut}
                    >
                      Logout
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-auto flex-col border border-gray-800">
              <div className="flex flex-none flex-row items-center justify-between border-b border-gray-800 px-6 py-4 shadow">
                <div className="flex">
                  <div data-tour="step2">
                    <p className="mb-2 text-xl font-bold">
                      Dengue Intelligent Chatbot Assistance
                    </p>
                    <p>Model type: {selectedConversation?.chatBotType}</p>
                  </div>
                </div>
                <div data-tour="step3" className="flex">
                  {/*<Weather />*/}
                </div>
              </div>
              <MessageList
                dataTourOne="step4"
                dataTourTwo="step5"
                selectedConversation={selectedConversation}
              />
            </section>
          </main>
        </div>
        <OnboardingTutorial steps={steps} />
      </div>
    );
  }
};

export default withAuth(Component);
