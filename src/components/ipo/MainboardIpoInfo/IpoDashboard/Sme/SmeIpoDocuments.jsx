import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaLink } from "react-icons/fa";

const SmeIpoDocuments = ({ data }) => {
  return (
    <div className="relative group">
      <h2 className="text-lg font-semibold text-black mb-2">
        SME IPO Document
      </h2>

      <p className="text-secondary mb-4 max-w-5xl">
        IPO offer documents, Draft Red Herring Prospectus (DRHP) and Red Herring
        Prospectus (RHP), offer critical insights into a company’s business,
        financials, and objectives.
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={3}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ".sme-prev";
          swiper.params.navigation.nextEl = ".sme-next";
        }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1.1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="border border-emerald-600 rounded-xl p-4 bg-white h-full">
              <div className="flex items-start gap-3">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-20 h-20 object-contain bg-white
             border border-emerald-600 rounded-lg p-2
             transform -translate-y-9"
                />

                <span className="font-medium text-blue-700 truncate">
                  {item.company}
                </span>
              </div>

              <div className="mt-4">
                <a
                  href={item.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-black hover:underline"
                >
                  <FaLink />
                  {item.documentType}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows — SAME BEHAVIOUR AS MAINBOARD */}
      <button
        className="sme-prev absolute left-2 top-1/2 -translate-y-1/2
                   opacity-0 group-hover:opacity-100 transition
                   bg-white border rounded-full p-2 shadow z-10"
      >
        ‹
      </button>

      <button
        className="sme-next absolute right-2 top-1/2 -translate-y-1/2
                   opacity-0 group-hover:opacity-100 transition
                   bg-white border rounded-full p-2 shadow z-10"
      >
        ›
      </button>

      <div className="flex justify-end mt-4">
        <a href="#" className="text-blue-700 text-sm hover:underline">
          More ..
        </a>
      </div>
    </div>
  );
};

export default SmeIpoDocuments;
