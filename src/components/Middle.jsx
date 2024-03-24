import React from 'react';
import { IoIosRocket } from 'react-icons/io';
import { FiBookOpen } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import Slider from './Slider';
import { IoMdPerson } from "react-icons/io";
import { FaCalculator } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaUniversity } from 'react-icons/fa';
import { FaRegCalendarCheck } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LuAlertTriangle } from "react-icons/lu";
import { IoGlobeSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";

const Middle = () => {
  return (
    <>
      <div className='mb-0 rounded-2xl flex items-center nowrap'>
        <h1 className='p-8 px-12 font-semibold text-m whitespace-nowrap'>Say <span className='text-blue-500'>Found it </span> every step of the way</h1>
        <hr className="my-0 mx-4 w-3/4 border-t border-blue-200" />
      </div>

      {/* main content starts here.... */}
      
      <section className="text-gray-600 body-font p-0.5 pt-2 justify-center flex">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-2 cursor-pointer">
            <div className="lg:w-1/4 md:w-1/2 p-2">
              <div className="relative h-40 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-800 to-transparent rounded-md flex items-center justify-center text-white">
                  <IoIosRocket className="text-5xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2  bg-opacity-75 text-center">
                  <h5 className="text-gray-300 title-font text-base font-medium">Boost</h5>
                  <p className="text-gray-300 mt-2">Build visibility for yourself</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-2">
              <div className="relative h-40 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent rounded-md flex items-center justify-center text-white cursor-pointer">
                  <FiBookOpen className="text-5xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2  bg-opacity-75 text-center">
                  <h5 className="text-gray-300 title-font text-base font-medium">Prep</h5>
                  <p className="text-gray-300 mt-2">Up your interview success rate</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-2">
              <div className="relative h-40 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent rounded-md flex items-center justify-center text-white cursor-pointer">
                  <FaGraduationCap className="text-5xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2  bg-opacity-75 text-center">
                  <h5 className="text-gray-300 title-font text-base font-medium">Learn</h5>
                  <p className="text-gray-300 mt-2">Upskill to get ahead</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-2">
              <div className="relative h-40 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-transparent rounded-md flex items-center justify-center text-white cursor-pointer">
                  <FaNetworkWired className="text-5xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-2  bg-opacity-75 text-center">
                  <h5 className="text-gray-300 title-font text-base font-medium">Network</h5>
                  <p className="text-gray-300 mt-2">Grow with peers and mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider/>

{/* Popular categories start herer...... */}

<section className='mb-0'>
  <p className='font-bold px-9 py-7'>Popular Categories</p>
</section>
<section class="text-gray-600 body-font py-0">
  <div class="grid grid-cols-2 lg:grid-cols-6 gap-4 p-8">
    {/* First set of cards */}
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <FaUniversity className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">Banking</h5>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <FaRegCalendarCheck className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">Event Management</h5>
        </div>
      </div>
    </div>
    {/* Second set of cards */}
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <GoHome className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">Work From Home</h5>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <IoMdPerson className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">HR</h5>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <IoGlobeSharp className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">IT</h5>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <FaCode className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">SQL</h5>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <IoBag className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">Sales</h5>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <FaCode className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">Oracle</h5>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <FaCalculator className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">Accounting</h5>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <FaPaintBrush className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">Graphic Design</h5>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <IoBag className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">Customer Support</h5>
        </div>
      </div>
    </div>
    <div class="p-2">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <IoBag className="w-6 h-6 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 text-gray-500" />
        <div class="flex-grow">
          <h5 class="text-gray-900">Digital Marketing</h5>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="flex mt-24 justify-center items-center bg-gray-300 bg-opacity-50 px-4 py-3 rounded text-gray-700 text-lg font-bold">
  <LuAlertTriangle></LuAlertTriangle><span className='font-bold text-green-400 mr-2'>Beware of Scammers </span> <p> We dont charge any money for job offers.</p><a href="#" className='cursor-pointer'>Know More</a>
</div>

    </>
  );
};

export default Middle;
