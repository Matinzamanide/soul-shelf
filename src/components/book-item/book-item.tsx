"use client";
import AppContext from "@/app-context/app-context";
import { IBook } from "@/types/type";
import { useContext, useEffect } from "react";

const BookItem: React.FC<IBook> = ({
  id,
  cover,
  title,
  description,
  author,
  moodTags,
}) => {
  const { menuHandler, setId } = useContext(AppContext);
  const ali = () => {
    menuHandler();
    setId(Number(id)); // Ensure id is a number
    console.log(`BookItem clicked with id: ${id}`); // Debugging log
  };
  return (
    // fitrst ui
    //   <div
    //   onClick={ali}
    //   key={id}
    //   className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row overflow-hidden"
    // >
    //   <div className="md:w-40 w-full h-60 md:h-auto">
    //     <img
    //       src={cover || "/fallback.jpg"}
    //       alt={title}
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    //   <div className="flex-1 p-4 flex flex-col justify-between">
    //     <div>
    //       <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
    //       <p className="text-sm text-gray-500 mb-4">by {author}</p>
    //       <p className="text-gray-700 text-sm mb-4 line-clamp-3">{description}</p>
    //     </div>
    //     {moodTags.length > 0 && (
    //       <ul className="flex flex-wrap gap-2 mt-auto">
    //         {moodTags.map((item, index) => (
    //           <li
    //             key={index}
    //             className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
    //           >
    //             {item}
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // </div>

    // second
    // <div className="flex flex-col rounded-xl overflow-hidden md:flex-row my-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
    //   <div className="md:w-1/2">
    //     <img src={cover} alt={`Cover of ${title}`} className="w-full h-96 object-cover" />
    //   </div>
    //   <div className="bg-gray-200 p-4 md:w-1/2 flex flex-col justify-center">
    //     <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    //     <p className="text-sm text-gray-700 mb-2">by {author}</p>
    //     <p className="text-base text-gray-800">{description}</p>

    //     {/* <Link href='/' className="bg-black text-white inline">More ...</Link> */}
    //     <button className="bg-black text-white text-left w-[100px] py-2 mt-4 rounded-xl px-5">More ...</button>
    //   </div>
    // </div>
    <div
      onClick={ali}
      key={id}
      className="bg-white p-4 rounded-xl shadow-md border border-[#e5e5e5] hover:shadow-lg transition flex flex-col md:flex-row gap-4"
    >
      <img
        src={cover || "/fallback.jpg"}
        alt={title}
        className="w-full h-[500px] md:w-32 md:h-48 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-black">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">by {author}</p>
        <p className="text-[#1a1a1a] text-sm line-clamp-3">{description}</p>
        <p>
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
        </p>
      </div>
    </div>
  );
};

export default BookItem;
