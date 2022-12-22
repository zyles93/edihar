import React from "react";

export default function BiodataCards({label, value, icon, link}) {
    
    const handleLink =()=>{
        window.open(link)
    }

    return(
        <div className="w-full flex flex-col gap-2 relative ">
            <h1 className="text-[16px] font-light">{label}</h1>
            <p className="text-[16px] font-bold max-w-[70%]">{value}</p>
            
            <button className="absolute right-0 top-[30%]" onClick={handleLink}>
                {icon}
            </button>
        </div>
    )
}