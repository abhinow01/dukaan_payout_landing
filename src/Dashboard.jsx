import React from 'react'
import DashBoardStatsGrid from './DashBoardStatsGrid'
import Table from './Table'
function Dashboard() {
    
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between'>
            <div className='text-lg font-normal'>Overview</div>
            <div className='bg-white border border-gray-300 rounded-sm'><button className='flex flex-row items-center px-2 mr-2'>Last month <div className='px-2'><img src='./arrow.png'/></div></button></div>
        </div>
    <DashBoardStatsGrid />
    <div className='flex flex-row justify-between'>
    Transactions | This Month
    </div>
    <div className='flex flex-row gap-4 w-full bg-white'>
        <Table />
    </div>
    {/* <div className="flex justify-center mt-4">{renderPagination()}</div> */}
    </div>
    
  )
}

export default Dashboard