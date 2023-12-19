import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import LayoutPage from '../layout/LayoutPage';
import axios from 'axios';
import Button from '../component/Button'
import { IoIosArrowRoundBack } from "react-icons/io";

export const AddProduk = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const history = useNavigate()

    const token = JSON.parse(localStorage.getItem('token'))
    const tokenOnly = token.token

    const handleAddProduk = async () => {
        try{
            const response = await axios.post('https://ill-pink-newt-coat.cyclic.app/api/produk', {
                name,
                price,
                quantity
            },
            {
                headers: {
                    Authorization: `Bearer ${tokenOnly}`,
                },
            })
            // console.log(response)
            history('/list-produk')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <LayoutPage>
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-4 rounded-md">
        <a href='/list-produk'>
            <IoIosArrowRoundBack className='text-2xl' />
        </a>
        <h1 className='text-2xl text-bold my-5'>Add</h1>
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
            Price:
            <input
                className='border-2 border-gray-300 p-2 w-full rounded-lg'
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
            </label>
        </div>
        <div className='mt-1'>
            <label>
            Quantity:
            <input
                className='border-2 border-gray-300 p-2 w-full rounded-lg'
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
            />
            </label>
        </div>
        <div className="flex justify-between items-center">
            <Button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto' type="button" onClick={handleAddProduk}>Add Produk</Button>
        </div>
      </form>
      </div>
    </div>
    </LayoutPage>
  )
}

export default AddProduk