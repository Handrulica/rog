import React from "react";
import arrow from "public/assets/faq/arrow.svg";
import FaqData from "public/assets/faq/assets.json";
import { cn } from "src/lib/utils";
import ImageWithFallback from "src/components/image";

const Section = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <h2 className="text-neutrals-100 font-bold heading-2xxs sm:heading-xs sm:font-bold">
          {question}
        </h2>
        <div className="block w-6 h-6 flex-shrink-0">
          <img
            src={arrow}
            alt="arrow_down"
            className={cn("w-6 h-6", !isOpen && "rotate-[180deg]")}
          />
        </div>
      </div>
      {isOpen && (
        <p className="text-neutrals-80 body-xs sm:body-sm sm:font-medium mt-2 pr-8">
          {answer}
        </p>
      )}
    </div>
  );
};
const Faq = () => {
  return (
    <div id="faq_section" className="mt-24">
      <div className="relative w-full">
        <div className="absolute w-full h-full grid z-0">
          <div className="hidden lg:block gradient-one gradient-two">
            <ImageWithFallback className="w-[80vw] gradient-four" src={'faq/background'} />
          </div>
        </div>
        <div className="relative lg:pr-6 lg:pl-24 lg:grid lg:grid-cols-2">
          <div className="text-center lg:text-left lg:pt-12">
            <h1 className="heading-sm lg:heading-2lg font-bold text-neutrals-100">
              More questions?
            </h1>
            <span className="block text-neutrals-100 font-bold heading-2xxs lg:heading-2md">
              {" "}
              Look in here.
            </span>
          </div>
          <div className="px-4 space-y-12 py-12 sm:px-16 sm:space-y-16 lg:px-2">
            {FaqData.map((entry, index) => (
              <Section
                key={index}
                question={entry.question}
                answer={entry.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
