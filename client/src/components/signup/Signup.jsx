import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './signup.module.css'
import img from '../../assets/womaneating.jpg'
import { register } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'
import Navbar from '../navbar/Navbar'

const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = async(e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:4000/auth/register`, {
        headers: {
          "Content-Type": 'application/json'
        },
        method: "POST",
        body: JSON.stringify({username, email, password})
      })

      const data = await res.json()
      dispatch(register(data))
      navigate('/')
      
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }


  return (
    <div className={classes.signUpContainer}>
<Navbar/>
      <div className={classes.signUpWrapper}>
        <div className={classes.signUpRightSide}>
          <h2 className={classes.title}>Sign Up</h2>
          <form onSubmit={handleSignup} className={classes.signUpForm}>
            <input type="text" placeholder="Type username" onChange={(e) => setUsername(e.target.value)} required/>
            <input type="email" placeholder="Type email" onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password" placeholder="Type password"  onChange={(e) => setPassword(e.target.value)} required/>
            <button className={classes.submitBtn}>Sign Up</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </form>
          {
            error && (
              <div className={classes.errorMessage}>
                 Wrong credentials! Try different ones.
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Signup