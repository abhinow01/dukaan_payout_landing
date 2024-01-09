import React from 'react'
import { GoSearch } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";
function Header() {
    return (
      <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200 w-full">
        {/* Title */}
        <div className="flex items-center">
            <div className="text-lg font-normal mr-2">Payouts</div>
            <CiCircleQuestion className='text-gray-400 '/>
            <div className="text-sm text-gray-300 underline">How does it work?</div>
            </div>  
        {/* Search Bar */}
        <div className="flex items-center relative">
            <GoSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder=" Search features,tutorials,etc"
            className="bg-gray text-sm focus:outline-none active: outline-none h-10 w-[24rem] border border-gray-303 rounded-sm pl-11 pr-4" 
          />
          
        </div>
  
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <img src='./Menu.png' />
          <img src='./Menu 2.png' />
          
        </div>
      </div>
    );
  }
  
  export default Header;