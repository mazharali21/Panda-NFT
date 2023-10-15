import React from "react";
import { nft_1, nft_2, person, person_1 } from "../Asset";

const User_Card = () => {
  const User = [
    {
      img: nft_1,
      user: person,
    },
    {
      img: nft_2,
      user: person_1,
    },
  ];

  return (
    <div className="flex gap-4 flex-col md:flex-row">
      {User.map((elem,index) => (
        <div className="bg-[#272D37] w-[300px] h-[385px] rounded-2xl overflow-hidden" key={index}>
          <img src={elem.img} alt="nft" className="w-[260px] mx-5 my-4" />
          <div className="flex mx-5 justify-between items-center my-4">
            <p className="text-white text-[12px]">"Hamlet Contemplates ...</p>
            <button className="text-[12px] text-white bg-[#1E50FF] px-2 rounded-md">
              BSC
            </button>
          </div>
          <div className="flex items-center mx-5 my-3">
            <img src={elem.user} alt="user" className="w-[40px]" />
            <div className="ml-2">
              <p className="text-[10px] text-[#8F9CA9] font-poppins mb-1">
                Creator
              </p>
              <p className="text-[13px] text-[#fff] font-poppins">
                SalvadorDali
              </p>
            </div>
            <div className="ml-[75px]">
              <p className="text-[10px] text-[#8F9CA9] font-poppins mb-1">
                Current Bid
              </p>
              <p className="text-[13px] text-[#fff] font-poppins">4.89 eTH</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User_Card;
