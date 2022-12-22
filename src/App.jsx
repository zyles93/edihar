import React from "react";
import { Routes, Route } from "react-router-dom"
import Biodata from "./pages/Biodata";
import Skill from "./pages/Skill";
import Home from "./pages/Home";
import DetailSkill from "./pages/DetailSkill";

export default function App(){
  return(
    <Routes>
      
      <Route path="/" element={ <Home />} />
      <Route path="/biodata" element={<Biodata />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/skill/:item" element={<DetailSkill />} />
      
    </Routes>
  )
}