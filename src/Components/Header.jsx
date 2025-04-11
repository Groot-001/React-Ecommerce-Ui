import React from 'react'
import { useLocation } from 'react-router-dom'
// useLocation is used to get query parameters where as useParams is used to get the content of query

const Header = () => {

    const location = useLocation();

    return (
        <>
            <header className="bg-dark-subtle">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="/images/logo.webp" alt="logo" width="50" height="" className='rounded-circle shadow' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav m-auto my-lg-0 navbar-nav-scroll">

                                <li className="nav-item">
                                    <a className={`${location.pathname == '/' ? 'active' : ''} nav-link`} aria-current="page" href="/">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className={`${location.pathname == '/products' ? 'active' : ''} nav-link`} href="/products">Products</a>
                                </li>

                                <li className="nav-item">
                                    <a className={`${location.pathname == '/cart' ? 'active' : ''} nav-link`} href="/cart">Cart</a>

                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>

                            </ul>

                            <div className="d-flex">
                                <a href="/register" className='btn btn-light btn-sm me-3'>Register</a>
                                <a href="/login" className='btn btn-dark btn-sm px-3'>Login</a>
                            </div>

                        </div>

                    </div>

                </nav>

            </header>

        </>
    )
}

export default Header
