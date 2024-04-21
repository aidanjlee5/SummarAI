import {Toggle} from '@/components/ui/toggle'
import {Input} from '@/components/ui/input'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


import React from 'react'

const page = () => {
  return (
    <div>
        
        <img src='./../SummarAILogo.svg' alt='SummarAI Logo' className='object-contain h-10 w-25 mt-8 ml-6' />
        <div className='flex justify-center relative'>
            <Input type='Search' placeholder='Add at least 3 topics...' className= 'relative justify-center border-2 border-yellow-400 mt-32 w-80 text-black' />
            {/*<FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-50 left-50 mt-3 mr-2 size-6" />*/}
        </div>
        <Toggle aria-label="Toggle Italic">
            <p className='text-black'> Hi</p>
        </Toggle>
    </div>
  )
}

export default page
