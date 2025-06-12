import Image from "next/image";
import Link from "next/link";

const Summary = () => {
    const summary = [
      {
        title: 'Mood & Emotion',
        image: 'https://api.sarirniroo.ir/mood&emotion.jpg',
        link:"/mood-emotion"
    },
      {
        title: 'Countries',
        image: 'https://api.sarirniroo.ir/countries.jpg',
        link:"/countries"
    },
      {
        title: 'Bestsellers',
        image: 'https://www.whichbook.net/media/fttdodvz/homepage-bestsellers.jpg',
        link:"/best-sellers"
    }
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10 bg-white">
        {summary.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-2xl  duration-300 p-4 "
          >
              <h2 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h2>
            <Image
            width={224}
            height={224}
              src={item.image}
              alt={item.title}
              className="w-56 h-56 object-cover rounded-xl mb-4 border border-gray-300"
            />
            <Link href={item.link} >
            <button className=" cursor-pointer bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              View {item.title}
            </button>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default Summary;
  