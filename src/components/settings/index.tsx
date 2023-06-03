import React, { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { tabs } from "@/components/settings/constant";
import { ISettingsModalProps } from "@/components/settings/type";

const Component: React.FC<ISettingsModalProps> = ({ isOpen, onClose }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex min-h-screen items-center justify-center px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-transform ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
              <div className="absolute inset-0 w-16 border-r border-gray-200">
                <nav className="flex h-full flex-col justify-center">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`py-2 px-4 text-left text-gray-500 hover:text-indigo-600 focus:outline-none ${
                        selectedTab === tab.id
                          ? "font-medium text-indigo-600"
                          : ""
                      }`}
                      onClick={() => setSelectedTab(tab.id)}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="ml-16">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {tabs.find((tab) => tab.id === selectedTab)?.name}
                </h3>

                <div className="mt-4">
                  {tabs.find((tab) => tab.id === selectedTab)?.content}
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none"
                    onClick={onClose}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="ml-4 rounded-lg bg-white px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Component.displayName = "Settings";
export default Component;
