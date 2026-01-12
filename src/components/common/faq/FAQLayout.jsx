import FAQSection from "./FAQSection";
import FAQAdCard from "./FAQAdCard";
import CommentsSection from "@components/common/comment/CommentsSection";
import ViewAllIpos from "@components/common/currentIpos/ViewAllIpos";

export default function FAQLayout() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-6">
      {/* FAQ - 9 columns */}
      <div className="col-span-12 md:col-span-9">
        <FAQSection />
        <CommentsSection /> 
        <ViewAllIpos />
      </div>

      {/* Ads - 3 columns */}
      <div className="col-span-12 md:col-span-3">
        <FAQAdCard />
      </div>
    </div>
  );
}
