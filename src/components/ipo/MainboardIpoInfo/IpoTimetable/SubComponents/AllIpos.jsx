import React, { useState } from "react";
import IpoTimetableCard from "@components/ipo/MainboardIpoInfo/IpoTimetable/IpoTimetableCard";
import { ipoTimetableData } from "@data/ipo/MainboardIpoInfo/IpoTimetable/ipoTimetableData";

export const AllIpos = () => {
  const [ipos] = useState(ipoTimetableData);

  return (
    <main className="mx-auto max-w-7xl p-4">
      {/* Upcoming IPO Table */}
      <IpoTimetableCard data={ipos} />

      {/* Explanation Section */}
      <section className="mt-6 text-sm text-gray-700">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Company</strong> – The issuer company planning to go public.
          </li>
          <li>
            <strong>Last Updated</strong> – The most recent date when IPO status
            or details were updated.
          </li>
          <li>
            <strong>Status</strong> – Current IPO stage such as Filed with SEBI,
            Filed with Exchange, or Approval Received.
          </li>
          <li>
            <strong>Estimated Issue Amount (₹ Cr.)</strong> – Approximate size
            of the IPO as disclosed in filings.
          </li>
          <li>
            <strong>Exchange</strong> – Proposed stock exchange(s) for listing
            (BSE, NSE, or SME).
          </li>
          <li>
            <strong>Lead Manager</strong> – Merchant banker managing the IPO
            process.
          </li>
          <li>
            <strong>Compare</strong> – Option to shortlist and compare IPOs
            across key parameters.
          </li>
        </ul>

        <p className="mt-4">
          For a deeper understanding of IPO filings, approvals, and listing
          stages, explore our{" "}
          <a
            href="https://www.chittorgarh.com/book-modules/introduction-to-ipo/1/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            Introduction to IPO
          </a>
          .
        </p>

        <h3 className="mt-5 font-semibold text-gray-900">Note:</h3>
        <ul className="mt-2 list-disc pl-5">
          <li>
            Some IPOs may be confidentially filed or withdrawn before listing.
            Such IPOs may not proceed to the stock exchange.
          </li>
        </ul>
      </section>
    </main>
  );
};
