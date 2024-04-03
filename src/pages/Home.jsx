import React from "react";
import productList from "../data/Products";
import homeBanner from "../assets/homeBanner.png";
import laptopBanner from "../assets/laptop.png";
import gadgetBanner from "../assets/gadgets.jpg";
import specialProduct1 from "../assets/latestProduct1.png";
import specialProduct2 from "../assets/latestProduct2.webp";
// Company logos
import logoSony from "../assets/logos/logo_sony.jpg";
import logoIphone from "../assets/logos/logo_iphone.jpg";
import logoLenevo from "../assets/logos/logo_lenevo.png";
import logoHp from "../assets/logos/logo_hp.png";
import logoDell from "../assets/logos/logo_dell.jpg";
import logoCanon from "../assets/logos/logo_canon.jpg";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Card from "../components/ProductCard";

const brandLogos = [
  { logo: logoSony, link: "https://www.sony.com/" },
  {
    logo: logoIphone,
    link: "https://www.apple.com",
  },
  {
    logo: logoLenevo,
    link: "https://www.lenovo.com",
  },
  {
    logo: logoHp,
    link: "https://www.hp.com",
  },
  {
    logo: logoDell,
    link: "http://www.dell.com",
  },
  {
    logo: logoCanon,
    link: "https://in.canon/en/consumer/web/camera-catalogue",
  },
];

const specialProducts = [
  {
    img: specialProduct1,
    title: "Google Pixel 6",
    text: "For all you are google fanatics",
  },
  {
    img: specialProduct2,
    title: "boat airdopes",
    text: "True wireless earbuds",
  },
];

const safetyTips = [
  {
    icon: <IoRocketOutline className="h-[24px] w-[24px] " />,
    title: "Fast Shipping",
    text: "Enjoy swift delivery of your orders at no additional cost",
  },
  {
    icon: <MdOutlineLock className="h-[24px] w-[24px]" />,
    title: "Safe Delivery",
    text: "Rest assured that your gadgets are handled with care",
  },
  {
    icon: <FaArrowRotateRight className="h-[22px] w-[22px]" />,
    title: "365 Days Return",
    text: "Return your gadgets within 30 days for a hassle-free exchange or refund",
  },
  {
    icon: <IoCallOutline className="h-[24px] w-[24px]" />,
    title: "24 hours CS",
    text: "Our dedicated customer service team is available around the clock to assist you",
  },
];

