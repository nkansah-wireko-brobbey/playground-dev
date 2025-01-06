'use client'
import React from 'react'
import IncrementButton from './components/increment-btn'
import DecrementButton from './components/decrement-btn'
import { TextOutput } from './components/output'
import  HyperTextOutput  from './components/text-output'




const ReduxPlayround = () => {
  return (
    <>
    <div className='flex justify-center items-center h-full gap-5 mt-5'>

     <IncrementButton />
     <DecrementButton />
   
    </div>
    <div className='flex justify-center items-center h-full gap-5 mt-5'>
    <TextOutput />
    <HyperTextOutput />

    </div>
    </>
  )
}

export default ReduxPlayround