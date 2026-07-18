'use client'
import { useEffect, useState } from "react";
import Header from "./components/header";
import NoteCard from "./components/NoteCard";
import axios from "axios";
import { Loader2Icon } from "lucide-react";

export default function Home() {

  const [notes, setNotes] = useState([])
  useEffect(()=>{
    axios.get('/api/get-note').then((resp:any)=>setNotes(resp.data))
  }, [])
  console.log(notes);
  
  return (
    <div>
      <Header title="Notes" defaultValue="Today" tabs={[
        {title:"Today"},
        {title:"This week"},
        {title:"This month"},
      ]} />
      <div className="flex flex-wrap w-full">

        {
         notes.length===0 ? <center>
          <Loader2Icon className="animate-spin" />
         </center> :  notes.map((note:any, index:number)=><NoteCard key={index} color="amber" text={note.title} />)
        }
        
         
       
      </div>
      <Header title="Recent Folders" defaultValue="All" tabs={[
        {title:"All"},
        {title:"Recent"},
        {title:"Last modified"},
      ]} />
      <div className="bg-green">

      </div>
    </div>
  );
}
