import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
          <div className="flex flex-col gap-5 items-start justify-start w-[210px]">
            <h2 className="text-gray-50 text-xl tracking-[-0.50px] w-auto">
              Customer
            </h2>
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <h2 className="text-gray-400 text-sm tracking-[-0.50px] w-auto">
                Order Status
              </h2>
              <h2 className="text-gray-400 text-sm tracking-[-0.50px] w-auto">
                Collections
              </h2>
              <h2 className="text-gray-400 text-sm tracking-[-0.50px] w-auto">
                Our Story
              </h2>
              <h2 className="text-gray-400 text-sm tracking-[-0.50px] w-auto">
                Affiliates
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-start justify-start w-[210px]">
            <h2 className="text-gray-50 text-xl tracking-[-0.50px] w-auto">
              Information
            </h2>

            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <h2 className="text-gray-400 text-sm tracking-[-0.50px] w-auto">
                Customer Service
              </h2>
              <h2 className="text-gray-400 text-sm tracking-[-0.50px] w-auto">
                Careers
              </h2>
              <h2 className="text-gray-400 text-sm tracking-[-0.50px] w-auto">
                FAQ
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-start justify-start w-[220px]">
            <h2 className="text-gray-50 text-xl tracking-[-0.50px] w-auto">
              Follow Us
            </h2>

            <div className="flex flex-row gap-5 items-start justify-start w-[auto]">
              <a
                href="/"
                className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10"
              >
                <FaFacebookF className="text-2xl" />
              </a>

              <a
                href="/"
                className=" bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="/"
                className=" bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="/"
                className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10"
              >
                <FaXTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:gap-10 items-start justify-between w-full">
          <p className="text-base text-gray-50 tracking-[-0.50px] w-auto">
            © Copyright 2022. All Rights Reserved.
          </p>
          <div className="flex gap-[40px] items-start justify-start w-[270px]">
            <a
              href="/"
              className="flex-1 text-base text-gray-50 tracking-[-0.50px] w-auto"
            >
              Terms of condition
            </a>
            <a
              href="/"
              className="text-base text-gray-50 tracking-[-0.50px] w-auto"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
