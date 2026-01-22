import React from "react";
import { Outlet } from "react-router-dom";
import FAQLayout from "@components/common/faq/FAQLayout";
import IpoAllotmentStatusMainboardCard from "@components/ipo/LiveIpoInfo/IpoAllotmentStatus/IpoAllotmentStatusMainboardCard";

const IpoAllotmentStatus = () => {
  return (
    <section className="px-3 mx-23 mt-4">
      
      <div>
        <Outlet />
      </div>

      <FAQLayout />
    </section>
  );
};

export default IpoAllotmentStatus;

