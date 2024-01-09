import React from 'react'
import { FiHome, FiShoppingBag, FiPackage, FiTruck, FiMessageCircle, FiBarChart2, FiDollarSign, FiPercent, FiUsers, FiLayout, FiLayers } from 'react-icons/fi';
import { RiArrowDropDownLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className='bg-slate-900 w-60 p-3 flex flex-col text-white'>
       <div className='flex items-center gap-2 px-1 py-3'>
        <img src='./navbar.png' />
        <div className='flex flex-col'>
            <div className='flex flex-row items-center justify-between'>
                <div> Nishyan </div>
                <div><RiArrowDropDownLine /></div>
            </div>
            
            <div className='text-sm text-gray-400 underline'> <a href='#'>Visit store </a> </div>

        </div>
       </div>
        <div className='flex 1 py-3'>
        <ul>
          <li className='flex items-center py-2 px-4 text-gray-300'>
            <FiHome className='w-6 h-6 mr-2' />
            Home
          </li>
          <li className='flex items-center py-2 px-4 text-gray-300'>
            <img src='./orders-sb.png' className='w-6 h-6 mr-2' />
            Orders
          </li>
          <li className='flex items-center py-2 px-4 text-gray-300'>
            <FiPackage className='w-6 h-6 mr-2' />
            Products
          </li>
          <li className='flex items-center py-2 px-4 text-gray-300'>
            <FiTruck className='w-6 h-6 mr-2' />
            Delivery
          </li>
          <li className='flex items-center py-2 px-4 text-gray-300'>
          <FiMessageCircle className='w-6 h-6 mr-2' />
            Marketing
          </li>
          <li className='flex items-center py-2 px-4 text-gray-300'>
            <FiBarChart2 className='w-6 h-6 mr-2' />
            Analytics
          </li>
          <li className='flex items-center py-2 px-4 text-white bg-gray-600'>
            <FiDollarSign className='w-6 h-6 mr-2' />
            Payouts
          </li>
          <li className='flex items-center py-2 px-4 text-gray-300'>
            <FiPercent className='w-6 h-6 mr-2' />
            Discounts
          </li>
          <li className='flex items-center py-2 px-4 text-gray-300'>
            <FiUsers className='w-6 h-6 mr-2' />
            Audience
          </li>
          <li className='flex items-center py-2 px-4 text-gray-300'>
            <FiLayout className='w-6 h-6 mr-2' />
            Appearance
          </li>
          <li className='flex items-center py-2 px-4 text-gray-300'>
            <FiLayers className='w-6 h-6 mr-2' />
            Plugins
          </li>
          {/* Add more items with icons as needed */}
        </ul>
        </div>
        <div className='mt-auto'>bottom part </div>
    </div>
  )
}

export default Sidebar