import { FaFileAlt } from "react-icons/fa";

export default function ViewAllReportsCard() {
  return (
    <div className="border border-[#0cbc87] rounded-xl shadow mb-6 p-3  bg-[#fff]">
      <div
        className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-4
          
         
        "
      >
        {/* Left content */}
        <div className="flex items-center">
          <div className="mr-3 text-[#025c41] text-3xl">
            📑
          </div>

          <div>
            <h5 className="text-[#0cbc87] font-bold text-base mb-1">
              View All IPO Reports
            </h5>
            <p className="text-sm text-gray-500">
              Access the complete list of research reports and insights for better investment decisions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="/report/report-list/116/49/"
          className="
            inline-flex items-center gap-2
            border border-[#0cbc87]
            text-[#0cbc87]
            px-4 py-2
            rounded-md
            text-sm font-medium
            hover:bg-[#0cbc87] hover:text-white
            transition
          "
        >
          <FaFileAlt />
          View Reports
        </a>
      </div>
    </div>
  );
}
