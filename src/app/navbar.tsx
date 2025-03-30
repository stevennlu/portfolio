"use client";

import { Sun } from "lucide-react";
import { useEffect, useState } from "react";




const Navbar = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    setHeader(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    
    return () => {
      window.removeEventListener("scroll", scrollHeader); 
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  

  return (
    <nav
      className={`sticky top-0  py-4 transition-all duration-300 ${
        header ? "bg-[#0e100f] bg-opacity-95 text-[#9ca3af] shadow-md backdrop-blur-md" :"bg-transparent text-[#9ca3af]"
      }`}
    >
      <div className="flex flex-1 items-center justify-between gap-10 py-3 scroll-smooth ">

        <a href="#" onClick={(e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
          }}>home</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>projects</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} >contact</a>
        

        <div className="flex flex-1 items-center justify-end">
           {/* <Sun className="size-4"/> */}
        </div>
        

      </div>


    </nav>
  );
};

export default Navbar;
