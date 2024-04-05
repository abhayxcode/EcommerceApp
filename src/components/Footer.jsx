import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    heading: "Customer",
    links: [
      {
        title: "Order Status",
        link: "/",
      },
      {
        title: "Collections",
        link: "/",
      },
      {
        title: "Our Story",
        link: "/",
      },
      {
        title: "Affiliates",
        link: "/",
      },
    ],
  },
  {
    heading: "Information",
    links: [
      {
        title: "Customer Service",
        link: "/",
      },
      {
        title: "Career",
        link: "/",
      },

      {
        title: "Terms & Conditions",
        link: "/",
      },
      {
        title: "Privacy Policy",
        link: "/",
      },
    ],
  },
  {
    heading: "Links",
    links: [
      { title: "Home", link: "/" },
      {
        title: "Shop",
        link: "/shop",
      },
      {
        title: "Cart",
        link: "/cart",
      },
      {
        title: "wishlist",
        link: "/",
      },
    ],
  },
];

const footerSocials = [
  <FaFacebookF className="text-2xl" />,
  <FaInstagram className="text-2xl" />,
  <FaLinkedinIn className="text-2xl" />,
  <FaXTwitter className="text-2xl" />,
];

const Footer = () => {
  return (
    <footer className="bg-black py-10 px-20">
      <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-center w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <h2 className="md:text-3xl uppercase font-bold text-[32px] text-[#2bc0a7] tracking-[-0.50px] w-auto">
              Gadgify.
            </h2>
            <p className="leading-[30.00px] max-w-[360px] md:max-w-full text-base text-gray-50">
              At Gadgify, we're passionate about bringing you the latest and
              most innovative gadgets to enhance your life. Explore our wide
              selection of tech products, enjoy fast shipping, hassle-free
              returns, and dedicated customer support.
            </p>
          </div>
          {/* Footer Links */}
          {footerLinks.map(({ heading, links }, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 items-start justify-start w-[210px]"
            >
              <h2 className="text-gray-50 text-xl tracking-[-0.50px] w-auto">
                {heading}
              </h2>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                {links.map(({ title, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    className="text-gray-400 text-sm tracking-[-0.50px] w-auto"
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-5 items-start justify-start w-[220px]">
            <h2 className="text-gray-50 text-xl tracking-[-0.50px] w-auto">
              Follow Us
            </h2>

            <div className="flex flex-row gap-5 items-start justify-start w-[auto]">
              {footerSocials.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex md:gap-10 items-center justify-center w-full">
          <p className="text-base text-gray-50 tracking-[1.5px] w-auto [word-spacing:5px]">
            © Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
