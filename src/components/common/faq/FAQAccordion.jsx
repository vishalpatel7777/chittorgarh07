import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function FAQAccordion({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#22222f1a] rounded mb-2 bg-white">
   <button
  onClick={() => setOpen(!open)}
  className="
    w-full flex justify-between items-center
    px-4 py-3
    text-left text-sm font-semibold
    hover:bg-gray-50
    transition
  "
>

        <span>
          {index + 1}. {item.question}
        </span>
        <span className="text-gray-500">{open ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
      </button>

      {open && (
        <div className="px-4 pb-3 text-sm text-gray-600">

          {item.answer}
        </div>
      )}
    </div>
  );
}
