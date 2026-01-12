import FAQAccordion from "./FAQAccordion";
import { faqData } from "@data/ipo/MainboardIpoInfo/CurrentIpos/faqData";

export default function FAQSection() {
  return (
    <div>
      <h2 className="text-lg font-bold my-2">Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <FAQAccordion key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
