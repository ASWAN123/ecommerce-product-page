import React, { useEffect, useState } from "react";
import { FiShoppingCart } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

function Details({order,  setOrder}) {
  let [count ,  setcount ] = useState(1)

  const notify = (message) => toast.success(message) ;
  const notify1 = (message) => toast(message) ;

  const addtocard = () =>{
    if(order.title.length > 0 ){
      notify1('You already has that item  in the  card ')
    }else{
      setOrder({...order , title:'Fall Limited Edition Sneakers', price:125 , quantity:count , imagesrc:'/images/image-product-1-thumbnail.jpg'})
      notify('You have added new item to card')
    }

  }


  const  handlequantity =(x)=> {
    if(x == '-'){
      setcount(count == 1 ? 1 : count-1)
      setOrder({...order , quantity:order.quantity > 1 ? order.quantity-1 : 1})
    }
    if(x == '+'){
      setcount(count+1)
      setOrder({...order , quantity:order.quantity+1})
    }
  }




  return (
    <div className="w-[450px] sm:w-full p-2 flex flex-col justify-center gap-4 sm:mb-10">
      <p className="text-[14px] text-orange-400 font-meduim uppercase mb-2">
        Sneaker Company
      </p>
      <h2 className="text-[3rem] font-bold leading-none	sm:text-[2rem] ">
        Fall Limited Edition Sneakers
      </h2>
      <p className="mt-4 text-gray-500">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="">
        <p className="font-bold text-[2rem] flex items-center gap-4"><span>$125.00</span><span className="text-[14px] font-bold bg-orange-100 text-orange-500 py-1 px-2 rounded-md ">50%</span></p>
        <span className="text-gray-400 line-through ">$250.00</span>
      </div>
      <div className="flex gap-4 md:flex-col justify-between">

        <div className=" bg-blue-200 w-[30%] sm:w-full sm:py-1 flex  gap-4 justify-between items-center rounded-lg px-4 ">
          <button onClick={()=> {handlequantity('-')}} className="text-orange-500 text-[30px] font-bold hover:cursor-pointer hover:opacity-60 mb-[5px] "  >-</button>
          <span className="  text-[20px] text-bold">{count}</span>
          <button onClick={()=> {handlequantity('+')}} className="text-orange-500 text-[30px] font-bold hover:cursor-pointer hover:opacity-60 mb-[5px] "  >+</button>
        </div>
        <button onClick={addtocard} className="w-[60%] sm:w-full text-white flex sm:py-4 gap-4 py-4 px-[50px] bg-orange-500 rounded-lg items-center justify-center"><FiShoppingCart size={20}/><span>Add to cart</span></button>
        <Toaster />
      </div>
    </div>
  );
}

export default Details;
