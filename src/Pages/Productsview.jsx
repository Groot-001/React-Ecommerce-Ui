import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'
// useParams is a React Router hook that lets you access URL parameters inside a component. It is useful for dynamic routing, where parts of the URL change based on user interaction.

const Productsview = () => {
    let params = useParams()
    let pid = params.products_id
    // const Swal = require('sweetalert2')

    // For products
    const [product, setproduct] = useState({})

    // For cart buttons 
    const [quantity, setquantity] = useState(1)

    const decrease = () => {
        if (quantity > 1) {
            setquantity(quantity - 1)
        }
        else {
            Swal.fire({
                title: "Warning!",
                icon: "warning",
                text: " Minimum Quantity must be 1.",
                draggable: true,
                timer: 1000
            });
        }
    }

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${pid}`)
            .then(res => setproduct(res.data))
            .catch(() => console.log('Something went wrong '))
    }, [])

    // For Adding to Cart
    const addtocart = (id) => {

        // Fetching CartItem from localstorage if it exists else return an empty array 
        let cartItems = JSON.parse(localStorage.getItem('CartItem')) || []

        //Defining object Variables for Product Data
        let productData = {
            id: product.id,
            title: product.title,
            image: product.image,
            category: product.category,
            price: product.price,
            quantity: quantity
        }

        // Check whether the item already exists in cart or not
        let existingItem = cartItems.find(item => item.id === id)
        if (existingItem) {
            Swal.fire({
                title: "Error!",
                icon: "error",
                text: " Item Already exists in the Cart.",
                draggable: true,
                timer: 2000
            });
        }
        else {
            cartItems.push(productData)
            localStorage.setItem('CartItem', JSON.stringify(cartItems))
            Swal.fire({
                title: "Success!",
                icon: "success",
                text: " Item Added to the Cart.",
                draggable: true,
                timer: 2000
            });
        }

    }

    return (
        <>
            <div className='container my-5 rounded-4 p-2 bg-success-subtle'>
                <div className='d-md-flex justify-content-evenly p-4'>
                    <div className='col-md-4'>
                        <img src={product.image} alt="product" width="100%" height="100%" />
                    </div>

                    <div className='col-md-6'>
                        <p>
                            <a href="/"> Home </a> /
                            <a href="/products"> Products </a> /
                            <small className='text-secondary fw-bold'> {product.category}</small>
                        </p>

                        <h2 className='m-0'>{product.title}</h2>
                        <small className='text-secondary fw-bold'>{product.category}</small>

                        <p className='fw-bold mt-4'>Price : <span className='text-success'>{product.price}</span>
                        </p>

                        <p className='fw-bold mt-4'> Quantity : </p>

                        <div className='d-flex w-50'>
                            <button className='btn btn-secondary btn-sm' onClick={decrease}> - </button>
                            <input type="text" value={quantity} className='form-control w-25 text-center' readOnly />
                            <button className='btn btn-secondary btn-sm' onClick={() => setquantity(quantity + 1)}> + </button>
                        </div>

                        <button className='btn btn-warning mt-5 me-3' onClick={() => addtocart(product.id)}> Add to Cart</button>

                        <button className='btn btn-success mt-5'>Add to Wishlist</button>
                    </div>
                </div>

                <hr />
                <p className='fw-bold'> Description : <span className='fw-light text-secondary'>{product.description}</span></p>

            </div>

        </>
    )
}

export default Productsview