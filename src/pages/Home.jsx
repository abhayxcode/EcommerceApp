import React from "react";
import HomePageProductCard from "../components/Products/HomePageProductCard";

import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

const Home = () => {
  return (
    <main className="mt-[68px]">
      {/* Orange banner */}
      <section className="flex items-center justify-center w-full min-h-[calc(100vh-80px)] bg-orange-100 md:px-10 sm:px-5 px-[75px] py-20 ">
        <div className="flex w-full md:flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1290px]">
          <div className="flex flex-col gap-[30px] items-start justify-start w-1/2 ">
            <h2 className="text-black-900 text-xl tracking-[-0.50px] w-full">
              Interior Needs
            </h2>
            <h2 className="leading-[60.00px] md:text-[38px] text-[40px] font-bold text-left text-black-900 tracking-[-0.50px]">
              Various new collections <br /> of furniture to decorate <br />
              the corner of your house.
            </h2>
            <button
              className="bg-sky-950 border-2 border-sky-950 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-center text-xl text-yellow-100 tracking-[-0.50px]"
              // onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>
          <div className="w-1/2 h-auto max-h-[566px] md:w-full object-cover">
            <img
              className="h-full w-full object-cover"
              src="/src/assets/laptop.jpg"
              alt="nathanoakleyo"
            />
          </div>
        </div>
      </section>
      {/* Black Brand Banner */}
      <section className="bg-black flex flex-col items-center justify-center gap-16 md:px-10 px-[173px] py-[41px] w-full">
        <h2 className="text-center text-gray-50 text-2xl tracking-[-0.50px] w-full">
          Various brands have used our products
        </h2>
        <div className="flex md:flex-col md:gap-[50px] items-center justify-between w-full">
          <img
            className="h-auto w-[220px]"
            src="/src/assets/lenevo_logo.png"
            alt="search"
          />
          <img
            className="h-auto w-[212px]"
            src="/src/assets/lenevo_logo.png"
            alt="companylogocomp"
          />
          <img
            className="h-12 w-[92px]"
            src="/src/assets/lenevo_logo.png"
            alt="companylogocomp_One"
          />
          <img
            className="h-12 w-[141px]"
            src="/src/assets/lenevo_logo.png"
            alt="companylogocomp_Two"
          />
          <img
            className="h-12 w-[134px]"
            src="/src/assets/lenevo_logo.png"
            alt="companylogocomp_Three"
          />
          <img
            className="h-12 w-[132px]"
            src="/src/assets/lenevo_logo.png"
            alt="companylogocomp_Four"
          />
        </div>
      </section>
      {/* Latest Models */}
      <section className="flex items-center justify-center md:px-10 p-[75px]  w-full bg-orange-50">
        <div className="grid gap-20 md:grid-cols-1 grid-cols-2 justify-center max-w-[1290px] mx-auto w-full">
          <div className="flex justify-center items-center p-6 bg-gradient-to-r from-[#27383C] to-[#274951]">
            <div className="flex flex-col items-start gap-6 w-full text-white">
              <h2 className="text-lg tracking-[-0.50px] w-full">Living Room</h2>
              <h2 className="md:max-w-full max-w-xs text-4xl md:text-[34px] font-bold  tracking-[-0.50px] mt-3">
                The best foam padded chair
              </h2>

              <button
                className="common-pointer border-2 border-gray-50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-base text-center text-gray-50 tracking-[-0.50px]"
                // onClick={() => navigate("/shop")}
              >
                Shop Now
              </button>
            </div>
            <div className="">
              <img
                className="h-[300px] md:h-auto max-h-[300px] object-cover"
                src="/src/assets/laptop.jpg"
                alt="sammoghadamkh"
              />
            </div>
          </div>
          <div className="flex justify-center items-center p-6 bg-gradient-to-r from-[#27383C] to-[#274951]">
            <div className="flex flex-col items-start gap-6 w-full text-white">
              <h2 className="text-lg tracking-[-0.50px] w-full">Living Room</h2>
              <h2 className="md:max-w-full max-w-xs text-4xl md:text-[34px] font-bold  tracking-[-0.50px] mt-3">
                The best foam padded chair
              </h2>

              <button
                className="common-pointer border-2 border-gray-50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-base text-center text-gray-50 tracking-[-0.50px]"
                // onClick={() => navigate("/shop")}
              >
                Shop Now
              </button>
            </div>
            <div className="">
              <img
                className="h-[300px] md:h-auto max-h-[300px] object-cover"
                src="/src/assets/laptop.jpg"
                alt="sammoghadamkh"
              />
            </div>
          </div>
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
            <div className="gap-x-6 gap-y-10 grid md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
              <HomePageProductCard
                name="Teack wood Chair"
                image="/src/assets/laptop.jpg"
                category="Living Room"
                price="$25"
              />
              <HomePageProductCard
                name="Teack wood Chair"
                image="/src/assets/laptop.jpg"
                category="Living Room"
                price="$25"
              />
              <HomePageProductCard
                name="Teack wood Chair"
                image="/src/assets/laptop.jpg"
                category="Living Room"
                price="$25"
              />
              <HomePageProductCard
                name="Teack wood Chair"
                image="/src/assets/laptop.jpg"
                category="Living Room"
                price="$25"
              />
              <HomePageProductCard
                name="Teack wood Chair"
                image="/src/assets/laptop.jpg"
                category="Living Room"
                price="$25"
              />
              <HomePageProductCard
                name="Teack wood Chair"
                image="/src/assets/laptop.jpg"
                category="Living Room"
                price="$25"
              />
              <HomePageProductCard
                name="Teack wood Chair"
                image="/src/assets/laptop.jpg"
                category="Living Room"
                price="$25"
              />
              <HomePageProductCard
                name="Teack wood Chair"
                image="/src/assets/laptop.jpg"
                category="Living Room"
                price="$25"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Interior Modern */}
      <section className="flex items-center justify-center w-full h-[50vh] bg-orange-100 md:px-10 sm:px-5 px-[75px] py-20 ">
        <div className="flex w-full h-full md:flex-col md:gap-10 gap-[60px] items-center justify-between max-w-[1290px]">
          <div className="flex flex-col gap-[10px] items-start justify-start w-1/2 ">
            <h2 className="text-black-900 text-xl tracking-[-0.50px] w-full">
              Interior Needs
            </h2>
            <h2 className="leading-[60.00px] md:text-[30px] text-[34px] font-bold text-left text-black tracking-[-0.50px]">
              Arrange your home in such a way with our modern interiors
            </h2>
            <button
              className=" border-2 border-sky-950 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-center text-xl  tracking-[-0.50px]"
              // onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>
          <div className="w-1/2 max-h-[100%] md:w-full object-cover relative top-[-150px]">
            <img
              className="h-full w-full object-cover"
              src="/src/assets/laptop.jpg"
              alt="nathanoakleyo"
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
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <IoRocketOutline className="h-[24px] w-[24px]" />
                <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                  <h2
                    className="text-black-900 text-xl tracking-[-0.50px] w-full"
                    size="txtRalewaySemiBold20"
                  >
                    Fast Shipping
                  </h2>
                  <h2
                    className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has
                  </h2>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <MdOutlineLock className="h-[24px] w-[24px]" />
                <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                  <h2
                    className="text-black-900 text-xl tracking-[-0.50px] w-full"
                    size="txtRalewaySemiBold20"
                  >
                    Safe Delivery
                  </h2>
                  <h2
                    className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has
                  </h2>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <FaArrowRotateRight className="h-[22px] w-[22px]" />
                <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                  <p
                    className="text-black-900 text-xl tracking-[-0.50px] w-full"
                    size="txtRalewaySemiBold20"
                  >
                    365 Days Return
                  </p>
                  <p
                    className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                    size="txtRubikRegular14"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <IoCallOutline className="h-[24px] w-[24px]" />
                <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                  <h2 className="text-black-900 text-xl tracking-[-0.50px] w-full">
                    24 hours CS
                  </h2>
                  <h2 className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col md:w-[50%] w-[600px] md:h-[640px] h-full overflow-hidden max-h-[540px] object-cover ">
            <img
              src="/src/assets/laptop.jpg"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
