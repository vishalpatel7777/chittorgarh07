const RiReviewsCard = () => {
  return (
    <div
      className="
        mb-4
        overflow-hidden
        rounded-[0.7rem]
        bg-white
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        px-1
        py-4
        pt-2
        lg:px-4
        flex
        flex-col
        min-w-0
      "
    >
      <div className="mt-2 clearfix">
        <div className="text-[#1e1e27] leading-[1.8rem] text-sm md:text-base">
          <p className="mb-4 text-[#5c5c5c]">
            Rights issue review by SEBI registered analysts provides an in-depth
            view and analysis to the shareholders. This data supported rights
            issue forecast helps the shareholders to decide if the rights issue
            is worth subscribing. The reviews also provide recommendations to
            tell whether the rights issue is good or bad.
          </p>

          <p className="text-[#5c5c5c]">
            The{" "}
            <span className="font-semibold text-[#1e1e27]">
              rights issue reviews
            </span>{" "}
            provide detailed analysis of company background, offer detail,
            company valuation, capital structure, financial performance,
            strength, risks &amp; benefits of investment, and recommendation
            about the rights issue. These{" "}
            <span className="font-semibold text-[#1e1e27]">notes</span> are
            presented keeping both, the short term and long term investors in
            mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiReviewsCard;
