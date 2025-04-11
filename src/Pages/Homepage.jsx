import React, { useState } from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import axios from 'axios'

const Homepage = () => {

    const [products, setproducts] = useState([])

    axios.get('https://fakestoreapi.com/products')
        .then(res => setproducts(res.data))
        .catch(error => console.log(error))

    return (
        <>

            <Banner />

            <div className='container my-5' id='products'>
                <h2 className='text-center bg-success-subtle text-success'>Trending Products </h2>
                <div className='d-flex justify-content-evenly flex-wrap'>
                    {
                        products.slice(0, 4).map((item) => {
                            return <Card data={item} />
                            // When we use an array function methods and use { } then we need to return with a return statement 
                        })

                        // products.map((item) => {
                        //     return <Card />
                        //     // When we use an array function methods and use ( ) then we dont to return with a return statement 
                        // })
                    }
                </div>

            </div>


        </>
    )
}

export default Homepage
