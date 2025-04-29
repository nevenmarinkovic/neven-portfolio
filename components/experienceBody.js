import Image from "next/image";
import Navbar from "@/components/navbar";

export default function ExperienceBody({ imageSrc1, alternative1, imageSrc2, alternative2, heading1, heading2, text1, text2 }) {
  return (

    <div className="space-y-16">

                <section className="flex flex-col items-center max-w-full py-8">
            
                      {/* Heading */}
                      <h2 className="text-black text-2xl md:text-6xl py-8 font-bold">
                        {heading1}
                      </h2>
          
                      {/* Flex container for image and text */}
                      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">
                        
                        {/* Image */}
                        <div className="max-w-lg h-full md:w-1/2 mx-auto py-4">
                          <Image
                            src={imageSrc1} // replace with your image in public/
                            alt={alternative1}
                            width={1000}
                            height={1000}
                            className="rounded-lg"
                          />
                        </div>
          
                        {/* Text */}
                        <div className="w-full md:w-1/2 space-y-4 mx-auto p-6 rounded-lg flex items-center justify-center">
                          <p className="text-black dark:text-black-300 font-serif">
                            {text1}
                          </p>
                        </div>
                      </div>        
                    
                </section>

                <section className="flex flex-col items-center max-w-full py-8 bg-[#D3D3D3]">
            
                      {/* Heading */}
                      <h2 className="text-black text-2xl md:text-6xl py-8 font-bold">
                        {heading2}
                      </h2>
          
                      {/* Flex container for image and text */}
                      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">          
                        {/* Text */}
                        <div className="w-full md:w-1/2 space-y-4 mx-auto p-6 rounded-lg flex items-center justify-center">
                          <p className="text-black dark:text-black-300 font-serif">
                            {text2}
                          </p>
                        </div>
                        

                      {/* Image */}
                        <div className="max-w-lg h-full md:w-1/2 mx-auto py-4">
                          <Image
                            src={imageSrc2} // replace with your image in public/
                            alt={alternative2}
                            width={1000}
                            height={1000}
                            className="rounded-lg"
                          />
                        </div>    
                      </div>  
                </section>
            </div>
  )
}