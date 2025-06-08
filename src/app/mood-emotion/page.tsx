"use client";
import { useContext, useEffect, useState } from "react";
import Container from "@/components/container/container";
import BookItem from "@/components/book-item/book-item";
import Navbar from "@/components/mood-navbar/navbar";
import axios from "axios";
import { IBook } from "@/types/type";
import Menu from "@/components/menu/menu";
import AppContext from "@/app-context/app-context";
import Book from "@/components/book/book";

const MoodEmotion = () => {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      moodTags: ["need motivation", "homesick"],
      description:
        "A journey of self-discovery with spiritual and motivational themes.",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrgkMIrrsdeAtK9__xA4H0ZsjyZDVjLk1nA&s",
    },
    {
      id: 2,
      title: "Norwegian Wood",
      author: "Haruki Murakami",
      moodTags: ["feeling sad", "feeling nostalgic"],
      description: "A deeply emotional story of love, loss, and memory.",
      cover: "https://m.media-amazon.com/images/I/81zqVhvbHbL.jpg",
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      moodTags: ["low energy", "need motivation"],
      description:
        "A practical guide to building better habits and breaking bad ones.",
      cover:
        "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      title: "Atomic Death of ivan ilych",
      author: "Leo tolstoy",
      moodTags: ["feeling sad", "need motivation"],
      description:
        "A practical guide to building better habits and breaking bad ones.",
      cover: "https://covers.libro.fm/9781518909887_1120.jpg",
    },
  ];

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
  // console.log(data.length==5)
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
