import React from "react";

import { IconX } from "@tabler/icons-react";

import { Language } from "@/types/enum/Language";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChangeLanguage: (language: Language) => void;
}

const UserSettingsModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onChangeLanguage,
}) => {
  const handleLanguageChange = (language: Language) => {
    onChangeLanguage(language);
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-gray-100 px-4 py-3">
            <div className="flex justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Settings
              </h3>
              <IconX onClick={onClose} />
            </div>
          </div>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mt-3">
              <div className="flex">
                <div className="flex-1 pr-2">
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Language
                  </label>
                </div>
                <div className="flex-1 pl-2">
                  <select
                    id="language"
                    name="language"
                    className="mt-1 block w-full pl-3 pr-10 text-base border-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white text-gray-900"
                    onChange={(e) =>
                      handleLanguageChange(e.target.value as Language)
                    }
                  >
                    {Object.keys(Language).map((key) => (
                      <option
                        key={key}
                        value={Language[key as keyof typeof Language]}
                      >
                        {Language[key as keyof typeof Language]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsModal;
