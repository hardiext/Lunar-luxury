'use client';
import { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={`mx-auto z-30 fixed  w-full ${isScrolled ? 'bg-white/80 backdrop-blur-xl z-40  border-black/5' : 'bg-white'} transition-all`}>
            <nav className="px-12 py-8 grid lg:grid-cols-3 grid-cols-2  w-full">
                <div className="text-2xl uppercase font-semibold text-start text-black">LUNAR</div>
                <ul className=" items-center space-x-10 justify-center md:flex hidden">
                    <li>Collection</li>
                    <li>Editorial</li>
                    <li>Studio</li>
                    <li>Archive</li>
                </ul>
                <div className="flex items-center justify-end space-x-6">
                        <button>
                            <RiSearch2Line size={20}  className="text-gray-500 cursor-pointer hover:text-black hover:scale-105 transition-all ease-in-out"/>
                        </button>
                        <button>
                            <RiUser3Line size={20}  className="text-gray-500 cursor-pointer hover:text-black hover:scale-105 transition-all ease-in-out"/>
                        </button>
                        <button className="relative group">
                            <FiShoppingBag size={20}  className="text-gray-500 cursor-pointer group-hover:text-black group-hover:scale-105 transition-all ease-in-out"/>
                            <span className="text-white text-[8px] rounded-full px-1.5 py-0.5 bg-black absolute -top-1 group-hover:scale-105 transition-all ease-in-out">2</span>
                        </button>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;