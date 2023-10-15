import React, { useState } from "react";
import styles from "../style";
import { nft_4, nft_5, nft_6, nft_7, nft_8, nft_9 } from "../Asset";

const Filter = () => {
  const Buttons = [
    {
      id: "Music",
      title: "Music",
    },
    {
      id: "Art",
      title: "Art",
    },
    {
      id: "Sports",
      title: "Sports",
    },
    {
      id: "Virtual",
      title: "Virtual",
    },
    {
      id: "More",
      title: "More",
    },
  ];

  const Cards = [
    {
      id: "nft_5",
      img: nft_5,
    },
    {
      id: "nft_6",
      img: nft_6,
    },
    {
      id: "nft_7",
      img: nft_7,
    },
    {
      id: "nft_8",
      img: nft_8,
    },
    {
      id: "nft_9",
      img: nft_9,
    },
    {
      id: "nft_4",
      img: nft_4,
    },
  ];

  const [active, setActive] = useState(true);

  const handleButton = (button) => {
    setActive(button);
  };

  return (
    <div className={`${styles.paddingX}`}>
      <div className="flex items-center justify-between">
        <h1
          className={`${styles.paddingY} capitalize text-white font-poppins font-bold text-[22px] md:text-[30px] `}
        >
          Hot NFTs
        </h1>
        <ul className="gap-4 lg:flex hidden">
          {Buttons.map((elem, index) => (
            <li
              onClick={() => handleButton(index)}
              key={elem.id}
              className={` cursor-pointer text-white font-poppins text-[16px] border-[#1E50FF] border-[2px] px-4 py-1 rounded-xl ${
                active === index ? `bg-[#1E50FF]` : null
              }`}
            >
              {elem.title}
            </li>
          ))}
        </ul>
        <button className=" lg:hidden flex text-white font-poppins text-[16px] border-[#1E50FF] border-[2px] px-6 py-2 rounded-xl hover:bg-[#1E50FF] duration-100">
          More
        </button>
      </div>
      <div className="flex gap-[23px] flex-col md:flex-row justify-center items-center w-full flex-wrap">
        {Cards.map((elem, index) => (
          <div key={index}>
            <img src={elem.img} alt={elem.id} className="w-[320px]" />
          </div>
        ))}
      </div>
      <div className={`${styles.flexCenter} py-10`}>
        <button className=" text-white font-poppins text-[16px] border-[#1E50FF] border-[2px] px-4 py-2 rounded-xl hover:bg-[#1E50FF] duration-100">
          View More
        </button>
      </div>
    </div>
  );
};

export default Filter;
