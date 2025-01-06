'use client'
import { useDispatch } from 'react-redux'
import { increment } from '@/store/features/counterSlice'
import ShinyButton from "@/components/ui/shiny-button";


const IncrementButton = () => {
    const dispatch = useDispatch()
    console.log('increment button rendered')
    return (
        <ShinyButton className=""
            onClick={


                () => {
                    dispatch(increment())
                }
            }>

            Incre +
        </ShinyButton>
    )
}

export default IncrementButton