import React, {useState, useEffect} from 'react'
import LayoutPage from '../layout/LayoutPage'
import Button from '../component/Button'
import axios from 'axios'

export const ListProduk = () => {
    const [produkList, setProdukList] = useState([])
    // console.log(localStorage.getItem('token'))

    const token = JSON.parse(localStorage.getItem('token'))
    const tokenOnly = token.token
    useEffect(() => {
        const fetchProduk = async () => {
            
            try {
                const response = await axios.get('https://ill-pink-newt-coat.cyclic.app/api/produk', {
                    headers: {
                        Authorization: `Bearer ${tokenOnly}`,
                    },
                })
                setProdukList(response.data)
                // console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchProduk()
    },[tokenOnly])

    const handleDelete = async (produkId) => {
        try {
            await axios.delete(`https://ill-pink-newt-coat.cyclic.app/api/produk/${produkId}`, {
                headers: {
                    Authorization: `Bearer ${tokenOnly}`,
                },
            })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    <LayoutPage>
        <h1 className="font-semibold text-4xl flex justify-center items-center dark:text-white">List Produk</h1>
        <div className="grid lg:grid-cols-4 lg:flex-row dekstop:flex-row sm:grid-cols-1 rounded-xl sm:h-auto mt-10">
            {produkList.map((produk) => (
            <div className='mr-3 ml-3 sm:h-96 sm:w-full sm:my-8 '>
                <div className='h-auto'>
                    <h3 className="text-3xl mb-2 dark:text-white font-normal text-center transition duration-300 ease-in-out hover:text-blue-500">
                        {produk.name}
                    </h3>
                    <p className="dark:text-white font-light text-center">
                        {produk.price}
                    </p>
                    <p className="dark:text-white font-light text-center">
                        {produk.quantity}
                    </p>
                    <div className="flex justify-center items-center">
                        <Button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto' type="button" >Edit</Button>
                        <Button className='mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto' type="button" onClick={()=> handleDelete(produk._id)}>Delete</Button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </LayoutPage>
    </>
  )
}


export default ListProduk