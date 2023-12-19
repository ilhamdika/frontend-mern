import React from 'react'
import Button from '../component/Button'

export const AddProduk = () => {
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
            />
            </label>
        </div>
        <div className='mt-1'>
            <label>
            Email:
            <input
                className='border-2 border-gray-300 p-2 w-full rounded-lg'
                type="text"
            />
            </label>
        </div>
        <div className='mt-1'>
            <label>
            Password:
            <input
                className='border-2 border-gray-300 p-2 w-full rounded-lg'
                type="password"
            />
            </label>
        </div>
        <div className='mt-1'>
            <label>
            Jenis Kelamin:
            <input
                className='border-2 border-gray-300 p-2 w-full rounded-lg'
                type="text"
            />
            </label>
        </div>
        <div className="flex justify-between items-center">
            <a href="/" className="text-blue-500">Sudah punya akun?</a>
            <Button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto' type="button">Register</Button>
        </div>
      </form>
      </div>
    </div>
  )
}
