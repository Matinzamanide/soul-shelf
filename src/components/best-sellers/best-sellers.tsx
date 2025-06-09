"use client";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BestSeller } from "@/types/type";
import axios from "axios";
import Link from "next/link";

const BestSellersComponent = () => {
  
  const [data, setData] = useState<BestSeller[]>([]);
  useEffect(() => {
    axios("http://www.sarirniroo.ir/Mobile/bestSellers")
      .then((result) => {
        setData(result.data.slice(0,11));
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  }, []);
  return (
    <div className="w-[90%] mx-auto my-10">
      <h1 className="text-2xl font-semibold text-center my-20">
        Start from Bestsellers: discover new books based on something familiar
      </h1>
      
      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={{
            768:{
                slidesPerView:2
            },
            1024:{
                slidesPerView:3
            }
        }}
        slidesPerView={1}
        spaceBetween={70}
        pagination={{ clickable: true }}
        navigation
        className="pb-10"
      >
       
        
       
        {
                    data.map((book,index)=>{
                        return <SwiperSlide key={index}>
                        <div className="overflow-hidden shadow-lg">
                           <Link href={`/best-sellers-item/${book.title}`}> 
                          <img
                            src={book.home_cover || "./fallback"}
                            alt={`Book ${book.title}`}
                            className="w-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          </Link>
                        </div>
                      </SwiperSlide>
                    })
                }
      </Swiper>
    </div>
  );
};

export default BestSellersComponent;
