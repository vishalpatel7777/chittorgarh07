import React from "react";

const NcdGlossaryCard = () => {
  return (
    <div className="mb-3 overflow-hidden rounded-xl bg-white px-1 py-3 pt-2 shadow-sm lg:px-3">
      <div className="mt-2 clear-both">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_glossary_117_41.png"
          alt="IPO Definitions, Abbreviations, Meanings"
          width={300}
          height={150}
          className="mx-auto mb-2 block rounded-md shadow-sm md:float-left md:me-4 md:mb-0"
        />

        {/* Content */}
        <div className="text-[0.95rem] leading-relaxed text-gray-800">
          <div>
            Understand the meaning of popular words related to IPO.
            <p className="mt-2">
              If you don&apos;t find the answer to your question, do not hesitate
              to ask our expert team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NcdGlossaryCard;
