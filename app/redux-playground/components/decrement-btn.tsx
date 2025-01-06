'use client'
import { useDispatch } from 'react-redux'
import { decrement } from '@/store/features/counterSlice'
import ShinyButton from '@/components/ui/shiny-button'

const DecrementButton = () => {
    const dispatch = useDispatch()
    console.log('decrement button rendered')

    return (
      <ShinyButton className=""
      onClick={


          () => {
              dispatch(decrement())
          }
      }>

      Decre -
  </ShinyButton>
    )
}

export default DecrementButton