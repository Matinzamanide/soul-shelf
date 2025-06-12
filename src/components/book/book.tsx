"use client";
import AppContext from "@/app-context/app-context";
import { IBook } from "@/types/type";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
const Book = () => {
  const { menu, id, menuHandler } = useContext(AppContext);
  const [data, setData] = useState<IBook>();
  useEffect(() => {
    if (id) {
      axios(`http://www.sarirniroo.ir/Mobile/books/${id}`)
        .then((result) => {
          setData(result.data);
          console.log(result.data[0]);
        })
        .catch((error) => {
          console.error("Error fetching Books: ", error);
        });
    }
  }, [id]);
  
  return (
    <div className="">
      {menu && (
        <div
          className="h-screen inset-0 bg-black opacity-50 fixed z-10 "
          onClick={menuHandler}
        ></div>
      )}
      <div
        className={`${
          menu ? "w-full md:w-[80%]" : "w-0"
        } overflow-y-auto max-h-screen lg:h-screen top-0 fixed duration-300 right-0 z-50 shadow`}
        style={{
          backgroundColor: data?.color_code ? data.color_code : "black",
        }}
      >
        <div className="flex flex-col md:flex-row w-[80%] pl-5 my-10 ">
          <div className="right md:w-[30%] md:mr-14 ">
            <div
              className="absolute top-[25px] left-[-50px] w-[200px] h-[50px] bg-[#0078d7] text-center leading-[50px] tracking-[1px] text-[#f0f0f0] rotate-[-45deg] shadow-[0px_0px_16px_-1px_rgba(0,0,0,0.91)]
"
            >
              Best match
            </div>

            <Image
  src={data?.cover || "/fallback.jpg"}
  alt=""
  className="border-2 border-white"
  width={500}
  height={300}
/>

          </div>

          <div className="left text-white md:w-[50%] mt-10">
            <p className="text-2xl font-semibold">{data?.title}</p>
            <p className="my-2">{data?.author}</p>
            <p className="text-sm">{data?.description}</p>
            <p className="font-semibold my-2">Extract</p>
            <p className="text-sm w-[85%]">{data?.extract}</p>
            <p className="font-semibold my-2">Paralles</p>
            <ul className="list-disc ml-10 mt-4 text-sm">
              {data?.parallels.map((item,index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <FaTimes
          onClick={menuHandler}
          color="white"
          size={32}
          className="absolute cursor-pointer right-7 top-7"
        />
      </div>
    </div>
  );
};

export default Book;
