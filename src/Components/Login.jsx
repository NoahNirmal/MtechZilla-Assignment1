import React, { useEffect, useState } from 'react'
import { auth,provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { Counter } from './Counter'
import './Login.css'



export const Login = () => {
  const [value, setValue] = useState("")


  const Signin=()=>{
    signInWithPopup(auth,provider)
    .then((cred)=>{
      // console.log(cred.user.email) 
      setValue(cred.user.email)
      localStorage.setItem("email",cred.user.email)
    }).catch((err)=>{
      console.log(err)
    })

  }

  useEffect(() => {
  setValue(localStorage.getItem('email'))
   
  }, [])
  

  return (
    <>
      {value ?(<Counter />):(  <div className='login_container'>
      <h3>Pomodro timer app</h3>

       <div id="gSignInWrapper">
    <span class="label">Sign in with :</span>
    <div id="customBtn" class="customGPlusSignIn" onClick={Signin}>
      <span class="icon"></span>
      <span class="buttonText">Google</span>
    </div>
  </div>
       
      </div>) }
    </>
  
    
     
  )
}
