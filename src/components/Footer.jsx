import React from 'react'

export default function footer() {
  return (
    <div>
            <div
                className="h-[584px] bg-[#1E1C30] relative flex justify-center sm:relative sm:h-[1758px] sm:w-[450px]">

                <div
                    className="absolute w-[840px] h-[258px] mt-[163px] flex items-center gap-[180px] sm:w-full sm:h-auto sm:flex-col sm:mt-[141px] sm:gap-0">

                    <div className="w-[250px] flex flex-col gap-5 sm:w-[348px] sm:gap-[28.02px]">
                        <img className="w-[148px] h-[104px] sm:w-[138px] sm:h-[96.98px] sm:ml-[104px]" src="./assets/logo.svg" alt="" />
                        <span
                            className="w-[248px] h-[134px]  font-light text-[14px] leading-[19.6px] tracking-wider text-[#FFFFFF] sm:w-[348px] sm:h-[238px] sm:text-[18px] sm:leading-[25.2px] sm:text-center">
                            A memorial space as great as they were, to visit after they're gone.
                            <br /><br />
                            Eiternal helps take the stress out of organizing while you're trying
                            to process your grief.
                        </span>
                    </div>


                    <div className="w-[420px] flex sm:flex-col sm:gap-[100px] sm:w-[350px]">
                        <div className="w-[111px] h-[177px] sm:text-center sm:w-[350px] sm:h-[310px]">
                            <h2 className="font-heading font-normal text-[28px] text-[#ECC55C] sm:text-[50px]">
                                About
                            </h2>
                            <ul
                                className="mt-4  font-light text-[14px] tracking-wider text-[#FFFFFF] leading-[32.2px] sm:text-[24px] sm:leading-[55.2px] sm:mt-[30px]">
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">Our Story</li>
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">Gallery Regular</li>
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">Services</li>
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">FAQ</li>
   
                            </ul>
                        </div>
                        <div className="w-[111px] h-[177px] ml-[35px] sm:ml-0 sm:text-center sm:w-[350px] sm:h-[310px]">
                            <h2 className="font-heading font-normal text-[28px] text-[#ECC55C] sm:text-[50px]">
                                Links
                            </h2>
                            <ul
                                className="mt-4  font-light text-[14px] tracking-wider text-[#FFFFFF] leading-[32.2px] sm:text-[24px] sm:leading-[55.2px] sm:mt-[30px]">
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">About Us</li>
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">Features</li>
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">Blogs</li>
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">Religions</li>
   
                            </ul>
                        </div>
                        <div className="w-[152px] h-[177px] ml-5 sm:ml-0 sm:text-center sm:w-[350px] sm:h-[310px]">
                            <h2 className="font-heading font-normal text-[28px] text-[#ECC55C] sm:text-[50px]">
                                Categories
                            </h2>
                            <ul
                                className="mt-4  font-light text-[14px] tracking-wider text-[#FFFFFF] leading-[32.2px] sm:text-[24px] sm:leading-[55.2px] sm:mt-[30px]">
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">Funeral </li>
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">Burrial </li>
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">Eco Funeral
                                </li>
                                <li className="hover:text-[#ECC55C] hover:underline hover:underline-offset-2">Cremations</li>
   
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
