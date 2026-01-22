import React from "react";
import { Link, Outlet } from "react-router-dom";

import RiGlossaryCard from '@components/NCD/RightsIssue/RiGlossary/RiGlossaryCard'
import FAQAdCard from "@components/common/faq/FAQAdCard";
import CommentsSection from "@components/common/comment/CommentsSection";
import ViewAllIpos from "@components/common/currentIpos/ViewAllIpos";

const RiGlossary = () => {
  return (
    <section className="p-10">
      {/* Redirect Link Section */}
      <div className="mb-4">
        <Link
          to="https://www.chittorgarh.com/report/report-list/116/51/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
          Other Reports
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-xl font-bold mb-3">
        Rights Issue Glossary – Dewinitions, Abbreviations, Terminology and Meaning
      </h1>

      {/* Glossary Card */}
      <RiGlossaryCard />

      {/* Tabs + Outlet */}
      <div
        className="
          bg-white
          rounded-[0.7rem]
          shadow-sm
          px-2 md:px-4
          py-2
          mb-4
          overflow-hidden
        "
      >
        <Outlet />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-12 md:col-span-9">
          <CommentsSection />
          <ViewAllIpos />
        </div>

        <div className="col-span-12 md:col-span-3">
          <FAQAdCard />
        </div>
      </div>
    </section>
  );
};

export default RiGlossary;
