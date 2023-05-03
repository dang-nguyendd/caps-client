/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";

import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/router";

import Button from "@/core/button";
import withLayout from "@/hoc/withLayout";

const Component = () => {
  const [activeTab, setActiveTab] = useState("general");
  const router = useRouter();

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    router.push("settings/" + tab);
  };

  const handleLogOut = () => {
    router.push("/");
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <aside
        id="default-sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                className={`flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                  activeTab === "general" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
                onClick={() => handleTabClick("general")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white ${
                    activeTab === "general"
                      ? "text-gray-900 dark:text-white"
                      : ""
                  } icon icon-tabler icon-tabler-settings-filled`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="ml-3">General Settings</span>
              </a>
            </li>
            <li>
              <a
                className={`flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                  activeTab === "personal" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
                onClick={() => handleTabClick("personal")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white ${
                    activeTab === "personal"
                      ? "text-gray-900 dark:text-white"
                      : ""
                  } icon icon-tabler icon-tabler-user`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>

                <span className="ml-3">Personal Info</span>
              </a>
            </li>
            <li>
              <a
                className={`flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                  activeTab === "health" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
                onClick={() => handleTabClick("health")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white ${
                    activeTab === "health"
                      ? "text-gray-900 dark:text-white"
                      : ""
                  } icon icon-tabler icon-tabler-activity`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12h4l3 8l4 -16l3 8h4"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">
                  Health Info
                </span>
              </a>
            </li>
            <li>
              <a
                className={`flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                  activeTab === "logout" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
                onClick={() => handleLogOut()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white ${
                    activeTab === "logout"
                      ? "text-gray-900 dark:text-white"
                      : ""
                  } icon icon-tabler icon-tabler-logout`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

Component.displayName = "Settings";

export default withLayout(Component);
