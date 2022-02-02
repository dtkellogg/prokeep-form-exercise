import React, { useState, useEffect, useRef } from 'react'
import { useToasts } from 'react-toast-notifications'
import axios from 'axios'
import Loader from "react-loader-spinner";
import Validate from './Validate'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const emailRef = useRef();
  const passwordRef = useRef();

  const { addToast } = useToasts()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true)
  
    const isValid = Validate(email, password, addToast)

    if(isValid) {
      const { data } = await axios.post(
        `https://reqres.in/api/users/2`,
        { email, password },
      );

      setEmail("")
      setPassword("")

      addToast(`Welcome back ${data.email}`, {
        appearance: "success",
        autoDismiss: true,
      })
    } else if(!email) {
      emailRef.current.focus()
    } else {
      passwordRef.current.focus()
    }

    setSubmitting(false)
  }

  useEffect(()=>{
    emailRef.current.focus();
  }, []);

  return (
    <form className="container__login" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="header__login">Welcome Back!</h1>
      <section className="container__inputs">
        <label className="label__email" htmlFor="input-email">Email:</label>
        <input className="input__email" name="email" type="email" id="input-email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} ref={emailRef}/>
        <label className="label__password" htmlFor="input-password">Password:</label>
        <input className="input__password" name="password" type="password" id="input-password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} ref={passwordRef}/>
        <a className="link__forgot-password">Forgot password?</a>
      </section>
      <button className="btn__login" type="submit" disabled={submitting}>
        {!submitting ? (
          "Login"
          ) : (
          <Loader
            type="TailSpin"
            color="white"
            height={25}
            width={30}
            className={"contact__loader"}
          />
        )}
      </button>
      <span className="to-register">Need an account? <a className="link__register">Register</a></span>
    </form>
  )
}