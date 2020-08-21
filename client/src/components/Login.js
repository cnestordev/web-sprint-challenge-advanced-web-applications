import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = () => {

  const history = useHistory()

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const [isFetching, setIsFetching] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsFetching(true)
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        setIsFetching(false)
        history.push('/bubbles')
      })
      .catch(err => {
        setIsFetching(false)
        console.log(err)
      })
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="username" placeholder="username" />
        <input onChange={handleChange} type="password" name="password" placeholder="password" />
        <button>{isFetching ? "fetching..." : "Login"}</button>
      </form>
    </>
  );
};

export default Login;
