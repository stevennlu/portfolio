"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";


import {Calistoga} from "next/font/google"


const calistoga = Calistoga({
  weight: "400", // Calistoga only has weight 400
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});




const FrontPage = () => {
  const [click, setClick] = useState<string | null>("Experience");

  const workList = [
    {
      label: "Experience",
      entries: [

        {
            title: "CS Club",
            role: "Secretary",
            content:
              "- Explore and discuss emerging trends in technology, such as artificial intelligence (AI) and machine learning, through workshops and study sessions.\n" +
              "- Participate in group coding sessions and technical discussions to enhance problem-solving skills and broaden technical expertise.\n" +
              "- Review and experiment with a wide range of tools and frameworks to stay current with industry best practices.",
            date: "Sep 2023 - Sep 2024",
          },


        {
          title: "Lavasmart",
          role: "Operations Assistant",
          content:
            "- Created and managed invoices for both residential and commercial cleaning services, ensuring timely and accurate billing.\n" +
            "- Drafted and sent professional emails to clients and vendors, ensuring clear communication and efficient resolution of inquiries.\n" +
            "- Managed incoming phone calls, providing excellent customer service and supporting daily business operations.",
          date: "Oct 2021 - Mar 2023",
        },
        
      ]
    },
    {
      label: "Education",
      entries: [
        {
          title: "National Louis University",
          role: "BS in Computer Science and Information Systems",
          content: "- Relevant coursework: Data Structures, Algorithms, Web Development. \n- 4.0 / 4.0 GPA.\n- Member of CS Club.\n- Honors List Recipient.",
          date: "Jun 2026"
        }
      ]
    }
  ];

  return (
    <div>
      <div className="flex flex-col h-auto pb-16">
        {/* Intro Section */}
        <div className="">
          <h1 className={`${calistoga.variable} text-5xl font-serif`}>hi steven here 👋</h1>
          <p className="text-light mt-4">Software developer from Chicago, IL</p>
          <p className="text-light mt-2">
            I like to develop full stack applications, be active, and drink coffee at night.
          </p>

          <div className="flex mt-8 items-center ">
            <Button onClick={() => window.open("https://drive.google.com/file/d/1xi_Vm0HdRB2DeSjB8jSZbH2obKHOfbRU/view?usp=sharing")} variant="outline" className="bg-[##0e100f] hover:bg-slate-200/100">
              Resume
              <FileUser />
            </Button>

            <Github onClick={() => window.open("https://github.com/stevennlu")} className="ml-10 size-5 cursor-pointer" />
            <Linkedin onClick={() => window.open("https://www.linkedin.com/in/steven-sanchezswe/")} className="ml-5 size-5 cursor-pointer" />
            <Mail onClick={() => window.open("mailto:stevendsanchez1@gmail.com?")} className="ml-5 size-5 cursor-pointer" />
          </div>
        </div>

        {/* Space */}
        <div className="pt-16"></div>

        {/* Header Section */}
        <div className="grid grid-cols-2 gap-1 p-1 border rounded-lg bg-[#0e100f]">
          {workList.map((item) => (
            <button
              key={item.label}
              onClick={() => setClick(item.label)}
              className={`border rounded-lg text-center transition ${
                click === item.label ? "bg-blue-500 text-white" : "bg-transparent"
              }`}>
              {item.label}
            </button>
          ))}
        </div>

        {/* Card Component (Shows Multiple Experiences/Education Entries) */}
        <div className="mt-2">
          <Card className="border border-[#9ca3af] bg-transparent text-white break-words px-4 py-4">
            {click &&
              workList
                .find((category) => category.label === click)
                ?.entries.map((entry, index) => (
                  <div key={index} className="mb-6">
                    {/* Date */}
                    <p className="text-sm text-[#9ca3af]">{entry.date}</p>

                    {/* Title */}
                    <h2 className="font-semibold">{entry.title}</h2>

                    {/* Role */}
                    <p className="text-sm text-[#9ca3af]">{entry.role}</p>

                    {/* Content */}
                    <p className="whitespace-pre-line prose-pr-8 text-sm pt-2">{entry.content}</p>
                  </div>
                ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;



