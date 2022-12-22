import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col p-[30px] bg-[#212121] text-green-300 overflow-hidden xl:text-center">
      <h1 className="text-[36px] font-light">Hello...</h1>

      <div className="my-8 relative flex flex-col items-center">
        <img src={profile} alt="profile" className="min-w-[500px] h-[500px] rounded-full bg-cover bg-center autofill:" />
        <div className="border-green-500 border-[6px] rounded-full w-[530px] h-[530px] absolute -top-[15px]"></div>
      </div>

      <h1 className="text-3xl font-light">
        Saya <br /> Muhammad Edihar
      </h1>
      <p className="text-xs font-light">
        Kepala UPT Laboratorium <br />
        ISTEK-AK
      </p>
      <Link to={'/biodata'} className="w-[80px] h-[80px] bg-green-400 rounded-full fixed flex -bottom-5 -right-5 items-center justify-center hover:bg-green-200">
        <BsFillPlayFill className="text-2xl text-white" />
      </Link>
    </div>
  );
}
