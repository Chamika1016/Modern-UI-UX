"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "What is your return policy?",
    answer:
      " Our return policy allows you to return most items within 30 days of receipt for a full refund or exchange. Items must be in their original condition and packaging. For more details, please visit our Returns page.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive an email with a tracking number and a link to the carrier's website where you can track your package. You can also track your order by logging into your account on our website and visiting the 'my orders' section.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      " We accept a variety of payment methods, including Visa, MasterCard, American Express, Discover, PayPal, and Apple Pay. We also offer financing options through our partner, Affirm.",
  },
  {
    question: "How do I create an account?",
    answer:
      " To create an account, click on the Sign Up or Registers button at the top of our homepage. Fill in the required information, including your name, email address, and a password. Once you submit the form, you will receive a confirmation email. Click on the link in the email to activate your account.",
  },
];

function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#eb2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Let's clarify some of your questions
        </h1>
        <p className="text-[#36485c] pb-[24px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          excepturi{" "}
        </p>
      </div>
      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#e3f1ff] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="see more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className="pt-2 text-[#36485c]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}

export default Faq;
