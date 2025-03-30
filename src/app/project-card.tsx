"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"


import {Calistoga} from "next/font/google"


const calistoga = Calistoga({
  weight: "400", // Calistoga only has weight 400
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});


const ProjectCard = () => {
    return(
        <div >
            <div>
            <p className={`${calistoga.variable} text-3xl pb-8 font-serif`} >featured projects</p>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg bg-[#0e100f]">


                <div>
                    <Card className="border border-[#9ca3af] bg-transparent text-white break-words px-4 py-4 ">
                        <CardHeader>
                        <Image onClick={() => window.open("https://docsclone-gamma.vercel.app/")} src="/docsclone.png" alt="image" width={300} height={200} className="object-cover w-full h-[210px] cursor-pointer"/>
                        </CardHeader>
                           
                       
                        <CardContent>
                            <p className="pb-1 ">Google Docs Clone</p>
                        <p className="text-xs text-[#9ca3af] ">Developed a collaborative Google Docs clone with secure user authentication powered by Clerk. Integrated rich text editing with advanced formatting tools and enabled real-time collaboration, allowing multiple users to edit documents simultaneously.</p>
                        </CardContent>
                        <CardFooter className="gap-1.5 flex-wrap">
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                NextJS
                            </div>
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                React
                            </div>
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                TailwindCSS
                            </div>
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                Typescript
                            </div>
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                Convex DB
                            </div>
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                Git
                            </div>
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                Vercel
                            </div>
                        </CardFooter>
                        
                    </Card>
                    
                </div>
                <Card className="border border-[#9ca3af] bg-transparent text-white break-words px-4 py-4" >
                        <CardHeader className="flex justify-center items-center">
                        <Image onClick={() => window.open("https://stevennlu.github.io/ScoreUpd-Website/")} src="/Scoreupd-web.png" alt="image" width={300} height={150} className="object-cover w-full h-[210px] cursor-pointer"/>
                        </CardHeader>
                           
                       
                        <CardContent>
                            <p className="pb-1 ">ScoreUpd</p>
                        <p className="text-xs text-[#9ca3af] ">Developed a dynamic soccer scores website that displays live and past match results across multiple leagues. Integrated real-time APIs to fetch live match data, ensuring accurate and up-to-date scores, standings, and league insights. </p>
                        </CardContent>
                        <CardFooter className="gap-1.5 flex-wrap">
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                HTML
                            </div>
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                CSS
                            </div>
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                JavaScript
                            </div>
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                Bootstrap
                            </div>
                            <div className="bg-[#1f2937] border border-transparent px-1 rounded-md text-xs">
                                <p>Git </p>
                            </div>
                           
                            
                        </CardFooter>
                        
                    </Card>

                <div>
                
                    
                </div>


            </div>



        </div>
    )

}

export default ProjectCard