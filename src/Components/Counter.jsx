import React, { useState } from 'react'
import BreakTimer from './BreakTimer';
import Timer from './Timer';
import './Counter.css'

export const Counter = () => {
    const [isBreak, setIsBreak] = useState(false);
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div className='counter_container'>
        <div className="Logout_container">
        <button onClick={logout}>logout</button>
        </div>
       
         {isBreak ? (
            <BreakTimer setIsBreak={setIsBreak} />
          ) : (
            <Timer setIsBreak={setIsBreak} />
          )}
    </div>
  )
}
