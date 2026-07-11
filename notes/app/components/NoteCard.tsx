'use client'

import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const NoteCard = (props: { color?: string, text: string }) => {
  const { color, text } = props
  const colorMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    amber: "bg-amber-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    slate: "bg-slate-500",
  } as const;
  const [bgColor, setBgColor] = useState(color)
  return (
    <div className={cn(`flex flex-col  h-56 w-52 m-5 rounded-md hover:shadow-2xl p-3`, color ? colorMap[color as keyof typeof colorMap] : "bg-amber-500")} >
      <p className='text-white text-lg font-semibold'>
        {text}
      </p>
    </div>
  )
}

export default NoteCard