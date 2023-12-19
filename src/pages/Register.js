import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '../component/Button'
import Swal from 'sweetalert2'

export const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [jenis_kelamin, set_jenis_kelamin] = useState('')
    const history = useNavigate()

    const handleRegister = async () => {
        try{
            const response = await axios.post('https://ill-pink-newt-coat.cyclic.app/api/register', {
                name,
                email,
                password,
                jenis_kelamin
            })
            // console.log(response)
            Swal.fire({
                icon: 'success',
                title: 'Register Berhasil',
                text: 'Silakan login',
              });
            history('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-4 rounded-md">
        <h1 className='text-2xl text-bold my-5'>Register</h1>
      <form>
        <div className='mt-1'>
            <label>
            Name:
            <input
                className='border-2 border-gray-300 p-2 w-full rounded-lg'
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            </label>
        </div>
        <div className='mt-1'>
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
        <div className='mt-1'>
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
        <div className='mt-1'>
            <label>
            Jenis Kelamin:
            <input
                className='border-2 border-gray-300 p-2 w-full rounded-lg'
                type="text"
                onChange={(e) => set_jenis_kelamin(e.target.value)}
                value={jenis_kelamin}
            />
            </label>
        </div>
        <div className="flex justify-between items-center">
            <a href="/" className="text-blue-500">Sudah punya akun?</a>
            <Button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto' type="button" onClick={handleRegister}>Register</Button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register