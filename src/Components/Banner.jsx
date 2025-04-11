import React from 'react'

const Banner = () => {
    return (
        <>

            <div className='carousel slide' id='carouselExampleAutoplaying' data-bs-ride='carousel'>
                <div className='carousel-innner'>
                    <div className='carousel-item active'>
                        <img src="/images/b1.jpeg" alt="banner" className='d-block w-100' />
                    </div>

                    <div className='carousel-item'>
                        <img src="/images/b2.jpeg" alt="banner" className='d-block w-100' />
                    </div>

                    <div className='carousel-item'>
                        <img src="/images/b3.jpeg" alt="banner" className='d-block w-100' />
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>

        </>
    )
}

export default Banner
