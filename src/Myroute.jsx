import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Hooks/Counter'
import Layout from './Pages/Layout'
import Homepage from './Pages/Homepage'
import Products from './Pages/Products'
import Productsview from './Pages/Productsview'
import Cart from './Pages/Cart'
import Register from './Pages/Register'

const Myroute = () => {
    return (
        <>
            <BrowserRouter>

                <Routes>

                    <Route path='/' element={<Layout />} >
                        <Route index element={<Homepage />} />
                        {/* index is used inside of a parent node so that it can be load by default and uses the same path as of parent */}

                        <Route path='/products' element={<Products />} />
                        <Route path='/productsview/:products_id' element={<Productsview />} />

                        <Route path='/cart' element={<Cart />} />

                        <Route path='/register' element={<Register />} />

                    </Route>


                    <Route path='/counter' element={<Counter />} />

                </Routes>

            </BrowserRouter >

        </  >
    )
}

export default Myroute
