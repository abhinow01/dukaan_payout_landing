import React from 'react';
import { FiArrowDown, FiArrowUp, FiDownload } from 'react-icons/fi';

function Table() {
    const dummyData = [
        {
          orderId: '#281209',
          orderDate: '7 July, 2023',
          orderAmount: 1278.23,
          transactionFees: 22,
        },
        {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          },
          {
            orderId: '#281209',
            orderDate: '7 July, 2023',
            orderAmount: 1278.23,
            transactionFees: 22,
          }
      ];
      const header = (
        <tr className="bg-gray-100">
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
        
        <tr key={index} className="bg-white">
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="text-blue-500">{item.orderId}</span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right font-light">{item.orderDate}</td>
          <td className="px-6 py-4 whitespace-nowrap text-right font-light">{item.orderAmount}</td>
          <td className="px-6 py-4 whitespace-nowrap text-right font-light">{item.transactionFees}</td>
        </tr>
      ));
    
    return (
        <div className="container mx-auto">
      <div className="flex justify-between mb-4 bg-white">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mr-2"
          />
        </div>
        <div className="flex">
          <button className="bg-white px-4 py-2 flex items-center justify-center rounded-md" >
            Sort <FiArrowUp className="ml-1" />
          </button>
          <button className="bg-white px-4 py-2 flex items-center justify-center rounded-md ml-2">
            Download <FiDownload className="ml-1" />
          </button>
        </div>
      </div>
      <table className="min-w-full">
        <thead>{header}</thead>
        <tbody className="divide-y divide-gray-200">
          {dataRows}
          {/* Add an extra empty row to ensure the last row renders correctly */}
          <tr className="bg-white">
            <td colSpan="4" className="h-8"></td>
          </tr>
        </tbody>
      </table>
    </div>
      );
    }

export default Table