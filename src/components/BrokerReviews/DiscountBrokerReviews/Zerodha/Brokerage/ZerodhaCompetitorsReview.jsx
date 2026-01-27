import React from "react";

const competitors = [
  {
    name: "5paisa",
    href: "/stockbroker/5paisa/4/",
    img: "https://www.chittorgarh.net/images/ipo/5paisa-capital-ltd.jpg",
  },
  {
    name: "Aditya Birla Money",
    href: "/stockbroker/aditya-birla-money/16/",
    img: "https://www.chittorgarh.net/images/ipo/aditya-birla-capital-logo.jpg",
  },
  {
    name: "Alice Blue",
    href: "/stockbroker/aliceblue/43/",
    img: "https://www.chittorgarh.net/images/ipo/aliceblue-logo.png",
  },
  {
    name: "Anand Rathi",
    href: "/stockbroker/anand_rathi_broker/31/",
    img: "https://www.chittorgarh.net/images/ipo/anand_rathi_logo.jpg",
  },
  {
    name: "Angel One",
    href: "/stockbroker/angel-broking/14/",
    img: "https://www.chittorgarh.net/images/ipo/angel-one-logo.png",
  },
  {
    name: "AxisDirect",
    href: "/stockbroker/axisdirect/35/",
    img: "https://www.chittorgarh.net/images/ipo/axis-securities-logo.png",
  },
  {
    name: "Bajaj Broking",
    href: "/stockbroker/bajaj-broking/17/",
    img: "https://www.chittorgarh.net/images/ipo/bajaj-broking-logo.png",
  },
  {
    name: "BlinkX",
    href: "/stockbroker/blinkx/179/",
    img: "https://www.chittorgarh.net/images/ipo/blinkx-logo.png",
  },
  {
    name: "Dhan",
    href: "/stockbroker/dhan/176/",
    img: "https://www.chittorgarh.net/images/ipo/dhan-logo.png",
  },
  {
    name: "Firstock",
    href: "/stockbroker/firstock/177/",
    img: "https://www.chittorgarh.net/images/ipo/firstock-logo.jpg",
  },
];

const ZerodhaCompetitorsReview = () => {
  return (
    <div className="relative mx-auto mb-6 overflow-hidden pb-12">
      
      {/* Title */}
      <h2 className="mb-2 text-lg font-semibold text-[#22222f]">
        Zerodha Competitors Review
      </h2>

      {/* Horizontal Scroll */}
      <div className="relative overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-4">
          {competitors.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex-shrink-0 no-underline"
            >
              <div className="mt-3 flex w-[160px] flex-col items-center rounded-lg bg-white p-2 shadow-sm transition-transform duration-200 hover:scale-105">
                
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#f7f8f9]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="max-h-10 max-w-10 object-contain"
                  />
                </div>

                <small className="w-full truncate text-center font-semibold text-[#22222f]">
                  {item.name}
                </small>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-2 text-right text-sm text-[#595d69]">
        Information on this page was last updated on Friday, October 4, 2024
      </p>
    </div>
  );
};

export default ZerodhaCompetitorsReview;
