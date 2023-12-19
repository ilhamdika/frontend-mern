import React, { useState } from 'react'
import Button from '../component/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://ill-pink-newt-coat.cyclic.app/api/login', {
                email: email,
                password: password
            })

            const token = await response.data
            // console.log(token)
            // localStorage.setItem('token', token)
            localStorage.setItem('token', JSON.stringify(token))
            history('/list-produk')
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-4 rounded-md">
        <h1 className='text-2xl text-bold my-5'>Login</h1>
      <form>
        <div>
            <label>
            Email:
            <input
            className='border-2 border-gray-300 p-2 w-full rounded-lg'
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            </label>
        </div>
        <div>
            <label>
            Password:
            <input
            className='border-2 border-gray-300 p-2 w-full rounded-lg'
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            </label>
        </div>
        <div className="flex justify-between items-center">
            <a href="/register" className="text-blue-500">Register</a>
            <Button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto' type="button" onClick={handleLogin} >Login</Button>
            {/* <a href='/list-produk'>list</a> */}
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
