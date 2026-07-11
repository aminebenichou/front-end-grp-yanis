'use client'

import { useEffect, useState } from "react";
import Header from "./components/header";
import NavBar from "./components/NavBar";
import NoteCard from "./components/NoteCard";
import axios from "axios";

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
      <div className="flex flex-wrap">

        {
          notes.map((note:any, index:number)=><NoteCard key={index} color="amber" text={note.title} />
        )
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
