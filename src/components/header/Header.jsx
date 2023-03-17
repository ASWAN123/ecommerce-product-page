import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';

function Header() {
  return (
    <div className='flex  min-h-[80px] max-h-[80px] justify-between  border-b-2  ' >
        <div className=' w-[80%] flex gap-10 items-end '>
          {/* logo */}
            <span className='text-[25px] font-bold pb-5 border-b-4 border-b-white'>Sneakers</span>
          {/* menu  */}
            <ul className='flex gap-4  min-h-full items-end '>
                <li className='text-gray-400 hover:text-gray-600 font- pb-6 border-b-4 border-b-white hover:border-b-red-600 text-[18px] hover:cursor-pointer   '>Collections</li>
                <li className='text-gray-400 hover:text-gray-600 font- pb-6 border-b-4 border-b-white hover:border-b-red-600 text-[18px] hover:cursor-pointer  '>Men</li>
                <li className='text-gray-400 hover:text-gray-600 font- pb-6 border-b-4 border-b-white hover:border-b-red-600 text-[18px] hover:cursor-pointer  '>Women</li>
                <li className='text-gray-400 hover:text-gray-600 font- pb-6 border-b-4 border-b-white hover:border-b-red-600 text-[18px] hover:cursor-pointer  '>About</li>
                <li className='text-gray-400 hover:text-gray-600 font- pb-6 border-b-4 border-b-white hover:border-b-red-600 text-[18px] hover:cursor-pointer  '>Contact</li>
            </ul>

        </div>
        <div className=' w-[20%] flex justify-end items-center gap-12 '>
            {/* shopping card */}
            <div className='shoppinglogo cursor-pointer '><FiShoppingCart size={30} /></div>
            {/* profile  image */}
            <img className='w-[45px] h-[45px]' src="/images/image-avatar.png" alt="" />
        </div>
    </div>
  )
}

export default Header