import React from 'react'

function BusinessDiscription(business) {
  return (
    <div>
         <h2 className='font-bold text-[25px] '>Description</h2>
         <p className='mt-4 text-lg text-gray-600'>{business.about}</p>
    </div>
  )
}

export default BusinessDiscription