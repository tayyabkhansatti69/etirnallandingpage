"use client";

import React, { useRef, useState, useEffect } from 'react';

const Religions = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of cards
  const numCards = 6; // Update this if the number of cards changes

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newIndex = Math.max(0, currentIndex - 1);
      setCurrentIndex(newIndex);
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust this value to control the scroll distance
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const newIndex = Math.min(numCards - 1, currentIndex + 1);
      setCurrentIndex(newIndex);
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust this value to control the scroll distance
        behavior: 'smooth',
      });
    }
  };

  const handleDotClick = (index) => {
    if (scrollContainerRef.current) {
      setCurrentIndex(index);
      scrollContainerRef.current.scrollTo({
        left: 300 * index, // Adjust this value based on card width
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const updateIndexOnScroll = () => {
      if (scrollContainerRef.current) {
        const scrollPosition = scrollContainerRef.current.scrollLeft;
        const cardWidth = 300; // Adjust this value based on card width
        const newIndex = Math.round(scrollPosition / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener('scroll', updateIndexOnScroll);

    return () => {
      container.removeEventListener('scroll', updateIndexOnScroll);
    };
  }, []);

  return (
    <div className="h-[800px] flex justify-center sm:h-[1099px] sm:bg-green-5">
      <div className="w-[1445px] flex gap-0">
        <div className="w-[300px] absolute sm:hidden">
          <img src="assets/p4-flowerpic.png" className="w-[629px] h-[629px] absolute top-64" alt="" />
        </div>

        <div className="w-[1145px] absolute ml-[220px] sm:flex sm:flex-col sm:w-[450px] sm:ml-0">
          <div className="w-[335px] h-[120px] mt-12 ml-20 font-heading font-bold text-[50px] leading-[60px] text-[#000000]  sm:ml-[50px] sm:w-[350px] sm:h-[120px] sm:text-center">
            Conventions <br />
            by Religion
          </div>

          <div
            ref={scrollContainerRef}
            className=" ml-16 flex scroll-hide overflow-x-auto pt-[67.23px]  w-[1100px] h-[700px] sm:flex-col sm:overflow-y-auto sm:w-[450px] sm:top-[777px] sm:ml-0 sm:pt-0 sm:mt-16 sm:h-[870px]">
            <div className="flex space-x-[30px] ml-5 sm:flex-col sm:space-x-0 sm:ml-[50px]">
              {/* Cards */}
              {[
                { src: 'christian.png', title: 'Christian Funeral', description: 'Christian funeral ceremonies vary depending on the denomination, but most include prayers, hymns, and a eulogy. The ceremony may be held in a church, a funeral home, or at a gravesite.' },
                { src: 'jew.png', title: 'Jewish Funeral', description: 'Jewish funeral ceremonies vary depending on the denomination, but most include prayers, hymns, and a eulogy. The ceremony may be held in a church, a funeral home, or at a gravesite.' },
                { src: 'muslim.png', title: 'Muslim Funeral', description: 'Muslim funeral ceremonies vary depending on the denomination, but most include prayers, hymns, and a eulogy. The ceremony may be held in a church, a funeral home, or at a gravesite.' },
                { src: 'hindu.png', title: 'Hindu Funeral', description: 'Hindu funeral ceremonies vary depending on the denomination, but most include prayers, hymns, and a eulogy. The ceremony may be held in a church, a funeral home, or at a gravesite.' },
                { src: 'buddist.png', title: 'Buddhist Funeral', description: 'Buddhist funeral ceremonies vary depending on the denomination, but most include prayers, hymns, and a eulogy. The ceremony may be held in a church, a funeral home, or at a gravesite.' },
                { src: 'jain.png', title: 'Jain Funeral', description: 'Jain funeral ceremonies vary depending on the denomination, but most include prayers, hymns, and a eulogy. The ceremony may be held in a church, a funeral home, or at a gravesite.' },
              ].map((card, index) => (
                <div key={index} className="relative w-[252px] h-[403px] group rounded-lg mb-6 transition-shadow duration-300 ease-in-out hover:shadow-lg sm:w-[350px] sm:h-[123px] sm:hover:h-[350px]">
                  <img src={`assets/${card.src}`} className="w-full h-full opacity-90 hover:opacity-80 transition-opacity duration-300 ease-in-out sm:rounded-[22px]" alt="Image Card" />
                  <h2 className="font-normal mb-[10px] ml-5 absolute bottom-5 left-1/3 transform -translate-x-1/2 text-[28px] leading-[33px] text-white font-heading group-hover:hidden transition-all duration-300 ease-in-out sm:text-[36px] sm:w-[295px] sm:h-[43px] sm:ml-0 sm:text-center sm:bottom-0 sm:mb-[38px] sm:left-1/2">
                    {card.title}
                  </h2>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-[#549697] bg-opacity-90 text-white opacity-0 rounded-3xl group-hover:opacity-100 transition-opacity duration-300 ease-in-out overflow-hidden">
                    <h2 className="w-[199px] h-[68px] ml-5 text-[28px] font-normal leading-[33.6px] font-heading mt-[45px] sm:w-[295px] sm:h-[43px] sm:text-[36px] sm:text-center sm:ml-[28px] sm:mt-[53px]">
                      {card.title}
                    </h2>
                    <p className="text-[13px] font-light leading-[18px] tracking-[5%] w-[199px] h-[108px] ml-5 mt-[11px] sm:w-[301px] sm:h-[150px] sm:text-[18px] sm:leading-[25.2px] sm:tracking-wider sm:text-center sm:ml-[25px] sm:mt-[10px]">
                      {card.description}
                    </p>
                    <img src="assets/right arrow white.svg" className="w-[63px] h-[26px] mt-[105px] ml-5 sm:mt-6 sm:ml-[146px]" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center text-[14px] ml-20 tracking-[0.2em] absolute top-[700px] gap-[23.58px] font-normal sm:hidden">
            <button onClick={scrollLeft} className="text-black">BACK</button>
            <div className="flex space-x-2">
              {Array.from({ length: numCards }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-black' : 'bg-gray-400'}`}
                ></span>
              ))}
            </div>
            <button onClick={scrollRight} className="text-[#1E1C30]">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Religions;
