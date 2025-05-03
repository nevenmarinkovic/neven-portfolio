import Image from "next/image";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

export default function ExperienceBody({ imageSrc1, alternative1, imageSrc2, alternative2, imageSrc3, alternative3, imageSrc4, alternative4, text1, text2, text3, text4, text5, text6 }) {
  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (

    <div className="space-y-16">

          <motion.section
                  variants={fadeVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5 }}
                >
                <section className="flex flex-col items-center max-w-full py-8">
            
                      {/* Heading */}
                      <h2 className="text-black text-2xl md:text-6xl py-8 font-bold">
                        What I did
                      </h2>
          
                      
                      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">
                        <div className="max-w-lg h-full md:w-1/2 mx-auto py-8 space-y-48">
                          <Image
                            src={imageSrc1} // replace with your image in public/
                            alt={alternative1}
                            width={1000}
                            height={1000}
                            className="rounded-lg"
                          />
                          {imageSrc2 && (
                            <Image
                              src={imageSrc2} // replace with your image in public/
                              alt={alternative2}
                              width={1000}
                              height={1000}
                              className="rounded-lg"
                            />
                          )}
                        </div>

                        
                        <div className="w-full md:w-1/2 space-y-4 mx-auto p-6 rounded-lg">
                          <p className="text-black dark:text-black-300 font-serif">
                            {text1}
                          </p>
                          <p className="text-black dark:text-black-300 font-serif">
                            {text2}
                          </p>
                          <p className="text-black dark:text-black-300 font-serif">
                            {text3}
                          </p>
                        </div>
                      </div>        
                    
                </section>
                </motion.section>
  
                <motion.section
                  variants={fadeVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5 }}
                >
                  <section className="flex flex-col items-center max-w-full py-8 bg-[#D3D3D3]">
                
                {/* Heading */}
                <h2 className="text-black text-2xl md:text-6xl py-8 font-bold">
                  What I learned
                </h2>

                {/* Flex container for image and text */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">          
                  {/* Text */}
                  <div className="w-full md:w-1/2 space-y-4 mx-auto p-6 rounded-lg">
                    <p className="text-black dark:text-black-300 font-serif">
                      {text4}
                    </p>
                    <p className="text-black dark:text-black-300 font-serif">
                      {text5}
                    </p>
                    <p className="text-black dark:text-black-300 font-serif">
                      {text6}
                    </p>
                  </div>
                  

                      {/* Image */}
                        <div className="max-w-lg h-full md:w-1/2 mx-auto py-4 space-y-16">
                          <Image
                            src={imageSrc3} // replace with your image in public/
                            alt={alternative3}
                            width={1000}
                            height={1000}
                            className="rounded-lg"
                          />
                          {imageSrc4 && (
                            <Image
                              src={imageSrc4} // replace with your image in public/
                              alt={alternative4}
                              width={1000}
                              height={1000}
                              className="rounded-lg"
                            />
                          )}
                        </div>    
                      </div>  
                </section>
                </motion.section>
            </div>
  )
}