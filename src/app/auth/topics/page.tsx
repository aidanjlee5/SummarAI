import {Toggle} from '@/components/ui/toggle'
import {Input} from '@/components/ui/input'

import React from 'react'

const page = () => {
  return (
    <div>
        
        <img src='./../SummarAILogo.svg' alt='SummarAI Logo' className='object-contain h-10 w-25 mt-8 ml-6' />
        <Input type='Search' placeholder='Add at least 3 topics...' className='bg-yellow-200 border-yellow-400 mt-32 w-full mx-30' />
        <Toggle aria-label="Toggle Italic">
            <p className='text-black'> Hi</p>
        </Toggle>
    </div>
  )
}

export default page
