
import { useState } from "react";
import Header from "./components/header/Header";
import Images from "./components/product/Images";
import Product from "./components/product/Product";
import { AiOutlineClose } from "react-icons/ai";


function App() {
  let [order , setOrder ] = useState({id:new Date() , title:'' , price:'' , quantity:0 , imagesrc:'' })
  let [imagespreveiw , setImagepreveiw] = useState(false)

  return (
    <div className="App">
      <div className="conainer w-[80%] sm:w-full  m-auto mt-2 ">
        <Header order={order} setOrder={setOrder} />
        <Product  order={order} setOrder={setOrder} setImagepreveiw={setImagepreveiw}  imagespreveiw = {imagespreveiw} />
        { imagespreveiw &&
          <div className="bg-black/70 fixed top-0 left-0 w-full h-[100vh] flex flex-col items-center justify-center">
            <span className="text-white mr-[-450px] mb-[15px] hover:cursor-pointer" onClick={()=> {setImagepreveiw(false)}}><AiOutlineClose size={25} color={'white'} /></span>
            <Images setImagepreveiw={setImagepreveiw}  show = {true}/>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
