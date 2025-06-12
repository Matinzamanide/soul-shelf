"use client";
import { useEffect, useState } from "react";
import BookItem from "@/components/book-item/book-item";
import Navbar from "@/components/mood-navbar/navbar";
import axios from "axios";
import { IBook } from "@/types/type";
import Book from "@/components/book/book";
import BookItemSkelton from "@/components/book-item-skelton/book-item-skelton";

const MoodEmotion = () => {
 

  const [data, setData] = useState<IBook[]>([]);
  const [isLoading,setIsLoading]=useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true)
    axios("http://www.sarirniroo.ir/Mobile/books")
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.error("Error fetching Books : ", error);
      })
      .finally(()=>{
        setIsLoading(false)
      })
  }, []);
  const [selectedMood, setSelectedMood] = useState<string>("");
  const filteredBooks = data.filter((book) =>
    book.moodTags.includes(selectedMood)
  );


  return (
    <div>
      <h1 className="text-3xl hidden lg:block font-bold text-center my-8 text-black">
        Choose Your Mood
      </h1>
      <Navbar selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
      <div className="w-[90%] lg:w-[90%] mx-auto py-10">

    {
      !isLoading ? (
        <div className="">
        <div className="grid lg:grid-cols-3  gap-4">
          {filteredBooks.map((item) => {
            return <BookItem key={item.id} {...item} />;
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-4 ">
          {filteredBooks.length === 0 &&
            data.map((item) => {
              return <BookItem key={item.id} {...item} />;
            })}
        </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-4">
      {[...Array(10)].map((_, index) => (
        <BookItemSkelton key={index} />
      ))}
    </div>
      )
    }

      </div>
      <Book />
    </div>
  );
};

export default MoodEmotion;
