"use client";

import { cn } from "@/lib/utils";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import Lottie from "react-lottie";
import {Globe} from "@/components/ui/globe";
import animationData from '@/data/confetti.json'
import {GlobeDemo} from "@/components/ui/grid-globe";
import {useState} from "react";
import Magicbutton from "@/components/ui/magicbutton";
import {IoCopyOutline} from "react-icons/io5";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg,
                                  id,
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () =>{
        navigator.clipboard.writeText('mayeedmuhit@gmail.com');
        setCopied(true);
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.3] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                // Darker gradient with less white
                background: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(20,20,20,0.9) 30%, rgba(35,35,35,0.7) 70%, rgba(0,0,0,1) 100%)",
            }}
        >
            {/* add img divs */}
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                    } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        {/*<div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>*/}
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    {/* Description with white/gray text */}
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-gray-300 z-10">
                        {description}
                    </div>
                    {/* Title with white text */}
                    <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white">
                        {title}
                    </div>

                    {/* for the github 3d globe */}
                    {id === 2 && <GlobeDemo />}

                    {/* Tech stack list div */}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {['JavaScript', 'Java', 'Python'].map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                lg:opacity-100 rounded-lg text-center bg-gray-800 text-white"
                                    >
                {item}
              </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-gray-800"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-gray-800"></span>
                                {['Next.js','SpringBoot','PostgresSQL'].map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                lg:opacity-100 rounded-lg text-center bg-gray-800 text-white"
                                    >
                {item}
              </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div
                                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                                }`}
                            >
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings:{
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }} height={200} width={400} />
                            </div>

                            <Magicbutton
                                title={copied ? "Email is Copied!" : "Copy my email address"}
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-gray-800"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

