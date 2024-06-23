import React from "react";
import Check from "../../public/check.svg";
import Image from "next/image";

function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center text-2xl font-medium lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485c] lg:text-[18px]">
        No Hidden fees
      </p>
      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        {/* first card */}
        <div className="w-full rounded-[8px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between">
          <div className="">
            <h3 className="font-medium text-[#4328eb] text-[18px] lg:text-xl">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485c] lg:text-[18px]">
              Perfect for testing the waters
            </p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[18px]">
              0$ <span className="text-[#5f7896]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#5f7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisi
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisi
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisi
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328eb] font-medium">
            Start Trial
          </button>
        </div>

        {/* 2nd */}
        <div className="w-full rounded-[8px] bg-[#4328eb] p-6 flex flex-col">
          <div className="">
            <h3 className="font-medium text-white text-[18px] lg:text-xl">
              Business
            </h3>
            <p className="pt-[12px] text-[#f4f8fa] lg:text-[18px]">
              Perfect for All businesses
            </p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[18px] text-white">
              500$ <span className="text-[#f4f8fa]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#f4f8fa]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisi
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisi
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisi
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisi
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisi
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328eb] font-medium">
            Get Started
          </button>
        </div>

        {/* 3rd */}
        <div className="w-full rounded-[8px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between">
          <div className="">
            <h3 className="font-medium text-[#4328eb] text-[18px] lg:text-xl">
              Enterprise
            </h3>
            <p className="pt-[12px] text-[#36485c] lg:text-[18px]">
              Perfect for Big Companies
            </p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom</h2>
            <p className="pt-4 text-[16px] text-[#36485c]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              laudantium iusto illum vero tenetur distinctio quidem ratione
              eveniet! Sunt quas labore sed error debitis rerum laudantium
              aliquam illum esse id!
            </p>
            <p className="pt-2 text-[16px] text-[#36485c]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias qui esse fugiat labore voluptates aspernatur, facilis
              voluptate, dolorum nihil excepturi quis? Consequuntur, voluptatem.
              Molestiae accusamus ut, quia corrupti accusantium placeat!
            </p>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328eb] font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
