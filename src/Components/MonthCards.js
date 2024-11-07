import React from 'react'
import EarningCard from './EarningCard'
import data from '../data'

function MonthCards() {
  return (
    <div > 

       
      <div className='grid nm:grid-cols-3 nm:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 xxs:grid-cols-1 xxs:grid-rows-6 gap-x-24'>
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