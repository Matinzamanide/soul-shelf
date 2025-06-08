import { IBook } from "@/types/type";

interface IBookPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}
const BookPage: React.FC<IBookPageProps> = async (props) => {
  const { id } = await props.params;
  console.log(id);

  const res = await fetch(`http://www.sarirniroo.ir/Mobile/books?title=${id}`);
  const data = (await res.json())[0] as IBook;
  return (
    <div className="">
      <div
        style={{
          backgroundColor: data?.color_code ? data.color_code : "black",
        }}
        className="min-h-screen text-white p-5 flex flex-col lg:flex-row lg:p-20"
      >
        <div className="right px-6 w-[50%] max-h-[50%] lg:w-[50%]">
          <img src={data.cover || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} className="border-2  border-white" alt="" />
        </div>
        <div className="left mt-10 px-6 lg:w-[50%]">
          <p className="text-2xl font-semibold">{data?.title}</p>
          <p className="my-2">{data?.author}</p>
          <p className="text-sm">{data?.description}</p>
          <p className="font-semibold my-2">Extract</p>
          <p className="text-sm w-[85%]">{data?.extract}</p>
          <p className="font-semibold my-2">Paralles</p>
          <ul className="list-disc ml-10 mt-4 text-sm">
            {data?.parallels.map((item,index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
