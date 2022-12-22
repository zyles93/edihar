import React from "react";

export default function Header({title}){
    return(
        <div className="w-full px-[30px] flex items-center bg-green-500 h-[50px] top-0 left-0 z-10 fixed backdrop-blur-md backdrop-opacity-60">
            <h1 className="text-[-16px] font-bold text-gray-800 capitalize">{title}</h1>
            
        </div>
    )
}