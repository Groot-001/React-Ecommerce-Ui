import React from "react";

const Card = (props) => {
    return (

        <>

            <div className="card m-auto my-4 rounded-3 shadow">
                <img src={props.data.image} alt="products" className="card-img-top" />
                <div className="card-body p-1 text-center">
                    <h5 className="card-title" title={props.data.title}>{props.data.title.slice(0, 15)}..</h5>
                    <p className="card-text">Price : <span className="text-success">Rs.{props.data.price}</span></p>
                    <a href={`productsview/${props.data.id}`} className="btn bg-info-subtle text-success me-3">View</a>
                    <a href="#" className="btn bg-warning-subtle text-warning">Cart</a>
                </div>
            </div>



        </>

    )

}

export default Card