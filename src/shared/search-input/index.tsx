import React from "react";

import { IconSearch, IconX } from "@tabler/icons-react";

import { ISearchInputProps } from "@/shared/search-input/type";

const Component = React.memo((props: ISearchInputProps) => {
  const { placeholder, searchTerm, onSearch, onFocus, onBlur } = props;
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    onSearch("");
  };

  return (
    <div className="relative flex w-full items-center">
      {!searchTerm && (
        <IconSearch
          className="absolute right-4 cursor-pointer text-neutral-300 hover:text-neutral-400"
          size={18}
          onClick={clearSearch}
        />
      )}
      <input
        className="w-full rounded-md border border-gray-700 bg-gray-700 py-2 pl-3 pr-10 text-gray-200 transition duration-300 ease-in focus:border-gray-700 focus:bg-gray-900 focus:shadow-md focus:outline-none"
        type="text"
        placeholder={placeholder || ""}
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {searchTerm && (
        <IconX
          className="absolute right-4 cursor-pointer text-neutral-300 hover:text-neutral-400"
          size={18}
          onClick={clearSearch}
        />
      )}
    </div>
  );
});

Component.displayName = "SearchInput";

export default Component;
