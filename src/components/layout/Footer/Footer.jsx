const FooterQuickBtn = ({ icon, label, href }) => (
  <a
    href={href}
    className="bg-[#22222f] rounded-xl px-10 py-6 text-center
               hover:bg-[#29292e] transition-colors
               flex flex-col items-center gap-2 min-w-[160px]"
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </a>
);

const FooterSiteCard = ({ href, img, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="bg-white rounded-2xl shadow-sm p-4
               hover:shadow-md transition-shadow"
  >
    <img
      src={img}
      alt={alt}
      className="w-[200px] h-[50px] object-cover"
      loading="lazy"
    />
  </a>
);


import {
  FaEnvelope,
  FaSitemap,
  FaBullhorn,
  FaInfoCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-[#191a1f] text-[#f7f8f9] pt-6 w-full">



      <div className="max-w-7xl mx-auto px-4">


        {/* Quick Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <FooterQuickBtn icon={<FaEnvelope />} label="Contact" href="#" />
          <FooterQuickBtn icon={<FaSitemap />} label="Sitemap" href="/sitemap" />
          <FooterQuickBtn
            icon={<FaBullhorn />}
            label="Advertise"
            href="/article/advertise-with-us/258/"
          />
          <FooterQuickBtn
            icon={<FaInfoCircle />}
            label="About"
            href="/article/about-chittorgarh-com/259/"
          />
        </div>

        {/* Download App */}
        <div className="text-center mb-12">
          <h6 className="font-bold uppercase mb-4">Download Our App</h6>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://bit.ly/3tYCoxP"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.chittorgarh.net/images/google-play.png"
                alt="Google Play"
                className="w-40 h-[50px] object-cover"
                loading="lazy"
              />
            </a>

            <a
              href="https://apple.co/3ymbN11"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.chittorgarh.net/images/app-store.png"
                alt="App Store"
                className="w-40 h-[50px] object-cover"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* Our Websites */}
        <h6 className="font-bold uppercase text-center mb-4">
          Our Websites
        </h6>

        <div className="flex flex-wrap justify-center gap-4 pb-6">
          <FooterSiteCard
            href="https://www.investorgain.com/"
            img="https://www.chittorgarh.net/ig/images/logo/investorgain-com-logo.png"
            alt="Investorgain"
          />
          <FooterSiteCard
            href="https://www.ipoplatform.com/"
            img="https://www.chittorgarh.net/images/ipo-platform-logo.png"
            alt="IPO Platform"
          />
          <FooterSiteCard
            href="https://comparesharebrokers.com/"
            img="https://www.chittorgarh.net/images/csb-logo.png"
            alt="Compare Brokers"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-gray-700 text-center text-sm py-4">
        <a
          href="/article/disclaimer-and-privacy-statement/238/"
          className="hover:underline"
        >
          Disclaimer & Privacy Statement
        </a>
        <span className="mx-2">|</span>
        <span>
          © 2026{" "}
          <a
            href="https://www.chittorgarh.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:underline"
          >
            Chittorgarh Infotech Ltd
          </a>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
