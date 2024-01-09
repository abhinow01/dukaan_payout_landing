import React from 'react';
import { CiCircleQuestion } from 'react-icons/ci';

function DashBoardStatsGrid() {
  return (
    <div className='flex gap-4 w-full'>
      <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex  flex-col'>
        <div className='flex items-center justify-between'>
          <div className='text-sm text-gray-400 font-light flex items-center justify-between'>
            Online orders <CiCircleQuestion className='ml-1 text-sm' />
          </div>
          <div className='text-sm text-gray-400 font-light'>by today, 04:00 pm</div>
        </div>
        <strong className='py-2'>231</strong>
        {/* <a href='#'className="py-2 text-blue-500 text-sm font-light underline">View 13 orders</a> */}
      </div>

      <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex flex-col'>
      <div className='flex items-center justify-between'>
          <div className='text-sm text-gray-400 font-light flex items-center justify-between'>
            Amount Recieved <CiCircleQuestion className='ml-1 text-sm' />
          </div>
          <div className='text-sm text-gray-400 font-light'>by today, 04:00 pm</div>
        </div>
        <strong className='py-2'>23,92,312.20</strong>
        <a href='#'className="py-2 text-blue-500 text-sm font-light underline">View 13 orders</a>
      </div>
    </div>
  );
}

export default DashBoardStatsGrid;
