import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function Images({ setImagepreveiw, show }) {
  let [images, setImages] = useState([
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ]);

  let [mainImage, setmainImage] = useState(images[0]);

  const handlechange = (index) => {
    setmainImage(images[index]);
  };

  const next = () => {
    let location = mainImage.split("product-")[1].split(".jpg")[0];
    let x = "/images/image-product-" + (parseInt(location) + 1) + ".jpg";
    setmainImage(x);
  };

  const prev = () => {
    let location = mainImage.split("product-")[1].split(".jpg")[0];
    let x = "/images/image-product-" + (parseInt(location) - 1) + ".jpg";
    setmainImage(x);
  };

  return (
    <div className="images_preview  sm:w-full w-1/2 flex flex-col items-center justify-center gap-4 sm:gap-0 sm:justify-start sm:p-0 p-2 sm:min-w-full ">
      <div className="flex sm:items-start items-center sm:block relative">
        <button
          disabled={mainImage !== images[0] ? false : true}
          onClick={prev}
          className="hidden  absolute left-[5px] top-[150px] hover:cursor-pointer w-[50px] h-[50px] rounded-[50%] bg-white text-center  z-10  sm:flex items-center justify-center "
        >
          <AiOutlineLeft size={20} />
        </button>
        {show && (
          <button
            disabled={mainImage !== images[0] ? false : true}
            onClick={prev}
            className="absolute left-[-25px] hover:cursor-pointer w-[50px] h-[50px] rounded-[50%] bg-white text-center  z-10  flex items-center justify-center "
          >
            <AiOutlineLeft size={20} />
          </button>
        )}
        <img
          className={
            show
              ? " w-[450px] h-[450px] sm:pointer-events-none rounded-xl shadow-md hover:cursor-pointer sm:rounded-none  "
              : "w-[390px] h-[390px] sm:w-full sm:h-full rounded-xl sm:pointer-events-none shadow-md hover:cursor-pointer sm:rounded-none sm:hover:cursor-default "
          }
          src={mainImage}
          alt=""
          onClick={() => {
            setImagepreveiw(true);
          }}
        />
        {show && (
          <button
            disabled={mainImage !== images[images.length - 1] ? false : true}
            onClick={next}
            className=" absolute right-[-25px] hover:cursor-pointer w-[50px] h-[50px] rounded-[50%] bg-white text-center  z-10  flex items-center justify-center "
          >
            <AiOutlineRight size={20} />
          </button>
        )}
        <button
            disabled={mainImage !== images[images.length - 1] ? false : true }
            onClick={next}
            className="hidden absolute right-[5px] top-[150px] hover:cursor-pointer w-[50px] h-[50px] rounded-[50%] bg-white text-center z-10 sm:flex items-center justify-center "
          >
            <AiOutlineRight size={20} />
          </button>
      </div>
      <div className="flex gap-4 sm:hidden">
        {images.map((imagePath, index) => {
          return (
            <div
              key={index}
              className={
                imagePath === mainImage
                  ? "w-[80px] h-[80px] rounded-xl border-4 hover:cursor-pointer bg-white shadow-md border-orange-500"
                  : "w-[80px] h-[80px] rounded-xl  hover:cursor-pointer bg-white shadow-md border-white"
              }
            >
              <img
                className={
                  imagePath === mainImage
                    ? "object-contain w-full rounded-lg opacity-60"
                    : "object-contain w-full rounded-lg"
                }
                onClick={() => {
                  handlechange(index);
                }}
                src={imagePath.replace(".jpg", "-thumbnail.jpg")}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Images;
