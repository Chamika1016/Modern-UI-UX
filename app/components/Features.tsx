import React from "react";
import Feature1 from "../../public/feature-1.svg";
import Feature2 from "../../public/feature-2.svg";
import Feature3 from "../../public/feature-3.svg";
import CheckMark from "../../public/check.svg";
import blueButton from "../../public/blue-button.svg";
import greenButton from "../../public/green-button.svg";
import pinkButton from "../../public/pink-button.svg";
import Image from "next/image";
function Features() {
  return (
    <div className="flex flex-col py-[56px] gap-y-[56px] lg:py-[120px] lg:gap-y-[80px]">
      {/* first feature */}
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature1}
          alt="feature1"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085ff] lg:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Simplify Your Sales monitoring
          </h1>
          <Image
            src={Feature1}
            alt="feature 1"
            className="pt-[24px] sm:hidden "
          />
          <p className="py-[24px] text-[#36485c] lg:text-[18px]">
            stay on top of things and revamp your work process with our
            game-changing feature.Get a birds eye view with our customizable
            dashboard
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={CheckMark} alt="check mark" />
              </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={CheckMark} alt="check mark" />
              </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={CheckMark} alt="check mark" />
              </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085ff] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={blueButton} alt="learn more" />
            </span>
          </p>
        </div>
      </div>

      {/* second feature */}

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt="feature2"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00a424] lg:text-[18px]">
            Customer Support
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Get in touch with your Customer
          </h1>
          <Image
            src={Feature2}
            alt="feature 2"
            className="pt-[24px] sm:hidden "
          />
          <p className="py-[24px] text-[#36485c] lg:text-[18px]">
            stay on top of things and revamp your work process with our
            game-changing feature.Get a birds eye view with our customizable
            dashboard
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={CheckMark} alt="check mark" />
              </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={CheckMark} alt="check mark" />
              </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
            <li className="flex items-center gap-x-2 text-[#36485c]">
              <span>
                <Image src={CheckMark} alt="check mark" />
              </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00a424] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={greenButton} alt="learn more" />
            </span>
          </p>
        </div>
      </div>

      {/* Third feature */}
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt="feature3"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#eb8291] lg:text-[18px]">
            Growth Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Monitor your site's new subscribers
          </h1>
          <Image
            src={Feature3}
            alt="feature 3"
            className="pt-[24px] sm:hidden "
          />
          <p className="py-[24px] text-[#36485c] lg:text-[18px]">
            stay on top of things and revamp your work process with our
            game-changing feature.Get a birds eye view with our customizable
            dashboard
          </p>
          <div className="flex w-full gap-x-[24px] ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[36485c]">lorem ipsum</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
              <p className="text-[36485c]">bla bla bla...</p>
            </div>
          </div>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#eb8291] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={pinkButton} alt="learn more" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
