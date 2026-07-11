import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'


interface headerProps {
    title: string
    tabs?: any[]
    defaultValue?: string
}

const Header = (props: headerProps) => {
    return (
        <div className='flex justify-between m-10 w-full'>
            <p className='text-2xl font-bold'>
                {props.title}
            </p>

            <Tabs defaultValue={props.defaultValue} className="w-100">
                <TabsList className='bg-gray-300 py-1'>
                    {

                        props.tabs?.map((tab:any, index:number) => <TabsTrigger key={index} className='mx-2 px-5' value={tab.title}>{tab.title}</TabsTrigger>)
                    }
                </TabsList>
                {/* <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent> */}
            </Tabs>
        </div>
    )
}

export default Header