'use client'

import Header from "./components/header";
import NavBar from "./components/NavBar";
import NoteCard from "./components/NoteCard";

export default function Home() {

 

  return (
    <div>
      <Header title="Notes" defaultValue="Today" tabs={[
        {title:"Today"},
        {title:"This week"},
        {title:"This month"},
      ]} />
      <div className="flex flex-wrap">
        <NoteCard color="amber" text="
      Lorem ipsum dolor sit amet consectetur,  veritatis aliquam qui! Porro obcaecati quaerat aliquid veniam?" />
        
        <NoteCard color="green" text="
      Lorem ipsum dolor sit amet consectetur,  veritatis aliquam qui! Porro obcaecati quaerat aliquid veniam?" />
        
        <NoteCard color="purple" text="
      Lorem ipsum dolor sit amet consectetur,  veritatis aliquam qui! Porro obcaecati quaerat aliquid veniam?" />
        
        <NoteCard color="blue" text="
      Lorem ipsum dolor sit amet consectetur,  veritatis aliquam qui! Porro obcaecati quaerat aliquid veniam?" />
        
       
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
