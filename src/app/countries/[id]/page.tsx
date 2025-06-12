import type { CommonBook, Country } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

interface ICountryProps {
  params: Promise<{ id: String }>;
}
const Country: React.FC<ICountryProps> = async (props) => {
  const { id } = await props.params;
  console.log(id);
  const res = await fetch(`http://www.sarirniroo.ir/Mobile/countries/${id}`);
  const data = (await res.json()) as Country;
  if (!data) {
    return <p className="text-center">No data found</p>;
  }
  data.common_books = data.common_books.map((item: CommonBook) => {
    item.image_url = item.image_url.replace(
      "http://localhost:8000",
      "http://localhost:8000/images"
    );
    return item;
  });
  

  return (
    <div className="">
      <div className="w-[90%] md:w-[80%] mx-auto my-10">
        <p className="font-semibold text-2xl">
          <Link href={`/countries`}>Countries</Link> &gt; {data.name}{" "}
        </p>
        <p
          className={`text-transparent bg-clip-text text-4xl font-bold py-4`}
          style={{
            backgroundImage: `linear-gradient(to right, ${data.color_codes[0]}, ${data.color_codes[0]}, ${data.color_codes[1]})`,
          }}
        >
          {data.name}
        </p>{" "}
        <p>
          Capital City : <span className="font-semibold">{data.capital}</span>
        </p>
        <p>
          Religion : <span className="font-semibold">{data.religion}</span>
        </p>
        <p>
          Currency Unit :{" "}
          <span className="font-semibold">{data.currency_unit}</span>
        </p>
        <div className="flex flex-col lg:flex-row justify-between my-10">
          <div className="left  lg:w-[40%]">
            <Image
            width={224}
            height={224}
              src={data.flag_url}
              className="rounded-3xl shadow-2xl"
              alt={data.flag_url}
            />
          </div>
          <div className="right lg:w-[60%] p-4">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {data.common_books.map((item, index) => (
 <div
 key={index}
 className="relative bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300 hover:scale-[1.02] group"
>
 {/* Image with subtle overlay on hover */}
 <div className="overflow-hidden relative">
   <Image
   width={224}
   height={224}
     src={item.image_url}
     alt={item.title}
     className="w-full  object-cover group-hover:scale-105 transition-transform duration-500"
   />
   {/* Subtle dark overlay on hover */}
   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
 </div>

 {/* Content */}
 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-8"> {/* Changed from-black/80 to from-black/90 */}
   <h3 className="text-xl font-extrabold text-white drop-shadow-lg mb-1 line-clamp-2">
     {item.title}
   </h3>
   <p className="text-base text-gray-200 flex items-center">
     <span className="mr-1">📚</span> Author:{" "}
     <span className="font-semibold text-white ml-1">
       {item.author}
     </span>
   </p>
   {/* Dynamic color bar - potentially slightly thicker */}
   <div
     className="mt-3 h-1.5 w-1/3 rounded-full"
     style={{
       background: `linear-gradient(to right, ${data.color_codes[0]}, ${data.color_codes[1]})`,
     }}
   ></div>
   {/* <button
     className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium shadow-lg hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 flex items-center justify-center"
   >
     View More
     <span className="ml-2">→</span>
   </button> */}
 </div>

 <div className="absolute inset-0 pointer-events-none group-hover:bg-white/5 transition-colors duration-500 rounded-3xl"></div>
</div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Country;
