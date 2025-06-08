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

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className=" mb-6 ">
      {/* <div className="md:hidden bg-white py-1 px-5 flex justify-between items-center shadow-md">
        <RiMenu2Line onClick={toggleMenu} size={28} className="cursor-pointer text-black" />
        <span className="text-black font-semibold">
          <Image
                    className=""
                    src="/soul-shelf1.svg"
                    alt="Next.js logo"
                    width={100}
                    height={3}
                    priority
                  />
        </span>
      </div> */}

      {/* <div
        className={`fixed top-0 right-0 h-full w-72 z-50 transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-xl shadow-xl" />

        <div className="relative z-10 px-4 py-5 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-white">Choose Your Mood</h2>
            <FaTimes onClick={toggleMenu} className="text-white text-xl cursor-pointer" />
          </div>

          <ul className="flex flex-col gap-3">
            {moods.map(({ label, icon }) => (
              <li key={label}>
                <button
                  onClick={() => {
                    setSelectedMood(label);
                    toggleMenu();
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors 
                    ${
                      label === selectedMood
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/10"
                    }`}
                >
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div> */}

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
