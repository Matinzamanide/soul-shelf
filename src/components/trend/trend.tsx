"use client";

import { useEffect, useState } from "react";
import { IBook } from "@/types/type";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./style.css"; // حتماً فایل CSS رو اضافه کن!
import Link from "next/link";

const Trend = () => {
  const [data, setData] = useState<IBook[]>([]);

  useEffect(() => {
    axios("http://www.sarirniroo.ir/Mobile/books")
      .then((result) => {
        setData(result.data.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error fetching Books:", error);
      });
  }, []);

  return (
    <div className="bg-black py-20">
      <h2 className="text-center text-white pb-16 font-semibold text-2xl tracking-wide">
        Trending Books
      </h2>

      <div className="px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          loop
          breakpoints={{
            320: { slidesPerView: 2.5 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5.5 },
          }}
        >
          {data.map((book) => (
            <SwiperSlide key={book.id} className="relative group">
              <div className="overflow-hidden rounded-xl shadow-lg border border-gray-800 bg-gradient-to-b from-transparent to-black">
                <Link href={`/book-page/${book.title}`}>
                  <img
                    src={book.cover || "/fallback.jpg"}
                    alt={book.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white px-3 py-2">
                    <p className="text-sm font-semibold truncate">
                      {book.title}
                    </p>
                    <p className="text-xs text-gray-300">{book.author}</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Trend;
