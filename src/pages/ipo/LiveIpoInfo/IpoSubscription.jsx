import React from "react";
import { Outlet } from "react-router-dom";
import FAQLayout from "@components/common/faq/FAQLayout";

const IpoSubscription = () => {
  return (
    <section className="px-3 mx-23 mt-4">
      <div>
        <Outlet />
      </div>

      <FAQLayout />
    </section>
  );
};

export default IpoSubscription;
