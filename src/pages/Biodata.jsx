import React from "react";
import Header from "../components/Heder";
import profile1 from "../assets/profile1.png";
import BiodataCards from "../components/BiodataCards";
import {Link} from "react-router-dom"

import { AiOutlineWhatsApp, AiFillPhone, AiFillMail, AiOutlineHome, AiOutlineArrowLeft} from "react-icons/ai";
import { SiAcademia, SiBlogger, SiMapbox} from "react-icons/si"

import dataBio from "../constant/dataBio";
import ModalMenu from "../components/ModalMenu";


const handleIcon = (name) => {

  switch(name){

    case "phone" :
      return < AiOutlineWhatsApp/>

    case "email" : 
      return < AiFillMail/>

    case "academia.edu" :
      return < SiAcademia />

    case "blogger" : 
      return < SiBlogger />

    case "map" :
      return < SiMapbox />

    case "istek-ak" :
      return < AiOutlineHome />

    default :
      return < AiOutlineArrowLeft />

  }

}

export default function Biodata() {
  console.info(dataBio);

  

  return (
    <div className="w-screen flex flex-col p-[30px] bg-[#212121] text-green-500 overflow-hidden">
      <Link to="/">
      <Header title={"Biodata"} />
      </Link>

      <div className="flex flex-col justify-center items-center mt-14">
        <img src={profile1} alt="profile" className="w-[200px] h-[200px] rounded-full " />

        <div className="w-[215px] h-[215px] border-[3px] border-green-500 rounded-full border-dashed absolute "></div>
      </div>

      <div className="flex flex-col gap-10 mt-6 mb-[100px]">
        {dataBio.map((item) => {
          return <BiodataCards key={item.id} 
            label={item.label} 
            value={item.value} 
            icon={item.icon && handleIcon(item.icon)} 
            link={item.link} 
            />;
        })}
      </div>
     <ModalMenu />
    </div>
  );
}
