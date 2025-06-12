import { Dispatch, SetStateAction, useState } from "react";
import { FiHome, FiZap, FiSmile, FiClock, FiHeart } from "react-icons/fi";
import { PiMaskSadFill } from "react-icons/pi";

interface INavabr {
  selectedMood: string;
  setSelectedMood: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<INavabr> = ({ setSelectedMood, selectedMood }) => {
  
  const moods = [
    { label: "homesick", icon: <FiHome /> },
    { label: "need motivation", icon: <FiZap /> },
    { label: "feeling sad", icon: <FiHeart /> },
    { label: "feeling nostalgic", icon: <FiClock /> },
    { label: "low energy", icon: <FiSmile /> },
    { label: "violent", icon: <PiMaskSadFill /> },
  ];


  return (
    <div className=" mb-6 ">
    

      <nav className="grid grid-cols-2 w-[90%] rounded-2xl z-0 mx-auto md:flex justify-center py-6 gap-4 bg-white">
        {moods.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setSelectedMood(label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all border-2 ${
              label === selectedMood
                ? "bg-black text-white border-black"
                : "text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <p>


      </p>
    </div>
  );
};

export default Navbar;
