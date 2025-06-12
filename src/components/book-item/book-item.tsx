"use client";
import AppContext from "@/app-context/app-context";
import { IBook } from "@/types/type";
import Image from "next/image";
import { useContext } from "react";

const BookItem: React.FC<IBook> = ({
  id,
  cover,
  title,
  description,
  author,
  moodTags,
}) => {
  const { menuHandler, setId } = useContext(AppContext);
  const openContainer = () => {
    menuHandler();
    setId(Number(id)); 
  };
  return (
    <div
      onClick={openContainer}
      key={id}
      className="bg-white p-4 rounded-xl shadow-md border border-[#e5e5e5] hover:shadow-lg transition flex flex-col md:flex-row gap-4"
    >
      <Image
        src={cover || "/fallback.jpg"}
        alt={title}
        className="w-full h-[500px] md:w-32 md:h-48 object-cover rounded-lg"
        width={300}
        height={300}
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-black">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">by {author}</p>
        <p className="text-[#1a1a1a] text-sm line-clamp-3">{description}</p>
        
          {" "}
          {moodTags.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-10">
              {moodTags.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        
      </div>
    </div>
  );
};

export default BookItem;
