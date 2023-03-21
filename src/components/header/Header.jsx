import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import Card from "./Card";
import { AiOutlineClose } from "react-icons/ai";

function Header({ order, setOrder }) {
  let [showcard, setshowcard] = useState(false);
  let [hidemenu, setHidemenu] = useState(false);

  return (
    <div className=" header flex sm:px-2 min-h-[80px] sm:min-w-full max-h-[80px] justify-between  border-b-2  "> 
      <div className=" w-[80%] sm:min-w-[50%] flex gap-10 items-center "> 
        {/* logo */} 
        <div onClick={()=> {setHidemenu(true)}} className="hidden sm:block pb-2 "> 
          <AiOutlineMenu size={30} /> 
        </div> 
        <span className="text-[25px] font-bold py-2 border-b-4 border-b-white  "> 
          Sneakers
        </span>
        {/* menu  */}
        <div className={hidemenu ? "flex sm:fixed  sm:flex-col sm:top-0  sm:left-0 sm:min-w-[100%] sm:z-40 sm:bg-black/50 sm:h-full " : "flex sm:fixed sm:flex-col sm:top-0  sm:left-0 sm:min-w-[100%] sm:z-40 sm:bg-black/50 sm:h-full sm:hidden"}> 
          <div onClick={()=> {setHidemenu(false)}} className="sm:pt-10 hidden sm:block p-2 bg-white sm:min-w-[70%] sm:max-w-[70%] ">
            <AiOutlineClose size={40}/> 
          </div> 
          <ul className=" flex gap-4 sm:min-w-[70%] sm:max-w-[70%]  min-h-full items-center  sm:flex-col sm:items-start sm:p-2 sm:font-bold   bg-white ">
            <li className="text-gray-400 flex hover:text-gray-600 font- py-2 border-b-4 border-b-white hover:border-b-orange-400 text-[18px] hover:cursor-pointer sm:text-black  ">
              Collections
            </li>
            <li className="text-gray-400 hover:text-gray-600 font- py-2 border-b-4 border-b-white hover:border-b-orange-400 text-[18px] hover:cursor-pointer sm:text-black  ">
              Men
            </li>
            <li className="text-gray-400 hover:text-gray-600 font- py-2 border-b-4 border-b-white hover:border-b-orange-400 text-[18px] hover:cursor-pointer sm:text-black  ">
              Women
            </li>
            <li className="text-gray-400 hover:text-gray-600 font- py-2 border-b-4 border-b-white hover:border-b-orange-400 text-[18px] hover:cursor-pointer sm:text-black  ">
              About
            </li>
            <li className="text-gray-400 hover:text-gray-600 font- py-2 border-b-4 border-b-white hover:border-b-orange-400 text-[18px] hover:cursor-pointer sm:text-black  ">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:w-[40%] w-[20%] flex justify-between items-center sm:gap-4 gap-12 ">
        {/* shopping card */}
        <div
          className="shoppinglogo cursor-pointer relative "
          onClick={() => {
            setshowcard(!showcard);
          }}
        >
          {order.title.length > 0 && order.quantity > 0 && (
            <button className="absolute left-4 top-[-0.5rem] text-[14px] font-bold  bg-orange-500 rounded-[50%] px-2 text-center  ">
              {order.quantity}
            </button>
          )}
          <FiShoppingCart size={30} />

          {showcard && <Card order={order} setOrder={setOrder} />}
        </div>
        {/* profile  image */}
        <div className="hover:cursor-pointer hover:border-2 border-orange-500 min-w-[50px] max-w-[50px] min-h-[50px] rounded-[50%] sm:min-w-[40px] sm:max-w-[40px] ">
          <img
            className="object-contain "
            src="/images/image-avatar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
