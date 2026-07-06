import { cn } from '@/lib/utils'
import React from 'react'

const NoteCard = (props:{color?:string, text:string}) => {
    const {color, text} = props
  return (
    <div className={cn(`flex flex-col  h-56 w-52 m-5 rounded-md hover:shadow-2xl p-3`, !color ? `bg-amber-500` : `bg-${color}-500`)} >
        <p className='text-white text-lg font-semibold'>
            {text}    
        </p>
    </div>
  )
}

export default NoteCard