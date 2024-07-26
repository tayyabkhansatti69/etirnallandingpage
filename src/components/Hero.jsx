"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="h-[805.08px] bg-[#1E1C30] flex justify-center sm:h-[1099px] sm:w-[450px] sm:flex sm:flex-col">
        <div className="flex justify-between items-center absolute text-[#ECC55C] text-[16px] font-light tracking-wider w-[845px] h-[89px] top-[50px] sm:top-[39px] sm:w-64 sm:left-[156px]">
          <img src="./assets/logo.svg" alt="" className="sm:w-[138px] sm:h-[96.98px]" />
          <div className="sm:hidden">
            <a href="https://tayyab-repo-9wd1.vercel.app/pages/login"><button className="mr-[20px]">LOG IN</button></a>
            <a href="https://tayyab-repo-9wd1.vercel.app/pages/register">
              <button className="border border-[#ECC55C] px-[32px] py-[15px]">SIGN UP</button>
            </a>
          </div>
        </div>

        <div className='hidden sm:block'>
        <div className="absolute w-[24px] h-[24px] top-[39px] left-[55px]" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="text-[#ECC55C] text-2xl absolute z-50" />
        </div>

        {menuOpen && (
          <div className="absolute top-[10px] left-0 bg-[#1E1C30] z-30 flex flex-col items-center justify-center space-y-4 sm:w-[450px] sm:h-[400px]">
            <a href="https://tayyab-repo-9wd1.vercel.app/pages/login">
              <button className="border border-[#ECC55C] px-[32px] py-[15px] sm:w-[390px] text-[#ECC55C]">LOG IN</button>
            </a>
            <a href="https://tayyab-repo-9wd1.vercel.app/pages/register">
              <button className="border border-[#ECC55C] px-[32px] py-[15px] sm:w-[390px] text-[#ECC55C]">SIGN UP</button>
            </a>
          </div>
        )}
        </div>
        

        <div className="w-[845px] h-[442px] absolute flex top-[228px] sm:w-[425px] sm:flex sm:flex-col sm:top-[169px]">
          <div className="flex flex-col mt-[90px] sm:w-[350px]">
            <h1 className="font-heading font-bold w-[595.44px] h-[148px] text-[62px] leading-[74.4px] text-[#FFFFFF] sm:w-[350px] sm:h-[180px] sm:text-[50px] sm:leading-[60px] sm:text-center sm:absolute sm:left-[50px] sm:top-[372.69px] sm:z-10">
              This is where your legacy shines on.
            </h1>
            <p className="w-[383px] h-[57px] mt-[20px] font-light text-[13px] leading-[18.2px] tracking-wider text-[#FFFFFF] sm:absolute sm:w-[350px] sm:h-[172px] sm:text-[18px] sm:leading-[25.2px] sm:text-center sm:left-[50px] sm:top-[559.69px]">
              A memorial space as great as they were, to visit after they're gone.
              Eiternal helps take the stress out of organizing while you're trying
              to process your grief.
            </p>
            <a href="https://tayyab-repo-9wd1.vercel.app/pages/register">
              <button className="w-[171px] h-[52px] mt-[37px] text-[#ECC55C] border border-[#ECC55C] flex items-center justify-center gap-[10px] tracking-[0.2em] sm:w-[350px] sm:h-[69px] sm:absolute sm:top-[739px] sm:left-[50px] sm:text-[26px]">
                SIGN UP <img src="./assets/p1-yellowarrow.svg" alt="" />
              </button>
            </a>
          </div>
          <div className="absolute w-[365px] h-[442px] left-[480px] sm:w-[350px] sm:h-[425.31px] sm:left-[50px]">
            <img src="./assets/girl pic.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
