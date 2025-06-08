"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";

const Menu = () => {
  const nav = [
    { title: "Home", href: "/" },
    { title: "Mood & Emotion", href: "/mood-emotion" },
    { title: "Countries", href: "/countries" },
    { title: "Bestsellers", href: "/best-sellers" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const pathname = usePathname();

  return (
    <div className="inset-0 sticky top-0 bg-black/10 backdrop-blur-xl shadow-xl pt-2 flex z-20  items-center ">
        <div className="">
        <RiMenu2Line onClick={toggleMenu} cursor="pointer" size={30} className="m-4 md:hidden" />
        </div>
        <div className="absolute right-5 md:hidden">
        <Image
          src="/soul-shelf1.svg"
          alt="hello"
          width={100}
          height={56}
          priority
        />
        </div>


      <div className={`sidebar ${menuOpen ? 'w-screen z-50' : 'w-0'}  duration-200 overflow-hidden h-screen fixed top-0 right-0 bg-black/95 backdrop-blur-xl shadow-xl`}>

        <FaTimes onClick={toggleMenu} cursor="pointer" color="white" size={30} className="absolute top-7 right-8"/>
        <div className="flex flex-col justify-center items-center mt-30">
            {
                nav.map((item,index)=>{
                    return <Link key={index} href={item.href} onClick={toggleMenu} className="text-white my-10 font-semibold text-xl">{item.title}</Link>
                })
            }
        </div>
      </div>

      {/* l;pl */}

      <div className="hidden md:flex w-[20%] justify-center">
        <Image
          src="/soul-shelf1.svg" // حواست باشه public/ اولش حذف شه
          alt="Soul Shelf Logo"
          width={150}
          height={56}
          priority
        />
      </div>

      {/* Navigation */}
      <div className="hidden md:flex w-[60%] items-center justify-center">
        <ul className="flex gap-6">
          {nav.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`relative transition-all duration-300 px-6 py-2 rounded-md text-lg font-medium 
                hover:text-white hover:bg-black
                ${pathname === item.href ? "bg-black text-white shadow-md" : "text-gray-800 bg-white/30"}`}
              >
                {item.title}
                {pathname === item.href && (
                  <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
