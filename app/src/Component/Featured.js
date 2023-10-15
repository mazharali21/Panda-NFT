import React from "react";
import styles from "../style";
import { card_1, card_2, card_3, card_4 } from "../Asset";

const Featured = () => {
  const Cards = [
    {
      id: "card_1",
      img: card_1,
    },
    {
      id: "card_2",
      img: card_2,
    },
    {
      id: "card_3",
      img: card_3,
    },
    {
      id: "card_4",
      img: card_4,
    },
  ];

  return (
    <div className={`${styles.paddingX}`}>
      <div className="flex justify-between items-center">
        <h1
          className={`${styles.paddingY} capitalize text-white font-poppins font-bold text-[22px] md:text-[30px] `}
        >
          Featured Artist
        </h1>
        <button className=" text-white font-poppins text-[16px] border-[#1E50FF] border-[2px] px-4 py-2 rounded-xl hover:bg-[#1E50FF] duration-100">
          View More
        </button>
      </div>
      <div className="flex gap-4 md:gap-2 flex-col md:flex-row justify-center items-center w-full">
            {
                Cards.map((elem,index)=>(
                    <div key={index}>
                        <img src={elem.img} alt={elem.id}  />
                    </div>
                ))
            }
      </div>
    </div>
  );
};

export default Featured;
