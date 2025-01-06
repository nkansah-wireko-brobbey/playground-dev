import HyperText from "@/components/ui/hyper-text";import { Rootstate } from '@/store/store';
import React from 'react'
import { useSelector } from 'react-redux';
import { StandaloneComponent } from "./standalone";

const TextOutput = () => {
    console.log('HyperText Output rendered')
    const name = useSelector((state: Rootstate)=> state.counter.name)
    return (
      <div className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
        <HyperText>{name}</HyperText>
        <StandaloneComponent />
      </div>
    );
}

export default TextOutput