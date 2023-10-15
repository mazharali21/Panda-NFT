import React from "react";
import styles from "../style";
import { icon } from "../Asset";

const Marketplace = () => {
  const Data = [
    {
      id: 1,
      title: "Set up your wallet",
      description:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      img: icon,
    },
    {
      id: 2,
      title: "Add your NFTs",
      description:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      img: icon,
    },
    {
      id: 3,
      title: "List them for sale",
      description:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      img: icon,
    },
  ];

  return (
    <section className={`${styles.paddingX}`}>
        <h1 className={`${styles.paddingY} capitalize text-white font-poppins font-bold text-[40px] ${styles.flexCenter} text-center`}>
           Create and sell your NFTs
        </h1>
      <div className={`${styles.boxWidth} ${styles.flexCenter} flex flex-col lg:flex-row gap-5`}>
        {Data.map((elem) => (
          <div 
          key={elem.id}
          className="w-[330px] h-[350px] bg-[#272d37b7] rounded-[10px] flex flex-col gap-7 justify-center items-center">
            <img src={elem.img} alt="icon" className="w-[80px]" />
            <h2 className=" capitalize text-white font-poppins font-bold">
              {elem.title}
            </h2>
            <p className="text-[#ADB9C7] text-[12px] font-poppins px-10 text-center ">
              {elem.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketplace;
