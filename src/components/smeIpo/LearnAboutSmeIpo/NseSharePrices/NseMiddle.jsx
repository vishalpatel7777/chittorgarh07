import NseTableCard from "./NseTableCard";
import ComparisonBar from './ComparisonBar'

import FAQLayout from '@components/common/faq/FAQLayout'
const NseMiddle = () => {
  return (
    <div className="space-y-6">
        <div className="rounded-xl bg-white p-4 shadow-sm">
      
      <NseTableCard />

      {/* Disclaimer */}
      <h2 className="mb-2 text-lg font-semibold">
          Key things you should know about NSE SME Platform
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
          <li>NSE SME trading hours: 9:15 am to 3:30 pm</li>
          <li>Trading happens only in defined lot sizes</li>
          <li>Same NSE trading system is used for SME stocks</li>
        </ul>
      <ComparisonBar />
       <FAQLayout />
      </div>


    </div>
  );
};

export default NseMiddle;
