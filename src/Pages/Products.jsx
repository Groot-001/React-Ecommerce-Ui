import axios from 'axios';
import React, { useState } from 'react';
import Card from '../Components/Card';


const Products = () => {

    const [products, setproducts] = useState([])

    axios.get('https://fakestoreapi.com/products')
        .then(res => setproducts(res.data))
        .catch(error => console.log(error))

    return (
        <>
            <div className='d-flex justify-content-evenly flex-wrap' id='products'>
                {
                    products.map((item) => (
                        <Card data={item} />
                    ))
                }
            </div>

        </>
    )

}

export default Products