const Home = () => {
  const newestProducts = productList.filter((product) => product.newProduct);

  return (
    <main className="mt-[68px]">
      {/* Orange banner */}
      <section className="flex items-end justify-center w-full max-h-[calc(100vh-68px)] bg-orange-100 md:px-10 sm:px-5 px-[75px] pt-20">
        <div className="flex w-full h-full md:flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1290px]">
          <div className="w-[45%] flex flex-col gap-[30px] items-start justify-start pb-20 ">
            <h2 className="text-black-900 text-xl tracking-[-0.50px] w-full">
              One stop solution for all Gadgets
            </h2>
            <h2 className="leading-[60.00px] md:text-[38px] text-[40px] font-bold text-left text-black-900 tracking-[-0.50px]">
              Discover the latest tech
              <br /> from cameras to phones
              <br />
              to elevate your lifestyle.
            </h2>
            <Link
              className="bg-sky-950 border-2 border-sky-950 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-center text-xl text-yellow-100 tracking-[-0.50px]"
              to="/shop"
            >
              Shop Now
            </Link>
          </div>
          <div className="flex justify-end w-[55%] h-full md:w-full object-cover">
            <img
              className="h-full max-h-[80vh] object-contain"
              src={homeBanner}
              alt="nathanoakleyo"
            />
          </div>
        </div>
      </section>
      {/* Black Brand Banner */}
      <section className="bg-black flex flex-col items-center justify-center gap-20 md:px-10 px-[170px] py-[80px] w-full">
        <h2 className="text-center text-gray-50 text-2xl tracking-[-0.50px] w-full">
          We are associated with Various successful brands
        </h2>
        <div className="flex gap-14 items-end justify-center w-full md:flex-col md:gap-[50px] ">
          {brandLogos.map(({ logo, link }, index) => (
            <a href={link} target="_blank" key={index}>
              <img
                className="max-h-[45px] h-[45px] w-auto hover:translate-x-1 hover:scale-110"
                src={logo}
                alt={`${logo} Photo`}
              />
            </a>
          ))}
        </div>
      </section>
      {/* Special Models */}
      <section className="flex items-center justify-center md:px-10 p-[75px]  w-full bg-orange-50">
        <div className="grid gap-20 md:grid-cols-1 grid-cols-2 justify-center max-w-[1290px] mx-auto w-full">
          {specialProducts.map(({ img, title, text }, index) => (
            <div className="flex justify-center items-center p-6 bg-gradient-to-r from-[#27383C] to-[#274951]">
              <div className="flex flex-col items-start gap-6 w-[55%] text-white">
                <h2 className="text-lg tracking-[-0.50px] w-full">{title}</h2>
                <h2 className="md:max-w-full max-w-xs text-4xl md:text-[34px] font-bold  tracking-[-0.50px] mt-3">
                  {text}
                </h2>

                <Link
                  className="common-pointer border-2 border-gray-50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-base text-center text-gray-50 tracking-[-0.50px]"
                  to="/shop"
                >
                  Shop Now
                </Link>
              </div>
              <div className="w-[45%] ">
                <img
                  className="h-full md:h-auto max-h-[200px] object-cover mx-auto"
                  src={img}
                  alt="sammoghadamkh"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Newest Products*/}
      <section className="flex items-center justify-center md:px-10 p-[75px] pb-[160px] w-full bg-orange-50">
        <div className="max-w-[1290px] mx-auto w-full flex flex-col justify-center items-center gap-3">
          <h1 className="md:text-[34px] text-[40px] text-black font-bold text-center tracking-[-0.50px] w-full">
            Our Newest Products
          </h1>
          <h3 className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full">
            Made of best materials and with a design that follows the times
          </h3>
          <div className="flex flex-col w-full gap-[47px] items-center mx-2.5 mt-5">
            <div className="gap-x-6 gap-y-10 grid md:grid-cols-2 grid-cols-4 items-start justify-center w-full">
              {newestProducts.map(
                ({ id, img, title, prevPrice, newPrice, newProduct }) => (
                  <Card
                    key={id}
                    id={id}
                    img={img}
                    title={title}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                    newProduct={newProduct}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Laptop Banner*/}
      <section className="flex items-center justify-center w-full h-[50vh] bg-orange-100 md:px-10 sm:px-5 px-[75px] py-20 ">
        <div className="flex w-full h-full md:flex-col md:gap-10 gap-[60px] items-center justify-between max-w-[1290px]">
          <div className="flex flex-col gap-[10px] items-start justify-start w-[35%] ">
            <h2 className="text-black-900 text-xl tracking-[-0.50px] w-full">
              One stop solution for all laptops
            </h2>
            <p className="leading-[40.00px] md:text-[30px] text-[34px] font-bold text-left text-black tracking-[-0.50px] my-5">
              Your old PC is lagging?
              <br />
              No worries...
            </p>
            <Link
              className=" border-2 border-sky-950 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-center text-xl  tracking-[-0.50px]"
              to="/shop"
            >
              Shop Now
            </Link>
          </div>
          <div className="w-[65%] bg-slate-50 md:w-full object-cover relative">
            <img
              className="h-[500px] w-auto object-contain absolute top-[-280px] left-20 z-[99]"
              src={laptopBanner}
              alt="laptop banner image"
            />
          </div>
        </div>
      </section>
      {/* Safety */}
      <section className="flex flex-col font-raleway items-center justify-center md:px-10 p-[75px]  w-full">
        <div className="flex md:flex-col md:gap-10 gap-[85px] items-center justify-between max-w-[1290px] mx-auto w-full ">
          <div className="flex flex-1 flex-col gap-[50px] h-full items-start justify-start w-full">
            <h2 className="font-bold leading-[60.00px] max-w-[602px] md:max-w-full md:text-[38px] text-[40px] text-black tracking-[-0.50px]">
              We guarantee the safety of your shopping
            </h2>
            <div className=" sm:gap-5 gap-[50px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              {safetyTips.map(({ icon, title, text }, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col gap-5 items-start justify-start w-full"
                >
                  {icon}
                  <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                    <h2
                      className="text-black-900 text-xl tracking-[-0.50px] w-full"
                      size="txtRalewaySemiBold20"
                    >
                      {title}
                    </h2>
                    <h2 className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]">
                      {text}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col md:w-[50%] w-[600px] md:h-[640px] h-full overflow-hidden max-h-[540px] object-cover ">
            <img src={gadgetBanner} className="object-cover h-full w-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
