import React from "react";
import { Link } from "react-router-dom";
import Heder from "../components/Heder";
import ModalMenu from "../components/ModalMenu";
import SkillCard from "../components/SkillCard";
import dataSkill from "../constant/dataSkill";

export default function Skill() {
  return (
    <>
      <div className="w-screen min-h-screen flex flex-col p-[30px] bg-[#212121] overflow-hidden">
        <Link to="/biodata" className="cursor-pointer">
          <Heder title={"Skill"} />
        </Link>

        {dataSkill.map((item) => {
          return <SkillCard title={item.title} content={item.content} image={item.image} link={item.link} key={item.id} />;
        })}

        <ModalMenu />
      </div>
    </>
  );
}
