import getIpoListData from "@utils/ipoListSelector";
import { useMemo, useState } from "react";
import IPOSection from "@components/common/currentIpos/IPOSection";

export default function IPOListModal({ onClose }) {
  const [search, setSearch] = useState("");
  const { mainboard, sme } = useMemo(getIpoListData, []);

  const filter = (list) =>
    list.filter(
      (ipo) =>
        ipo.name &&
        ipo.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-full max-w-5xl rounded-lg flex flex-col max-h-[80vh]">

        {/* HEADER (fixed) */}
        <div className="flex justify-between items-center px-4 py-3 ">
          <h5 className="font-semibold">IPO List</h5>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* SEARCH (fixed) */}
        <div className="px-4 py-3">
          <input
            className="w-full border border-[#22222f1a] rounded px-3 py-2 text-sm bg-[#eaeff5]"
            placeholder="Type to search company name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto px-4">
          <IPOSection title="Mainboard IPOs" data={filter(mainboard)} />
          <IPOSection title="SME IPOs" data={filter(sme)} />
        </div>

        {/* FOOTER (fixed) */}
        <div className="flex items-center justify-center gap-3  px-4 py-3">
          <a
            href="/#"
            className="
              px-5 py-2 text-sm font-medium rounded-md
              border border-[#0cbc87] text-[#0cbc87]
              hover:bg-[#0cbc87] hover:text-white
              transition
            "
          >
            View All IPO Issues
          </a>

          <button
            onClick={onClose}
            className="
              px-5 py-2 text-sm font-medium rounded-md
              border border-[#595d69] text-[#595d69]
              hover:bg-[#595d69] hover:text-white
              transition
            "
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
