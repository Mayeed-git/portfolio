import React from 'react'
import {workExperience} from "@/data";
import { Button } from "@/components/ui/moving-border";

const Experience = () => {
    return (
        <div className="py-15" id="">
            <div className="relative z-20 bg-black/90 py-8 my-8">
                <h1 className="text-center font-bold text-white text-4xl md:text-5xl lg:text-6xl drop-shadow-[2px_2px_8px_rgba(0,0,0,1)] tracking-wide">
                    My Work Experience
                </h1>
            </div>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        borderRadius="1.75rem"
                        className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16" />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}
export default Experience
