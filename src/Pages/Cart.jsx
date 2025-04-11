import React, { useEffect, useState } from "react";

const Cart = () => {

    const [product, setproduct] = useState([])

    useEffect(() => {
        let cartItem = JSON.parse(localStorage.getItem('CartItem')) || [] // Key
        if (cartItem) {
            setproduct(cartItem)
        }
    }, [])

    const deleteItem = (id) => {
        let cartItem = JSON.parse(localStorage.getItem('CartItem'))
        let updatedCart = cartItem.filter(item => item.id !== id)
        localStorage.setItem('CartItem', JSON.stringify(updatedCart))
        setproduct(updatedCart)
    }


    return (
        <>
            {
                product.length < 1 ? (
                    <div className="d-flex my-5 justify-content-center align-items-center">
                        <h2 className="display-1 text-center"> Your Cart is Empty </h2>
                        <img src="/images/cart.jpeg" alt="" width={200} />
                    </div>
                ) : (
                    <div>
                        <h2 className="text-center text-warning bg-warning-subtle mt-4 mb-3 px-5 mx-5"> Cart Items </h2>
                        <div className="d-md-flex justify-content-evenly mb-5 flex-wrap">
                            <div className="col-md-7">
                                <table className="table table-rounded table-hover table-striped ">
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            product.map((item, i) => (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{item.title}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td><img src={item.image} alt="" width={50} height={50} /></td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm" onClick={() => deleteItem(item.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>

                                </table>
                            </div>
                            <div className="col-md-3">
                                <section className="col-md-12 shadow p-3">
                                    <h3 className="text-center"> Cart Summart</h3>

                                    <p className="fw-bold"> Total Units :
                                        <span className="text-success"> {
                                            product.reduce((acc, item) => {
                                                return acc + item.quantity
                                            }, 0)
                                        } Units </span>
                                    </p>

                                    <p className="fw-bold"> Total Price :
                                        Rs . <span className="text-success"> {
                                            product.reduce((acc, item) => {
                                                return acc + (item.price * item.quantity)
                                            }, 0)
                                        }
                                        </span>
                                    </p>

                                    <hr />
                                    <button className="btn btn-success">Checkout</button>
                                </section>
                            </div>
                        </div>
                    </div>
                )
            }


        </>
    )
}

export default Cart