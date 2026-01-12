const BasisofAllotmentsIposMainboardCard = () => {
  return (
    <div
      className="
        w-full
        bg-white
        rounded-xl
        shadow-sm
        border-0
        mb-4
        py-4 pt-2
        px-1 lg:px-4
        overflow-hidden
        flex flex-col
      "
    >
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_ipo_basis_of_allotment_list_7_all.png"
          alt="IPOs Basis of Allotments List 2026"
          width={300}
          height={150}
          className="
            w-full md:w-[300px]
            h-auto
            rounded
            shadow-sm
            mx-auto md:mx-0
            flex-shrink-0
          "
        />

        {/* Content */}
        <div className="text-sm leading-relaxed text-gray-700">
          <p className="mb-3">
            <a
              href="/book-chapter/ipo-allotment/25/#basis-of-allotment-explained"
              title="IPO Basis of Allotment"
              className="text-blue-600 hover:underline font-medium"
            >
              IPO Basis of Allotment
            </a>{" "}
            is a document prepared and published by the registrar of an IPO that
            provides detail about the allotment in consultation with the stock
            exchanges. It ensures fairness by applying specific rules for
            allocation, which can be proportionate (based on demand) or utilize a
            lottery system.
          </p>

          <p className="mb-3">
            The Basis of Allotment in IPO acts as a set of guidelines for
            allocating shares of an IPO when demand exceeds the supply of
            shares. It considers various factors, such as number of applications
            received, total number of shares applied for, investor category etc.
            and ensures fairness and transparency in the allocation process,
            allowing investors to understand how shares are allotted.
          </p>

          <p className="mb-3">
            The Basis of Allotment document typically provides details such as the
            total number of applications received, total number of shares applied
            for, and allotment ratio for each investor category, like retail
            individual investors (RIIs), non-institutional investors (NIIs), and
            qualified institutional buyers (QIBs).
          </p>

          <p className="font-semibold italic">
            <a
              href="https://www.chittorgarh.com/book-chapter/ipo-allotment/25/#basis-of-allotment-explained"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read More &gt;&gt;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasisofAllotmentsIposMainboardCard;
