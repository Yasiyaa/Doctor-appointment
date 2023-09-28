import React from "react";
import heroImage01 from "../assets/images/hero-img01.png";
import heroImage02 from "../assets/images/hero-img02.png";
import heroImage03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import {BsArrowRight,} from "react-icons/bs"
import { Link } from "react-router-dom";
import About from "../Components/About/About";


const Home = () => {
  return (
    <>
      {/*=========hero section========*/}
      <section className="hero__section pt=[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*============hero content============ */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  {" "}
                  We help patients live a healthy,longer life
                </h1>

                <p className="text__para">
                  Bali is predominantly a Hindu country. Bali is known for its
                  elaborate, traditional dancing. The dancing is inspired by its
                  Hindi beliefs. Most of the dancing portrays tales of good
                  versus evil. To watch the dancing is a breathtaking
                  experience. Lombok has some impressive points of interest –
                  the majestic Gunung Rinjani is an active volcano. It is the
                  second highest peak in Indonesia. Art is a Balinese passion.
                  Batik paintings and carved statues make popular souvenirs.
                </p>

                <button className="btn">Request an Appoinment</button>
              </div>

              {/*===========hero counter================== */}

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className=" text__para"> Years of Experiance</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className=" text__para"> Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className=" text__para"> Patiant Satisfaction</p>
                </div>
              </div>
            </div>
            {/*============hero content============ */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImage01} alt="" />
              </div>

              <div className="mt-[30px]">
                <img src={heroImage02} className="w-full mb-[30px]" alt="" />
                <img src={heroImage03} className="w-full " alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=========hero section========*/}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para">
              World class caare for everyone. Our heath system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[25px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-9 text-textColor font-[400] text-center">
                  World class caare for everyone. Our heath system offers
                  unmatched, expert health care. From the lab to the clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>

                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[25px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-9 text-textColor font-[400] text-center">
                  World class caare for everyone. Our heath system offers
                  unmatched, expert health care. From the lab to the clinic
                </p>

                <Link
                  to="/services"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>

                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[25px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-9 text-textColor font-[400] text-center">
                  World class caare for everyone. Our heath system offers
                  unmatched, expert health care. From the lab to the clinic
                </p>

                <Link
                  to="/contact"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>

                </Link>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      <About></About>
      
    </>
  );
};

export default Home;
