import React, { useState } from "react";

import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

import { breadcrumbItems, questions } from "@/components/faq/constant";
import Breadcrumb from "@/core/breadcrumb";
import SearchInput from "@/shared/search-input";

const Component = () => {
  const [currentPage, setCurrentPage] = useState("");

  const _handleQuestionClick = (title: string) => {
    setCurrentPage(title);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <div className="bg-black p-10">
          <div className="mx-auto flex max-w-3xl items-center text-white">
            <h2 className="text-2xl font-bold">DICA</h2>
          </div>
          <div className="mx-auto mt-4 max-w-3xl">
            <SearchInput placeholder={""} searchTerm={""} onSearch={() => {}} />
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Breadcrumb items={breadcrumbItems} currentPage={currentPage} />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="mb-2 flex items-center">
            <header className="mb-1 text-2xl font-bold leading-10 text-black">
              DICA
            </header>
          </div>
          <div className="flex flex-col gap-5">
            <section className="border-black-90 flex flex-col rounded-xl border border-solid bg-white p-2 sm:p-3">
              {questions.map((question) => (
                <Link
                  key={question.id}
                  href={`/faq/${question.url}`}
                  onClick={() => _handleQuestionClick(question.title)}
                  className="duration-250 group/article text-black-10 flex flex-row justify-between gap-2 rounded-lg px-3 py-2 no-underline transition ease-linear hover:bg-gray-300 hover:text-primary sm:py-3"
                >
                  <div className="flex items-center">
                    <h3 className="mr-2">{question.title}</h3>
                  </div>
                  <IconArrowRight size={16} className="self-center" />
                </Link>
              ))}
            </section>
          </div>
        </div>
      </div>

      <footer className="mt-auto bg-white shadow dark:bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
          <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2023{" "}
            <Link href="https://flowbite.com/" className="hover:underline">
              DICA™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

Component.displayName = "FAQComponent";
export default Component;
