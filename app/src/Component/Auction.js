import React from "react";
import styles from "../style";
import { nft_3, nft_4, nft_5, person, person_1, person_2 } from "../Asset";

const Auction = () => {
  const User = [
    {
      img: nft_3,
      user: person,
    },
    {
      img: nft_4,
      user: person_1,
    },
    {
      img: nft_5,
      user: person_2,
    },
  ];

  return (
    <div className={`${styles.paddingX}`}>
      <div className="flex justify-between items-center">
        <h1
          className={`${styles.paddingY} capitalize text-white font-poppins font-bold text-[22px] md:text-[30px] `}
        >
          Live Auctions
        </h1>
        <button className=" text-white font-poppins text-[16px] border-[#1E50FF] border-[2px] px-4 py-2 rounded-xl hover:bg-[#1E50FF] duration-100">
          View More
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
        {User.map((elem, index) => (
            <div key={index}>
              <img src={elem.img} alt={elem.id}/>
            </div>
        ))}
      </div>  
    </div>
  );
};

export default Auction;
