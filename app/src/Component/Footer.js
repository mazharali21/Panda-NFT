import React from "react";
import styles from "../style";
import { Logo, facebook, linkedin, twitter, youtube } from "../Asset";

const Footer = () => {

    const Resources = [
        {
            id:"Help Center",
            title:"Help Center"
        },
        {
            id:"Platform Status",
            title:"Platform Status"
        },
        {
            id:"Partners",
            title:"Partners"
        },
        {
            id:"Blog",
            title:"Blog"
        },
       
    ]

    const Company = [
        {
            id:"Our Team",
            title:"Our Team"
        },
        {
            id:"About",
            title:"About"
        },
        {
            id:"Contact",
            title:"Contact"
        },
        {
            id:"Career",
            title:"Career"
        },
    ]

  return (
    <section className={`${styles.paddingX} pt-14 flex flex-col lg:flex-row flex-wrap lg:flex-nowrap`}>
      <div className="flex  gap-2 flex-col">
        <div className="flex items-center justify-start gap-2">
          <img alt="Logo" src={Logo} className="" />
          <h1 className="text-white text-[18px] font-poppins ">Panda NFT</h1>
        </div>
        <p className="capitalize text-white py-4 text-[12px]  max-w-[280px]">
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-4 md:mt-0 gap-6 lg:gap-20 lg:px-20 justify-between ">
        <ul className={` flex flex-col list-none `}>
          <h1 className="font-poppins text-white font-semibold text-[25px] pb-4 ">
            Resources
          </h1>
          {Resources.map((elem) => (
            <li
              key={elem.id}
              className={`${styles.paragraph} capitalize text-white py-2`}
            >
              {elem.title}
            </li>
          ))}
        </ul>
        <ul className={` flex flex-col list-none `}>
          <h1 className="font-poppins text-white font-semibold text-[25px] pb-4 ">
            Company
          </h1>
          {Company.map((elem) => (
            <li
              key={elem.id}
              className={`${styles.paragraph} capitalize text-white py-2`}
            >
              {elem.title}
            </li>
          ))}
        </ul>
        <div className="flex flex-col ">
            <h1 className="font-poppins text-white font-semibold text-[25px] pb-4 ">
             Contact
            </h1>
            <p className="text-white w-[160px]">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
              <div className="flex gap-4 py-6">
                    <img src={facebook} alt="facebook"/>
                    <img src={linkedin} alt="linkedin"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={youtube} alt="youtube"/>
                </div>  
        </div>
      </div>
    </section>
  );
};

export default Footer;
