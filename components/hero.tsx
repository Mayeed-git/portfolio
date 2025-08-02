import React from 'react'
import {Spotlight} from "@/components/ui/Spotlight";
import {cn} from "@/lib/utils";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import Magicbutton from "@/components/ui/magicbutton";
import {FaLocationArrow} from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="white" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />
            </div>

            <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black absolute top-0 left-0 ">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,rgba(228,228,231,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.2)_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.2)_1px,transparent_1px)]",
                    )}
                />
            </div>
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Transforming Concepts Into Seamless Experience" />
                        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Hi, I&apos;m Mayeed, A Software Engineer based in London.
                        </p>
                        <a href="#about">
                            <Magicbutton title="Show my work"
                                         icon={<FaLocationArrow />}
                                         position='right'

                            />
                        </a>
                    </div>
                </div>
        </div>
    )
}
export default Hero
