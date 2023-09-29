import React from "react";
import heroImage01 from "../assets/images/hero-img01.png";
import heroImage02 from "../assets/images/hero-img02.png";
import heroImage03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoImage from "../assets/images/video-icon.png";
import featureImage from "../assets/images/feature-img.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "../Components/About/About";
import ServiceList from "../Components/Servieces/ServiceList";

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
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
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
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
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
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/*=========Services section ========*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              world class care for everyone. Our health system offers
              unmatched,expert health care
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/*=========Services section end========*/}

      {/*=========Fetures section ========*/}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*=========Fetures content section ========*/}

            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1.Schedule the appointment directly
                </li>
                <li className="text__para">
                  2.Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3.View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/*=========Fetures Image=======*/}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImage} alt="" className="w-3/4" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10.00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoImage} alt="" />
                  </span>
                </div>


                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=========Fetures section end========*/}
    </>
  );
};

export default Home;
