const IpoAllotmentStatusMainboardCard = () => {
  return (
    <div
      className="
        flex flex-col
        bg-white
        border-0
        rounded-xl
        shadow-sm
        overflow-hidden
        will-change-transform
        mb-4
        py-4 pt-2
        px-1 lg:px-4
      "
    >
      <div className="mt-2 flex flex-col md:flex-row items-start">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_ipo-allotment-status-check-date-process_23.png"
          alt="IPO Allotment Status - Check Date, Process, Calculation 2026"
          width={300}
          height={150}
          className="
            mx-auto md:mx-0
            mb-3 md:mb-0
            md:mr-4
            rounded
            shadow-sm
            block
          "
        />

        {/* Content */}
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>
            <strong>IPO Allotment Status</strong> provides the detail about the
            number of shares allotted to the investor in an Initial Public Offer
            (IPO).{" "}
            <strong>
              <a
                href="/book-chapter/ipo-allotment/25/#ipo-allotment-process"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                title="IPO Allotment"
              >
                IPO Allotment Process
              </a>
            </strong>{" "}
            is carried out by the registrar of the IPO.{" "}
            <strong>IPO Allotment Date</strong> is the date when the allotment
            status is announced to the public on the website of the registrar of
            the IPO.
          </p>

          <p>
            <strong>IPO allotment calculation</strong> is published by the
            registrar in the{" "}
            <a
              href="/book-chapter/ipo-allotment/25/#basis-of-allotment-explained"
              className="text-blue-600 hover:underline"
              title="IPO Basis of Allotment List"
            >
              Basis Of Allotment
            </a>{" "}
            document. Investors can{" "}
            <strong>check IPO allotment</strong> by visiting the website of the
            registrar (i.e. Linkintime / Karvy / KFin Tech) once the allotment is
            done.
          </p>

          <p>
            IPO investors are also informed about the{" "}
            <strong>new IPO allotment status</strong> by BSE, NSE, CDSL, and NSDL
            through email and SMS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IpoAllotmentStatusMainboardCard;
