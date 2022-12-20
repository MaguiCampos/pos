import React from 'react';
import Navbar from '../components/Navbar/Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid my-3'>
                <div className='row'>
                    <div className='col-md-2'>
                    <div className='px-3 mx-2 bg-white shadow-sm'>
                            <div className='h5 fw-bold bg-white'>Menu</div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                    <div className='px-3 mx-2 bg-white shadow-sm'>
                            <div className='h5 fw-bold bg-white'>Choose category</div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='px-3 mx-2 bg-white shadow-sm'>
                            <div className='h5 fw-bold bg-white'>Checkout</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;