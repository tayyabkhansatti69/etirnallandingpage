import React from 'react'

export default function Howitwork() {
  return (
    <div  id="howitwork" className='flex justify-center items-center flex-col mb-12 sm:mb-16'>
    <div className="w-[840px] h-[32px] bg-[#1E1C30] sm:w-[450px] sm:h-14"></div>
    <div className="h-[720px] flex flex-col items-center sm:flex-col sm:h-auto">
        <h1 className="w-[840px] h-[60px] text-start mt-36 mb-16 font-heading font-bold text-[50px] text-[#000000] sm:w-[450px] sm:text-center sm:mt-8 sm:mb-8 sm:text-[30px]">
            How it Works
        </h1>
        <div className="w-[873px] h-[497.27px] flex gap-[25px] sm:flex-col sm:w-[450px] sm:pl-12 sm:h-auto sm:gap-4">
            <div>
              <img src="./assets/01.svg" className='absolute' alt="" />
            <img className="h-[244px] w-[360px] sm:h-[450px] sm:w-[350px] mt-6" src="./assets/pic1.png" alt="" />
            <h1 className='w-[254px] pl-2 h-[26px] text-center font-bold text-[17px] leading-[25px] sm:ml-[10px] sm:w-[340px] sm:text-[22px]'>Fill in details about your loved one</h1>
            <p className='w-[254px] h-[42px] font-light text-[14px] leading-[21px] text-left pl-[14px] sm:ml-[17px] sm:mt-2 sm:mb-8 sm:w-[340px] sm:text-[19px] '>Customize with a theme include info for upcoming services</p>
            </div>
            <div>
              <img src="./assets/02.svg" className='absolute' alt="" />
            <img className="h-[244px] w-[360px] sm:h-[450px] sm:w-[350px] mt-6" src="./assets/pic2.png" alt="" />
            <h1 className='w-[254px] pl-2 h-[26px] text-center font-bold text-[17px] leading-[25px] sm:ml-[10px] sm:w-[340px] sm:text-[22px]'>Fill in details about your loved one</h1>
            <p className='w-[254px] h-[42px] font-light text-[14px] leading-[21px] text-left pl-[14px] sm:ml-[17px] sm:mt-2 sm:mb-8 sm:w-[340px] sm:text-[19px] '>Customize with a theme include info for upcoming services</p>
            </div>
            <div>
              <img src="./assets/03.svg" className='absolute' alt="" />
            <img className="h-[244px] w-[360px] sm:h-[450px] sm:w-[350px] mt-6" src="./assets/pic3.png" alt="" />
            <h1 className='w-[254px] pl-2 h-[26px] text-center font-bold text-[17px] leading-[25px] sm:ml-[10px] sm:w-[340px] sm:text-[22px]'>Fill in details about your loved one</h1>
            <p className='w-[254px] h-[42px] font-light text-[14px] leading-[21px] text-left pl-[14px] sm:ml-[17px] sm:mt-2 sm:mb-8 sm:w-[340px] sm:text-[19px] '>Customize with a theme include info for upcoming services</p>
            </div>
        </div>
    </div>
</div>


  )
}
