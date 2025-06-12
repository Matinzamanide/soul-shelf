const BookItemSkelton = () => {
    return ( 
        <div className="bg-white p-4 rounded-xl shadow-md border border-[#e5e5e5] flex flex-col md:flex-row gap-4 animate-pulse">
  <div className="w-full h-[500px] md:w-32 md:h-48 bg-gray-200 rounded-lg" />

  <div className="flex-1 space-y-3">
    <div className="h-6 bg-gray-200 rounded w-1/2" />
    <div className="h-4 bg-gray-200 rounded w-1/3" />
    <div className="h-4 bg-gray-200 rounded w-full" />
    <div className="h-4 bg-gray-200 rounded w-5/6" />
    <div className="h-4 bg-gray-200 rounded w-2/3" />

    <div className="flex flex-wrap gap-2 mt-10">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 h-6 w-20 rounded-full"
        />
      ))}
    </div>
  </div>
</div>

     );
}
 
export default BookItemSkelton;