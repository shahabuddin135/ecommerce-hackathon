import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface FooterLink {
  title: string;
  links: string[];
}

const footerLinks: FooterLink[] = [
  {
    title: "Links",
    links: ["Home", "Shop", "About", "Contact"],
  },
  {
    title: "Help",
    links: ["Payment Options", "Returns", "Privacy Policies"],
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      className={`${poppins.className} border-t border-gray-200 mt-24 py-8 px-4 md:px-8`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Funiro.</h1>
          <address className="text-[#9F9F9F] not-italic ">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links Mapping */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg font-medium text-[#9F9F9F] mb-4">
              {section.title}
            </h2>
            <ul className="space-y-5">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Newsletter</h2>
          <form className="flex items-center space-x-10">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-4 py-2 outline-none underline border-none leading-3 underline-offset-4 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 text-black underline hover:opacity-65 underline-offset-4 transition-all "
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-200 pt-4 mx-36 text-start text-sm text-gray-500">
        © 2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
