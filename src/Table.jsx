import React from 'react';
import {  FiDownload } from 'react-icons/fi';
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
// import Pagination from './Pagination';
function Table() {
    const currentPage = 10;
  const totalPages = 20;
    const dummyData = [
        {
          orderId: '#281209',
          orderDate: '7 July, 2023',
          orderAmount: '₹1278.23',
          transactionFees: '₹22',
        },
        {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: '₹1278.23',
            transactionFees: '₹22',
          },
        //   {
        //     orderId: '#281209',
        //     orderDate: '7 July, 2023',
        //     orderAmount: '₹1278.23',
        //     transactionFees: '₹22',
        //   }
          
      ];
      const header = (
        <tr className="bg-gray-100 ">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <span className="text-right">Order Id</span>
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Order Date
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Order Amount
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Transaction Fees
          </th>
        </tr>
      );
      
    
      const dataRows = dummyData.map((item, index) => (
        
        <tr key={index} className="bg-white border-t border-gray-200">
          <td className="px-6 py-2 whitespace-nowrap">
            <span className="text-blue-500">{item.orderId}</span>
          </td>
          <td className="px-6 py-2 whitespace-nowrap text-right font-light">{item.orderDate}</td>
          <td className="px-6 py-2 whitespace-nowrap text-right font-light">{item.orderAmount}</td>
          <td className="px-6 py-2 whitespace-nowrap text-right font-light">{item.transactionFees}</td>
        </tr>
      ));
    
    return (
        <div className="container mx-auto h-full pb-8">
      <div className="flex flex-wrap justify-between mb-4 bg-white">
        <div className="flex px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mr-2"
          />
        </div>
        <div className="flex py-2 px-4">
          <button className="bg-white px-4  flex items-center justify-center rounded-md border border-gray-200" >
            Sort <TbArrowsSort className="ml-1" />
          </button>
          <button className="bg-white px-4 py-2 flex items-center justify-center rounded-md ml-2">
            <FiDownload className="ml-1" />
          </button>
        </div>
      </div>
      <table className="w-full px-4 pt-3 pb-4 border border-gray-200">
        <thead>{header}</thead>
        <tbody className="divide-y divide-gray-200">
          {dataRows}
          {/* Add an extra empty row to ensure the last row renders correctly */}
          {/* <tr className="bg-white">
            <td colSpan="4" className="h-8"></td>
          </tr> */}
        </tbody>
      </table>
      <div className='flex flex-row flex-wrap justify-center mx-auto px-24 py-4 '>
        {/* <Pagination currentPage={currentPage} totalPages={totalPages} /> */}
        <div className=""><button className="bg-white px-4  flex items-center justify-center rounded-md border border-gray-200"><GrFormPrevious /> Previous</button></div>
        <div className="px-2">1</div>
        <div className="px-2">...</div>
        <div className="px-2 border border-round rounded bg-blue-400">10</div>
        <div className="px-2">11</div>
        <div className="px-2">12</div>
        <div className="px-2">13</div>
        <div className="px-2">14</div>
        <div className="px-2">15</div>
        <div className="px-2">16</div>
        <div className="px-2">17</div>
        <div className="px-2">18</div>
        <div className="px-2"><button className="bg-white px-4  flex items-center justify-center rounded-md border border-gray-200" >Next <MdOutlineNavigateNext /></button></div>
      </div>
    </div>

      );
    }

export default Table