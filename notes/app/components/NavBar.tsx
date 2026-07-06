'use client'

import CustomButton from "./CustomButton";
import { ArchiveIcon, ArrowDownIcon, ArrowUpIcon, CirclePlus, FolderIcon, FoldersIcon, SearchIcon } from "lucide-react";

const NavBar = () => {
 function AddNote() {
    console.log("Creating New Note");

  }
  const navButtons = [
    { text: "Create Note", icon: <CirclePlus />, onclick: ()=>AddNote() },
    { text: "Search", icon: <SearchIcon /> },
    { text: "Archives", icon: <ArchiveIcon /> },
    { text: "Folder", icon: <FoldersIcon />, suffix:<ArrowDownIcon />,clickedSuffix:<ArrowUpIcon />, isFolder:true, folders:[
      {
        text:'Finance'
      },
      {
        text:'Todo'
      },
      {
        text:'Shopping'
      },
    ] },
  
  
  ]

  return (
    <div>
        {
          navButtons.map((btn) => <CustomButton key={btn.text} Text={btn.text} Prefix={btn.icon} onClick={btn.onclick} isfolder={btn.isFolder || false} folders={btn.folders} Suffix={btn.suffix} ClickedSuffix={btn.clickedSuffix} />)
        }
    </div>
  )
}

export default NavBar