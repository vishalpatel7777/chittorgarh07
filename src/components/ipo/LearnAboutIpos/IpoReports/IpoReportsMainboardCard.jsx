const IpoReportsMainboardCard = () => {
  return (
    <div
      className="
        bg-white
        rounded-[0.7rem]
        shadow-sm
        border-0
        mb-4
        pt-2
        py-3
        px-1
        lg:px-4
        overflow-hidden
        flex
        flex-col
      "
    >
      <div className="mt-2 md:flex md:items-start">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_report-list_116_51.png"
          alt="Report List - Other Reports"
          width={300}
          height={150}
          className="
            rounded
            shadow-sm
            mb-3
            mx-auto
            block
            md:mx-0
            md:mr-4
            md:mb-0
            object-contain
          "
        />

        {/* Content */}
        <div className="text-sm text-gray-700 leading-relaxed">
          <p>A list of other reports.</p>
        </div>
      </div>
    </div>
  );
};

export default IpoReportsMainboardCard;
