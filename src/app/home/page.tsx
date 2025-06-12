import BestSellersComponent from "@/components/best-sellers/best-sellers";
import Book from "@/components/book/book";
import Summary from "@/components/summary/summary";
import Trend from "@/components/trend/trend";

const HomePage = () => {
  


  return ( 
    <div className="">

      <div 
        className="flex justify-center items-center  h-[600px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://www.whichbook.net/bookgrids/homepage?mode=desktop')" }}
      >
        <div className="w-[360px] text-center p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl bg-white">
          <h2 className="text-3xl font-semibold">Discover your next great read</h2>
          <p className="text-left my-3 pl-5">
  Fancy something unusual and unpredictable? Funny or sexy? No problem. Use our unique mood and emotion search to find great books with exactly the flavour you&apos;ve asked for.
</p>

          <button className="bg-[#1a1a1a] cursor-pointer text-white px-4 py-2 mt-4 rounded hover:bg-[#333] transition-colors">
          Choose: Mood & Emotion Search 
          </button>
        </div>
      </div>


     <Summary/>
     <Trend/>
     <BestSellersComponent/>
    <Book/>

    </div>
   );
}
 
export default HomePage;