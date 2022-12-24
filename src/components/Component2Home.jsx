import React from 'react'
import contributed from '../assets/contributed.svg'

const Component2Home = () => {
  return (
    <div className='flex flex-col md:flex-row mx-12 gap-10 items-center h-[80vh]'>
      <div className='md:order-1 order-2 text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-600 to-red-600'>
        Our members contributed ___ trees to the environment
      </div>
      <img src={contributed} className="order-1 md:order-2 md:w-[450px] text-3xl w-full" alt='Planting_tree' />
    </div>
  )
}

export default Component2Home