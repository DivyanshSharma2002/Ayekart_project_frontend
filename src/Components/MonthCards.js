import React from 'react'
import EarningCard from './EarningCard'
import data from '../data'
import Search from './Search'
import YearDropdown from './YearDropdown'
function MonthCards() {
  return (
    <div > 
    <div className='ml-10 mt-4 mr-10'>
    <Search/>
    <div className='mt-4'> <YearDropdown/></div>
    </div>
       
      <div className='grid grid-cols-3 grid-rows-2'>
            {Object.keys(data).map((month) => (
                <EarningCard 
                    key={month} 
                    monthdata={data[month]} 
                    month={month}
                />
            ))}
        </div>
    </div>
  )
}

export default MonthCards