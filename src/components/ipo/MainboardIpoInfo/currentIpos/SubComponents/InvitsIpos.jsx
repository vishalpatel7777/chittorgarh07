import React , { useState } from 'react'
import IpoTable from "@components/ipo/MainboardIpoInfo/currentipos/common/IpoTable";
import { ipoData } from "@data/ipo/MainboardIpoInfo/CurrentIpos/ipoData";

export const InvitsIpos = () => {
    const [ipos] = useState(ipoData);
  
    return (
      <main className="p-4 max-w-7xl mx-auto">
        <IpoTable data={ipos} />
        <section className="mt-6 text-sm text-gray-700">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Opening Date</strong> – The date on which the IPO opens for
            subscription.
          </li>
          <li>
            <strong>Closing Date</strong> – The final date for submitting IPO
            applications.
          </li>
          <li>
            <strong>Listing Date</strong> – The day the company’s shares get listed
            and start trading on the stock exchange.
          </li>
          <li>
            <strong>Issue Price (₹)</strong> – The offer price at which shares were
            allotted to investors.
          </li>
          <li>
            <strong>Total Issue Amount (₹ Cr.)</strong> – The total size of the IPO,
            including firm reservations.
          </li>
          <li>
            <strong>Listing At</strong> – The stock exchange(s) where the IPO is
            listed, such as BSE, NSE, or both.
          </li>
          <li>
            <strong>Lead Manager</strong> – The investment bank or merchant banker
            responsible for managing the IPO process.
          </li>
          <li>
            <strong>Compare</strong> – A feature to compare IPOs based on key
            metrics and performance parameters.
          </li>
        </ul>
  
        <p className="mt-4">
          To learn more about IPO terms and the complete IPO process, refer to our{" "}
          <a
            href="https://www.chittorgarh.com/book-modules/introduction-to-ipo/1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Introduction to IPO
          </a>
          .
        </p>
  
        <h3 className="mt-5 font-semibold text-gray-900">Note:</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Striked <del>Issuer Company Name</del> represents that the IPO was
            withdrawn and did not list on the stock exchange.
          </li>
        </ul>
      </section>
      </main>
    );
}
