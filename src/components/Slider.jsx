import React, { useRef, useEffect } from 'react';

const Slider = () => {
  
  // Define an array of company logo URLs
  const LOGOS = [
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/september/N2zW75QqgL2iUuUUDmrc3vVPu7P3g0fW1WNi82Ph.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/july/yynMGMz9qDDEqNQPLmijAa0FqfdmRuUNrI1icveZ.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/october/YReWYFMk24w9ourRJ2RxQf1k81sJU14UyDHrvKgU.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/HN5y7hp89MHcEWgrSi9haJG4iDYWE3DHH0RvvEau.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/august/yTKoftvbNtE2p1x5VqUo5NDOUfwnH2SSOL0BolFB.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2024/march/TXX8gsCUizrZtkrCukOn0tfewudD1VG3wJqj45tO.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/september/N2zW75QqgL2iUuUUDmrc3vVPu7P3g0fW1WNi82Ph.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/september/15WS2PQ92d4ic3bvZcKPVBpvR7OwXuTdjW94riUL.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/august/yTKoftvbNtE2p1x5VqUo5NDOUfwnH2SSOL0BolFB.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/march/QEzey8P9T3AkU5VMMm2LRXyyUXhH5JxA75GVWiK8.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/HN5y7hp89MHcEWgrSi9haJG4iDYWE3DHH0RvvEau.jpeg",
  ];

  return (
    <>
      <p className='py-3 px-4 flex m-3 font-semibold'>Featured Companies</p>
      <div className="relative m-auto w-[900px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[200px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div className="slide flex w-[125px] items-center justify-center" key={index}>
              <img src={logo} alt={`Company ${index}`} className="w-full h-auto gap-3" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
