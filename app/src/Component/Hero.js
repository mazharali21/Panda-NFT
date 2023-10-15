import React from "react";
import styles from "../style";
import { hero_bg, nft_1, person, text, white_gradient } from "../Asset";
import User_Card from "./User_Card";
import Brand from "./Brand";

const Hero = () => {
  return (
    <section className=" overflow-hidden">
      {/* <div className=' absolute z-0 w-[95%] lg:w-[75%] h-[100vh] lg:h-[95vh] bg-[#04091A] ml-3 rounded-t-[50px]' ></div> */}
      <img src={hero_bg} className=" absolute z-0 h-auto w-[93%] lg:w-[80%] ml-3 "></img>
        <div
          className={`${styles.paddingX} relative z-[5] flex flex-col lg:flex-row mt-10`}
        >
          <div className={`max-w-[520px] ${styles.paddingY}`}>
            <h1 className="text-white text-[45px] font-poppins font-extrabold ">
              Discover a New Era of Crypto Currency
            </h1>
            <p className="text-white font-poppins text-[28px] mt-5 leading-[55px] ">
              Diversity, Security <br /> and Reliability
            </p>
            <img src={text} alt="text" className="w-[200px] mt-3" />
          </div>

          {/* User Cards */}

          <img
            src={white_gradient}
            className=" absolute z-0 w-[700px] hidden lg:flex right-20  -top-10"
          ></img>

          <div className=" relative z-[5] flex justify-center items-center">
            <User_Card />
          </div>
        </div>

      {/* Brands */}

      <div className=" relative z-[5] mt-12 lg:mt-1 ">
        <Brand />
      </div>
    </section>
  );
};

export default Hero;
