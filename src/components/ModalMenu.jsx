import React, {useState }from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {Link} from "react-router-dom"
// import { menu } from "../constant/dataBio";
import dataMenu from "../constant/dataMenu";

export default function ModalMenu(){

    const [show, setShow] =useState(false)

    const handleShowModal = () =>{
        setShow(!show)
    }


    return(
        <>
            {show && (
                <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#212121] fixed top-0 left-0 z-[100]">
                
                <button className="w-full h-12 flex flex-col gap-4 justify-center items-center text-green-400 font-bold" onClick={handleShowModal}>

                    {dataMenu.map(({title, path}, id)=>{
                        return (
                           <div key={id}>
                            <Link to={path}>{title}</Link>
                           </div>
                        )
                    })}
                    {/* {menu.map(( {name, path}, index ) => {
                    return (
                        <Link to={path} key={index}>
                            {name}
                        </Link>
                    )

                    })} */}
                </button>

            </div>
            )}

            <button className="h-[80px] w-[80px] bg-green-400 rounded-full flex justify-center items-center text-3xl fixed -bottom-4 -right-4 text-gray-800 z-[240]" onClick={handleShowModal}>
                <AiOutlineMenu />
            </button>
        </>
    )
}