import React from 'react'
import DashBoardStatsGrid from './DashBoardStatsGrid'
import Table from './Table'
function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between'>
            <div>Overview</div>
            <div className='bg-white border border-gray-200'><button className='flex flex-row items-center px-2 mr-2'>Last month <img src='./arrow.png'/></button></div>
        </div>
    <DashBoardStatsGrid />
    <div className='flex flex-row justify-between'>
    
    </div>
    <div className='flex flex-row gap-4 w-full bg-white'>
        <Table />
    </div>
    </div>
    
  )
}

export default Dashboard