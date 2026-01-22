import React from "react";

const RiGlossaryCard = () => {
  return (
    <div
      className="
        bg-white
        shadow-sm
        border-0
        mb-3
        overflow-hidden
        pt-2
        pb-3
        px-1
        lg:px-3
        rounded-[0.7rem]
      "
    >
      <div className="clearfix mt-2">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_glossary_117_44.png"
          alt="Rights Issue Definitions, Abbreviations, Meanings"
          width={300}
          height={150}
          loading="lazy"
          className="
            max-w-full
            h-auto
            bg-white
            shadow-sm
            rounded
            mb-2
            mx-auto
            block
            md:inline
            md:float-left
            md:mr-4
          "
        />

        {/* Content */}
        <div className="text-[#1e1e27] text-[0.9375rem] leading-[1.8rem]">
          <div className="w-full">
            Understand the meaning of popular words related to IPO.
            <p className="mt-2 text-[#5c5c5c]">
              If you don't find answer of your question, do not hesitate to ask
              our expert team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiGlossaryCard;
