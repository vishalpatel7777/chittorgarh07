import NseTableCard from "../NseSharePrices/NseTableCard";
import ComparisonBar from '../NseSharePrices/ComparisonBar'

import FAQLayout from '@components/common/faq/FAQLayout'
const BseMiddle = () => {
  return (
    <div className="space-y-6">
        <div className="rounded-xl bg-white p-4 shadow-sm">
      
      <NseTableCard />

      <div className="w-full px-1 py-3 text-center">
      <div className="relative mx-auto mb-3 overflow-hidden rounded-2xl border bg-white shadow-sm">
        {/* Animated background layer (visual only) */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-60" />

        {/* Particle placeholders */}
        <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-blue-400 opacity-60" />
        <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-red-400 opacity-60" />
        <div className="absolute bottom-6 left-6 h-2 w-2 rounded-full bg-green-400 opacity-60" />

        {/* Content */}
        <div className="relative grid h-full grid-cols-1 md:grid-cols-12">
          {/* LEFT BOX */}
          <div className="flex flex-col items-center justify-center bg-green-700 px-3 py-4 text-white md:col-span-4">
            <div className="text-3xl">🚀</div>
            <h6 className="mt-1 text-center text-sm font-bold">
              SME IPO Consultant
            </h6>
            <p className="mt-1 text-center text-xs opacity-90">
              <span className="font-semibold">Ready to list?</span>
              <br />
              Let’s make it happen!
            </p>
            <div className="mt-2 text-sm">✨ 🌟</div>
          </div>

          {/* RIGHT BOX */}
          <div className="flex flex-col justify-center px-4 py-4 md:col-span-8">
            <h6 className="mb-3 text-center text-sm font-bold text-gray-800">
              📝 Quick Enquiry
            </h6>

            <form className="flex flex-col gap-2">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  maxLength={50}
                  className="rounded-full border px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  maxLength={10}
                  className="rounded-full border px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  maxLength={50}
                  className="rounded-full border px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  maxLength={100}
                  className="rounded-full border px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* Message */}
              <textarea
                rows={2}
                placeholder="Message"
                maxLength={500}
                required
                className="rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              {/* Bottom Row */}
              <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
                {/* reCAPTCHA placeholder */}
                <div className="h-[78px] w-[304px] rounded border bg-gray-100 text-xs text-gray-500 flex items-center justify-center">
                  reCAPTCHA placeholder
                </div>

                {/* Actions */}
                <div className="flex flex-col items-end">
                  <button
                    type="submit"
                    className="mb-2 rounded-full border border-green-700 px-5 py-1 text-sm font-bold text-green-700 transition hover:bg-green-700 hover:text-white"
                  >
                    💬 Send
                  </button>

                  <a
                    href="/book-modules/sme-ipo-guide-for-companies/3/"
                    className="text-xs font-semibold text-green-700 hover:underline"
                  >
                    📘 SME IPO Guide
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-left text-sm text-gray-600">
        <p>
          The price data displayed for the above BSE SME stock list is as of the
          previous day.
        </p>
      </div>
    </div>


      <ComparisonBar />
       <FAQLayout />
      </div>


    </div>
  );
};

export default BseMiddle;
