import React from 'react'
import Slider from './Slider'
export default function Memories_page() {
  return (
    <div className="h-[793.79px] flex justify-center sm:h-[1040px] sm:flex sm:flex-col sm:mt-[147px] ">
    <div className="flex flex-row sm:flex-col">
      <div className="w-[574.17px] bg-[#95D3DF] sm:w-[450px] sm:h-[400px] sm:bg-[#95D3DF] sm:relative">
      <div className="w-[396px] h-[368px] z-50 mt-32 ml-[210px] sm:w-[200px] sm:h-[179px] sm:mt-24 sm:ml-[105px] relative">
        <Slider/>
      {/* <div className="absolute top-0 left-8 z-50 w-[418px] h-[373px] bg-slate-400 rounded-[29px]"></div> */}

        <img src="./assets/p3-leftpic2.png" alt="" className="absolute top-[-21px] right-[67px] z-40 sm:top-[-9px] sm:right-[-6px]"/>
        <img src="./assets/p3-leftpic3.png" alt="" className="absolute top-[-49px] right-[102px] z-30 sm:top-[-20px] sm:right-[22px]"/>
      </div>

       
        <div className="absolute hidden w-[24px] h-[24px] top-[365px] left-[195px] sm:block">
          <img src="./assets/threedots.png" alt="" />
        </div>
      </div>
      <div className="w-[871.13px] flex flex-col sm:h-[780px] sm:w-[450px]">
        <div className="h-[462.39px] z-10 bg-[#ECC55C] sm:relative sm:h-[380px]">
          <div className="w-[68px] h-[81px] mt-52 ml-[137.83px] sm:mt-16 sm:ml-[180px]">
            <img src="./assets/p3-handlogo.svg" alt="" className="sm:w-[67px] sm:h-[80px]" />
          </div>
          <div className="w-[443px] h-[120px] mt-10 ml-[134px] sm:w-[350px] sm:h-[180px] sm:absolute sm:top-36 sm:ml-10 sm:font-bold sm:text-[50px] sm:leading-[60px] sm:text-center sm:text-white">
            <h1 className="font-heading font-bold text-[50px] leading-[60px] text-[#FFFFFF]">
              Collect Memories and Condolences
            </h1>
          </div>
        </div>
        <div className="h-[331.4px] bg-[#FFAFCA] sm:relative">
          <div className="w-[393px] h-[40px]  font-light text-[14px] leading-[19.6px] text-[#1E1C30] mt-14 ml-[134px] tracking-wider sm:w-[351px] sm:h-[75px] sm:ml-12 sm:text-[18px] sm:font-light sm:leading-[25px] sm:tracking-[5%] sm:text-center">Friends and family can upload photos and videos with memories and condolences that you can store in one central place.</div>
          <a href="#howitwork" className="w-[181px] h-[42px] absolute mt-[65.23px] ml-[115px] font-light text-[19px] leading-[41px] tracking-widest text-center sm:ml-[85px] sm:w-48 sm:text-[26px]">How To Work</a>
          <img src="./assets/right arrow black.png" className="w-[36px] h-[15px] absolute mt-[80px] ml-[275px] sm:ml-[280px] sm:mt-[75px] sm:w-[57.24px] sm:h-[23.73px]" alt="" />
        </div>
      </div>
    </div>
  </div>
  
  
  )
}

