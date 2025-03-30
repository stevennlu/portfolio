"use client"

import { useEffect } from "react";
import ContactPage from "./contact-page";
import FrontPage from "./frontpage";
import Navbar from "./navbar";
import ProjectCard from "./project-card";
import {Inter} from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", 
});


const Page =() => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  
  return (

    


    <main className={`${inter.variable} bg-[#0e100f] text-white font-sans scroll-smooth`}>

      



    <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-8 text-white pb-10 scroll-smooth">
       
       <Navbar/>
       
       <section id="home" className="scroll-mt-20">
       <FrontPage/>
       </section>
       <section id="projects" className="scroll-mt-20">
       <ProjectCard/>
       </section>
       <section id="contact" className="">
       <ContactPage/>
       </section>
       
      

       <div className="pt-5 text-xs text-neutral-500">Built with MongoDB</div>
       

       
    </div>

    </main>
  
  )
}

export default Page;