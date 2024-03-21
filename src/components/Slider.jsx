import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({ repeat: +1 });
    const slider = sliderRef.current;

   
    gsap.set(slider, { x: '+60%' });

    
    tl.to(slider, { duration: 15, x: '0%', ease: 'linear' })
      .to(slider, { duration: 10000, x: '-100%' }); 

    return () => {
      tl.kill(); // Kill animation on unmount
    };
  }, []);

  // Define an array of company logo URLs
  const companyLogos = [
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/september/N2zW75QqgL2iUuUUDmrc3vVPu7P3g0fW1WNi82Ph.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/july/yynMGMz9qDDEqNQPLmijAa0FqfdmRuUNrI1icveZ.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/october/YReWYFMk24w9ourRJ2RxQf1k81sJU14UyDHrvKgU.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/HN5y7hp89MHcEWgrSi9haJG4iDYWE3DHH0RvvEau.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/august/yTKoftvbNtE2p1x5VqUo5NDOUfwnH2SSOL0BolFB.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2024/march/TXX8gsCUizrZtkrCukOn0tfewudD1VG3wJqj45tO.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/september/N2zW75QqgL2iUuUUDmrc3vVPu7P3g0fW1WNi82Ph.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/september/15WS2PQ92d4ic3bvZcKPVBpvR7OwXuTdjW94riUL.jpeg",
    "https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/august/yTKoftvbNtE2p1x5VqUo5NDOUfwnH2SSOL0BolFB.jpeg"
  ];

  return (
    <div className="bg-gray-100 px-9 py-7">
      <h3 className="font-bold">Featured Companies</h3>
      <div ref={sliderRef} className="flex space-x-8 p-4 overflow-hidden">
      
        {companyLogos.map((logo, index) => (
          <div key={index} className="w-64 overflow-hidden">
            <img
              src={logo}
              alt={`Company ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
