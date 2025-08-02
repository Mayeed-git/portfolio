import React from 'react'

const Magicbutton = ({
    title, icon, position, handleClick, otherClasses
                     }: {title: string; icon: React.ReactNode; position: string; handleClick?: ()=>void; otherClasses?: string;}) => {
    return (
        <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C0C0C0_0%,#4B5563_50%,#C0C0C0_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}
export default Magicbutton
