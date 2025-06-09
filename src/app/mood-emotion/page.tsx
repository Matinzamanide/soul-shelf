"use client";
import { useEffect, useState } from "react";
import BookItem from "@/components/book-item/book-item";
import Navbar from "@/components/mood-navbar/navbar";
import axios from "axios";
import { IBook } from "@/types/type";
import Book from "@/components/book/book";

const MoodEmotion = () => {
 

  const [data, setData] = useState<IBook[]>([]);
  useEffect(() => {
    axios("http://www.sarirniroo.ir/Mobile/books")
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.error("Error fetching Books : ", error);
      });
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
      <div className="w-[90%] lg:w-[90%] mx-auto">
        <div className="grid lg:grid-cols-3  gap-4">
          {filteredBooks.map((item) => {
            return <BookItem key={item.id} {...item} />;
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-4 ">
          {filteredBooks.length === 0 &&
            data.map((item) => {
              return <BookItem {...item} />;
            })}
        </div>
      </div>
      <Book />
    </div>
  );
};

export default MoodEmotion;
