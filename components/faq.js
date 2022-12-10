import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Will Planet Somewhere be free to play?",
    answer: "Yes, When you first start in the game, you have access to 5 minerals. To unlock more you will need to clear in-game missions!",
  },
  {
    question: "Upcoming Features?",
    answer: "Planetsomewhere is still at an early stage and as always, we will build this experience alongside our community.",
  },
  {
    question: "Portal Gate Token (PGT)",
    answer:
      "Portal Gate Token (PGT) are an ERC-20 governance token for the PSWH Universe. PGT holders will be able to claim rewards if they stake their tokens, play the game, and participate in key governance votes. Players will also be able to earn $PGT when they play various games within the Infinity Universe and through user-generated content initiatives.",
  },
  {
    question: "Do you offer technical support for Swap & Bridge? ",
    answer:
      "No, we don't offer technical support Swap & Bridge. Please contact LI.FI support in Discord.",
  },
];
