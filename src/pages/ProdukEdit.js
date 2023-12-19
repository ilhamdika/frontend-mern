import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../component/Button'
import { IoIosArrowRoundBack } from "react-icons/io";
import LayoutPage from '../layout/LayoutPage';


export const ProdukEdit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const token = JSON.parse(localStorage.getItem('token'))
    const tokenOnly = token.token

    const handleEditProduk = async () => {
        try{
            const response = await axios.put(`https://ill-pink-newt-coat.cyclic.app/api/produk/${id}`, {
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
            navigate('/list-produk')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchProduk = async () => {
            try {
                const response = await axios.get(`https://ill-pink-newt-coat.cyclic.app/api/produk/${id}`, {
                    headers: {
                        Authorization: `Bearer ${tokenOnly}`,
                    },
                })
                setName(response.data.name)
                setPrice(response.data.price)
                setQuantity(response.data.quantity)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduk()
    }, [id, tokenOnly])




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
            <Button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto' type="button" onClick={handleEditProduk}>Add Produk</Button>
        </div>
      </form>
      </div>
    </div>
    </LayoutPage>
  )
}


export default ProdukEdit