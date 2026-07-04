'use client'

import Image from "next/image";
import CustomButton from "./components/CustomButton";
import { ArchiveIcon, CirclePlus, SearchIcon } from "lucide-react";





export default function Home() {

  function AddNote() {
    console.log("Creating New Note");

  }
  const navButtons = [
    { text: "Create Note", icon: <CirclePlus />, onclick: ()=>AddNote() },
    { text: "Search", icon: <SearchIcon /> },
    { text: "Archives", icon: <ArchiveIcon /> },
  ]

  return (
    <div>
      <div>
        {
          navButtons.map((btn) => <CustomButton key={btn.text} Text={btn.text} Prefix={btn.icon} onClick={btn.onclick} />)
        }
      </div>
    </div>
  );
}
