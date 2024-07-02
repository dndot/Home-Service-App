import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7'>
          <h2 className='font-bold text-[46px] text-center'>
              Find Home
              <span className='text-primary'> Service/Repair </span>
              <br></br> Near You</h2>
          <h2 className='text-xl text-gray-400'>Explore Best Home Service & Repair Near You</h2>
      
        <div className='mt-4 pl-2  flex gap-4 items-center overflow-hidden border-gray-600 border-2 rounded-2xl'>
              <input placeholder='Search'
              className='rounded-full focus:border-none focus:outline-none border-none md:w-[360px]' />
             
              <button className='rounded-lg pl-2 pr-1   h-[40px] bg-primary'>
                <Search className='h-15 w-15 border-black '/>
              </button>
        </div>
    </div> 
    
  )
}

export default Hero