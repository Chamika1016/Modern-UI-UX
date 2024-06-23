import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";

function page() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <Faq />
        <Pricing />
        <Cta />
      </div>
    </div>
  );
}

export default page;
