'use client'

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ButtonProps {
    Text: string
    Prefix?: any
    Suffix?: any
    ClickedSuffix?: any
    onClick?: () => void
    isfolder?: boolean
    folders?: any
}


export default function CustomButton(props: ButtonProps) {

    const [expand, setExpand] = useState(false)
    // useEffect(()=>{
    //     expand ? 
    // }, [expand])

    return (
        <div>
            {!props.isfolder ? <Button className="flex cursor-pointer bg-transparent hover:bg-gray-800 hover:text-white rounded-md text-gray-900 m-1 text-lg p-5">

                {props.Prefix}
                <span>
                    {props.Text}
                </span>
            </Button> : <div>
                <Button onClick={() => setExpand(!expand)} className="flex justify-between w-56 cursor-pointer bg-transparent hover:bg-gray-800 hover:text-white rounded-md text-gray-900 m-1 text-lg p-5">
                    <div className="flex items-center">
                    {props.Prefix}
                    <span className="ml-2">
                        {props.Text}
                    </span>

                    </div>
                    <div>
                        {expand ? props.ClickedSuffix : props.Suffix}
                    </div>

                </Button>
                {expand && <div className="pl-7">
                    {
                        props.folders?.map((folder:any) => <Button key={folder.text} className="flex cursor-pointer bg-transparent hover:bg-gray-800 hover:text-white rounded-md text-gray-900 m-1 text-lg p-5">

                            
                            <span>
                                {folder.text}
                            </span>
                        </Button>)
                    }
                </div>}
            </div>}
        </div>
    )
}


