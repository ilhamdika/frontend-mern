import React, {useState, useEffect} from 'react'
import LayoutPage from '../layout/LayoutPage'
import Button from '../component/Button'
import axios from 'axios'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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
            const result = await Swal.fire({
                title: 'Apakah Anda yakin?',
                text: 'Produk akan dihapus secara permanen!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Ya, Hapus!',
                cancelButtonText: 'Batal',
              });

            if (result.isConfirmed) {
                await axios.delete(`https://ill-pink-newt-coat.cyclic.app/api/produk/${produkId}`, {
                    headers: {
                        Authorization: `Bearer ${tokenOnly}`,
                    },
                })
                window.location.reload()
            } else {
                Swal.fire('Batal', 'Produk tidak dihapus', 'error');
            }
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
            <li key={produk._id}>
                <div className='mr-3 ml-3 lg:h-28 sm:h-96 sm:w-full sm:my-8 '>
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
                            <Link to={`/edit-produk/${produk._id}`}>
                                <Button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1' type="button">
                                    <FaRegEdit />
                                </Button>
                            </Link>
                            <Button className='mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1' type="button" onClick={()=> handleDelete(produk._id)}>
                                <MdDeleteOutline />
                            </Button>
                        </div>
                    </div>
                </div>
            </li>
            ))}
        </div>
    </LayoutPage>
    </>
  )
}


export default ListProduk