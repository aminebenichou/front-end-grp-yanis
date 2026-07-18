'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CustomButton from "./CustomButton";
import { ArchiveIcon, ArrowDownIcon, ArrowUpIcon, CirclePlus, FolderIcon, FoldersIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import axios from "axios";

interface navbarProps {
  callback?: ()=>void
}

const NavBar = (props:navbarProps) => {
  const [addingNote, setAddingNote] = useState(false)
  const [data, setData] = useState({})
  function AddNote() {
    axios.post("/api/create-note/",data)
    console.log(data);
    props.callback
    setAddingNote(false)
  }

  useEffect(()=>{
    addingNote ? 
    AddNote()
    
    : console.log("None");
    
  }, [addingNote])


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
          <div className="flex justify-start items-center p-5 cursor-pointer w-full hover:text-white ">
            <CirclePlus size={18}/>
            <p className="font-bold text-lg ml-1">Create Note</p>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add New Note</DialogTitle>
          </DialogHeader>

          <form className="flex flex-col items-center justify-center">
            <Input placeholder="Title" className="my-5 mx-5" onChange={(e)=>setData({...data, title:e.target.value})} />
            <Textarea rows={30} placeholder="Description" onChange={(e)=>setData({...data, description:e.target.value})} />
            <Button onClick={(e)=>{
              e.preventDefault()
              setAddingNote(true)}} className="bg-blue-900 my-5 text-white hover:bg-blue-700 font-bold">Add</Button>
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