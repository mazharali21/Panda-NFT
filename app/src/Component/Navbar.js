import { React, useState } from "react";
import styles from "../style";
import { Gradient, Logo } from "../Asset";
import { NavItems } from "./Constant";
import { close, menu , helmet  } from "../Asset";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`py-3`}>
      <div className="flex items-center justify-between w-full">
      <img src={Gradient} className=" absolute z-[0] -top-10 -left-5"/>
        <div className="flex items-center justify-start gap-2 ">
          <img alt="Logo" src={Logo} className="" />
          <h1 className="text-white text-[18px] font-poppins ">Panda NFT</h1>
        </div>
        <div className={`${styles.paddingX} lg:flex hidden lg:justify-center relative z-[10]`}>
          <ul className="flex list-none gap-5 text-[14px]">
            {NavItems.map((elem) => (
              <li
                key={elem.id}
                className={`${styles.paragraph} text-white hover:border-b-[2px] border-[#1E50FF] duration-100 cursor-pointer`}
              >
                {elem.title}    
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:flex hidden lg:justify-end relative z-[5]">
          <button className="text-white text-[16px] border-[#1E50FF] border-[2px] px-4 py-2 rounded-xl hover:bg-[#1E50FF] duration-100    ">
            Connect Wallet
          </button>
        </div>
        <div className='flex justify-end absolute top-0 right-10 z-0 opacity-70'>
            <img 
            alt='Helmet'
            src={helmet}
            className="w-[140px]"/>
        </div>

                {/* For Small Devices */}

        <div className={`lg:hidden flex flex-1 justify-end items-center relative z-[10] `}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="object-contain w-[28px] h-[28px]"
            onClick={() => setToggle((elem) => !elem)}
          />    
          <div
            className={`${
              toggle ? `flex` : `hidden`
            } p-6 bg-black-gradient absolute top-20 mx-6 my-2 min-w-[100%] right-0 rounded-xl sidebar 
            `}
          >
            <ul
              className={`list-none justify-end items-center flex-1 capitalize  `}
            >
              {NavItems.map((items, index) => (
                <li
                  key={items.id}
                  className={`nav duration-200 px-2 rounded-xl font-poppins cursor-pointer font-normal text-white text-[16px] ${
                    index === NavItems.length - 1 ? `mr-0` : `mb-4 `
                  }`}
                >
                  {items.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
