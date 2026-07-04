

import { Button } from "@/components/ui/button";

interface ButtonProps {
    Text: string
    Prefix?: any 
    onClick?: ()=> void
}   


export default function CustomButton(props:ButtonProps) {
    return (
        <div>
            <Button className="flex cursor-pointer bg-transparent hover:bg-gray-800 hover:text-white rounded-md text-gray-900 m-1 text-lg p-5">

                {props.Prefix}
                <span>
                    {props.Text}
                </span>
            </Button>
        </div>
    )
}


