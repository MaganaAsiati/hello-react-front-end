import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGreeting } from '../redux/Greetings'


export default function Greetings() {
  const dispatch = useDispatch()
  const greetings = useSelector((state) => state.greetings)
  const handleClick = () => {dispatch(getGreeting())}
  return (
    <div> 
      <p> My Greetings: {greetings.message}</p>
      <button onClick={handleClick}>Get Greetings</button>
    </div>
  )
}

