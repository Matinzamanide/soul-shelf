"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const moods = [
  "feeling sad",
  "low energy",
  "need motivation",
  "happy",
  "homesick",
  "feeling nostalgic",
];

const HomePage = () => {
    
  const [moodSelected, setMoodSelected] = useState<string | null>(null);
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    if (moodSelected) {
      fetchBooksByMood(moodSelected).then(setBooks);
    }
  }, [moodSelected]);

  const fetchBooksByMood = async (mood: string) => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(mood)}&maxResults=10`
    );
    const data = await res.json();
    return data.items || [];
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Choose Your Mood</h1>

      <ul className="flex flex-wrap justify-center gap-3 mb-10">
        {moods.map((item, index) => (
          <li
            key={index}
            onClick={() => setMoodSelected(item)}
            className={`cursor-pointer px-4 py-2 rounded-full border border-[#e5e5e5] transition ${
              moodSelected === item
                ? "bg-black text-white"
                : "bg-white text-[#1a1a1a] hover:bg-[#e5e5e5]"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {books.map((item: any) => {
          const volume = item.volumeInfo;
          return (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-md border border-[#e5e5e5] hover:shadow-lg transition flex flex-col md:flex-row gap-4"
            >
              <Image
                src={volume.imageLinks?.thumbnail || "/fallback.jpg"}
                alt={volume.title}
                className="w-full md:w-32 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-black">{volume.title}</h2>
                <p className="text-sm text-gray-500 mb-2">by {volume.authors?.join(", ")}</p>
                <p className="text-[#1a1a1a] text-sm line-clamp-3">{volume.description}</p>
              </div>
            </div>
          );
        })}
        {moodSelected && books.length === 0 && (
          <p className="col-span-full text-center text-gray-500 italic">No books found for this mood.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
