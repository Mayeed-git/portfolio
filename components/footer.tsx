import React from 'react'
import Magicbutton from "@/components/ui/magicbutton";
import {FaLocationArrow} from "react-icons/fa6";
import {socialMedia} from "@/data";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="flex flex-col items-center relative z-20 bg-black/90 py-8 my-8">
                <h1 className="text-center font-bold text-white text-4xl md:text-5xl lg:text-6xl drop-shadow-[2px_2px_8px_rgba(0,0,0,1)] tracking-wide">
                    Ready to take your digital experience to next level?
                </h1>
                <p className="text-white md:mt-10 my-5 text-center">Reach out to me and let&apos;s discuss how I can help you with my skills.</p>
                <a href="mailto:mayeedmuhit@gmail.com">
                    <Magicbutton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025</p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) =>(
                        <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <img src={profile.img} alt={profile.id} width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>

        </footer>
    )
}
export default Footer
