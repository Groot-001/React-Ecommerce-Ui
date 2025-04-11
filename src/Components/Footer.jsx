import React from 'react'

const Footer = () => {
    return (
        <>

            <footer className='bg-success-subtle px-5 py-2'>
                <div className='d-flex justify-content-between align-item-center'>
                    <p className='text-secondary'>Copyright @ 2025</p>

                    <p>
                        <a href="#" className='text-dark border border-2 border-dark-subtle px-2 py-1 rounded-2'><i className='bi bi-facebook'></i></a>

                        <a href="#" className='text-dark border border-2 border-dark-subtle px-2 py-1 rounded-2 mx-1'><i className='bi bi-instagram'></i></a>

                        <a href="#" className='text-dark border border-2 border-dark-subtle px-2 py-1 rounded-2'><i className='bi bi-twitter'></i></a>
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer
