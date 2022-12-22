import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Heder";
import { Link } from "react-router-dom";
import ModalMenu from "../components/ModalMenu";
import dataDetailSkill from "../constant/dataDetailSkill";
import SkillCard from "../components/SkillCard";

export default function DetailSkill() {
  const { item } = useParams();

  return (
    <div className="w-screen min-h-screen flex flex-col p-[30px] bg-[#212121] overflow-hidden">
      <Link to="/biodata">
        <Header title={item} />
      </Link>

      <div className="mt-10 flex flex-col gap-4 w-full justify-center items-center">
        <img src={dataDetailSkill[item].bannderImage} alt={"html"} className="rounded-xl max-w-md:" />

        
          <p className="text-white">{dataDetailSkill[item].description}</p>

        <div>
            {dataDetailSkill[item].data.map((v) => {
                return(
                    <SkillCard 
                        key={v.id}
                        title={item}
                        content={v.title}
                        image={v.image}
                        multiLink={v.multiLink}
                    />
                )
            })}
        </div>

      </div>

      <ModalMenu />
    </div>
  );
}
