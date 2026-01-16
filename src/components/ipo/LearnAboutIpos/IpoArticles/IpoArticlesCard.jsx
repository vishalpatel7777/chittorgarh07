const IpoArticlesCard = () => {
  return (
    <div
      className="
        bg-white
        shadow-sm
        border-0
        rounded-[0.7rem]
        mb-3
        py-3
        pt-2
        px-1
        lg:px-4
        overflow-hidden
      "
    >
      <div className="clearfix mt-2">
        {/* Image */}
        <img
          src="https://www.chittorgarh.net/images/ipo/report_article-list_101.png"
          alt="Mainboard IPO Articles, Tutorials and Reviews"
          width={300}
          height={150}
          className="
            block
            mx-auto
            mb-2
            rounded
            shadow-sm
            border-0
            max-w-full
            md:float-left
            md:mr-4
          "
        />

        {/* Content */}
        <div className="text-gray-700 leading-relaxed text-sm">
          <p className="mb-3">
            100&apos;s of privately held companies use Initial Public Offer (IPO)
            every year to raise fund and get listed at stock exchanges (BSE and
            NSE). We provide information about upcoming IPO, current IPO, and
            historic IPO to investors. This includes IPO dates, IPO news,
            allotment status, listing status and IPO performance. Our analyst
            reviews each IPO and provides IPO recommendations for each
            main-board IPO. We also provide a range of reports for investors to
            analyze historic IPO Data.
          </p>

          <p>
            Read IPO news article, IPO tutorial and IPO research reports
            contributed by the team of expert.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IpoArticlesCard;
