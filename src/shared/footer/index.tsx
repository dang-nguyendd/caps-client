import React from "react";

import Link from "next/link";

import useDevice from "@/hooks/useDevice";

const Component = React.memo(() => {
  const { isMobile } = useDevice();
  return (
    <footer className="mt-auto bg-white shadow dark:bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link href="" className="hover:underline">
            DICA™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
});

Component.displayName = "Footer";

export default Component;
