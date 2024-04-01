import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

import React from 'react'

const page = () => {
  return (
    <body className="w-full">
        <div className="grid w-full grid-cols-4">
          <div className="flex w-full h-full col-span-1">
            <div className="font-petrona italic fixed top-0 left-0 p-8 text-5xl">SummarAI</div>
            <div className='w-full ml-8 flex flex-col mt-32 space-y-8' style={{ width: '80%' }}>
              <div className='flex flex-col gap-y-4'>
                <p className='font-bold mb-2 text-2xl'>User Profile</p> 
                <Input className="bg-yellow-200" placeholder="Full Name" />
                <Input className="bg-yellow-200" placeholder="Email" />
              </div>
              <div className='flex flex-col gap-y-4'>
                <p className='font-bold mb-2 text-2xl'>Password and Authentication</p>
                <Input className='rounded-lg bg-yellow-200 font-semibold py-2 pl-4' placeholder="Old Password" />
                <Input className='rounded-lg bg-yellow-200 font-semibold py-2 pl-4' placeholder="New Password" />
              </div>
              <div className='flex flex-col gap-y-4'>
                <p className='font-bold mb-2 text-2xl'>Data Privacy</p>
                <div className='flex-row space-x-2'> 
                  <Checkbox className= "rounded b-2 bg-yellow-200 border-[#888888]" id="feedback" />
                  <label htmlFor="feedback" className="text-black"> Send my data as feedback for user experience improvement</label>
                </div>
                <div className='flex-row space-x-2'> 
                  <Checkbox className= "rounded b-2 bg-yellow-200 border-[#888888]" id="feedback" />
                  <label htmlFor="feedback" className="text-black"> Send me updates for followed topics</label>
                </div>
                <div className='flex-row space-x-2'> 
                  <Checkbox className= "rounded b-2 bg-yellow-200 border-[#888888]" id="feedback" />
                  <label htmlFor="feedback" className="text-black"> Save my history</label>
                </div>
              </div>
            </div>
            <a href="../" className="fixed bottom-0 left-0 p-4">
              <div className="fixed top-0 right-0 p-8">
                <Button>X</Button>
              </div>
            </a>
          </div>
        </div>
      </body>
  );
}

export default page
