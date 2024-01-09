import React from 'react'
import DashBoardStatsGrid from './DashBoardStatsGrid'
import Table from './Table'
function Dashboard() {
  return (
    <div className='flex gap-4'>Dashboard
    <DashBoardStatsGrid />
    <div className='flex flex-row gap-4 w-full'>
        <Table />
    </div>
    </div>
    
  )
}

export default Dashboard