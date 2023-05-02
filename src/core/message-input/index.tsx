import { IconSend } from "@tabler/icons-react";

const Component = () => {
  return (
    <>
      <div className="relative grow">
        <label>
          <input
            className="w-full rounded-full border border-gray-800 bg-gray-800 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
            type="text"
            value=""
            placeholder="Ask anything ( Shift-Enter to new line)"
          />
        </label>
      </div>
      <button
        type="button"
        className="mx-2 flex h-6 w-6 shrink-0 text-blue hover:text-blue focus:outline-none"
      >
        <IconSend color="white" />
      </button>
    </>
  );
};

Component.displayName = "MessageInput";

export default Component;
