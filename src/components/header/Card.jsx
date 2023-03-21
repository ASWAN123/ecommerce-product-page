import React from "react";
import { AiFillDelete } from 'react-icons/ai';


function Card({ order, setOrder }) {
    let removeitem = ()=> {
        setOrder({id:new Date() , title:'' , price:'' , quantity:0 , imagesrc:'' })
    }



  return (
    <div >
      <div className="sm:left-[-15rem] sm:z-50 absolute rounded-lg top-10 left-[-10rem] shadow-lg w-[350px]   border  bg-white flex flex-col p-2 ">
        <p className="p-4 border-b ">Card</p>
        {order.title.length > 0 ? (
          <div className="items flex flex-col gap-4 items-center">
            <div className="flex gap-4 p-2 items-center ">
                <img className="w-[50px] h-[50px] rounded-lg  hover:cursor-pointer shadow-md " src={"."+order.imagesrc} alt="" />
                <div className="flex flex-col ">
                    <p className="text-[14px] text-gray-400 ">{order.title}</p>
                    <p className="text-gray-400 ">${order.price}.00 x {order.quantity} <span className="text-black font-bold ">${order.price*order.quantity}</span></p>
                </div>
                <AiFillDelete size={25} color={'gray'} onClick={removeitem}/>
            </div>
            <button className="w-[85%] text-white  py-4 px-[50px] bg-orange-500 rounded-lg text-center">Checkout</button>
          </div>
        ) : (
          <div className="h-[150px] flex justify-center items-center">
            <p className="">your card is empty!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
