'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CustomButton from "./CustomButton";
import { ArchiveIcon, ArrowDownIcon, ArrowUpIcon, CirclePlus, FolderIcon, FoldersIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NavBar = () => {
 function AddNote() {
    console.log("Creating New Note");

  }
  const navButtons = [
    // { text: "Create Note", icon: <CirclePlus />, onclick: ()=>AddNote() },
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
      <Dialog>
      <form>
        <DialogTrigger className="hover:bg-gray-800 my-5 mx-2 rounded-md h-10 w-full flex justify-start items-center" >
          <div className="flex justify-start items-center p-5 cursor-pointer  hover:text-white ">
            <CirclePlus size={18}/>
            <p className="font-bold text-lg ml-1">Create Note</p>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add New Note</DialogTitle>
          </DialogHeader>

          <form className="flex flex-col items-center justify-center">
            <Input placeholder="Title" className="my-5 mx-5" />
            <Input placeholder="Content" className="my-5 mx-5" />
            <Button className="bg-blue-900 text-white hover:bg-blue-700 font-bold">Add</Button>
          </form>
          
        </DialogContent>
      </form>
    </Dialog>
        {
          navButtons.map((btn) => <CustomButton key={btn.text} Text={btn.text} Prefix={btn.icon} isfolder={btn.isFolder || false} folders={btn.folders} Suffix={btn.suffix} ClickedSuffix={btn.clickedSuffix} />)
        }
    </div>
  )
}

export default NavBar