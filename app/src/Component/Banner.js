import React from "react";
import styles from "../style";

const Banner = () => {
  return (
    <div className={`${styles.paddingX} py-5`}>
      <div className="w-[100%] flex flex-col card_bg rounded-xl items-center py-3  md:py-10  ">
        <h1
          className={` capitalize text-white font-poppins font-bold text-[40px] ${styles.flexCenter} text-center`}
        >
          Create Your Own NFT!
        </h1>
        <p className="text-white text-[12px] text-center w-[60%] py-3 md:py-7">
          We have a large scale group to support each other in this game, Join
          us to get the news as soon as possible and follow our latest
          announcements! Join Comunity Now
        </p>
        <button className=" text-white font-poppins text-[16px] border-[#1E50FF] border-[2px] px-4 py-2 rounded-xl bg-[#1E50FF] duration-100">
          Join Comunity Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
