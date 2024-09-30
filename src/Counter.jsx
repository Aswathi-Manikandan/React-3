import React, { useState,useEffect } from 'react'

function Counter() {
    useEffect(()=>{
        console.log('mounting...'); 
        return()=>{
            console.log('Unmounting...');
            
        }
        
    },[])
    //by passing empty array the mounting and unmounting doesn't work when incrementing
    const [count,setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1> Here I am : {count}</h1>
    </div>
  )
}

export default Counter
