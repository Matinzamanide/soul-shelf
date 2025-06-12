import { BestSeller } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

interface BestSellersItemProps {
  params: Promise<{ id: string }>;
}
const BestSellersItem: React.FC<BestSellersItemProps> = async (props) => {
  const { id } = await props.params;
  const res = await fetch(`http://www.sarirniroo.ir/Mobile/bestSellers?title=${id}`);
  const data = (await res.json())[0] as BestSeller;
  return (
    <div className="bg-[#31353d] text-white">
      <h1 className="text-2xl font-semibold text-center py-7">
        Our suggestions if you enjoyed {data.title} by {data.author}
      </h1>
      <div className="flex flex-col lg:flex-row p-4 lg:p-10 lg:w-[95%]">
        <div className="right lg:w-[40%] flex flex-col items-center ">
          <Image width={224} height={224} src={data.main_cover} className="h-[500px] mt-10 w-1/2" alt="" />
          <p className="font-semibold mt-4">
            {data.title} &nbsp; by &nbsp; {data.author}
          </p>
        </div>

        <div className="left lg:w-[60%]">
          <div className="">
            {data.suggest_book.map((item) => {
              return (
                <div
                key={item.title}
                  style={{backgroundColor: item.color_code ? item.color_code: "black",}}
                  className="flex flex-col lg:flex-row mt-10"
                >
                  <div className="lg:w-[40%] flex justify-center mt-5 lg:mt-0">
                    <Image width={224} height={224} src={item.cover || '/fallback'} className="h-full" alt="" />
                  </div>


                  <div className="lg:w-[60%] p-8">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="my-3 font-semibold">{item.author}</p>
                    <p>{item.description}</p>
                    <button className="w-full border mt-4 py-3">
                    <Link href={`/book-page/${item.title}`} className=" text-center mx-auto border-white">View {item.title}</Link>
                    </button>
                  </div>

                  

                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellersItem;
