import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import image from '../assets/img/cateter.jpg';
import user from '../assets/img/user2.png';
function Home() {
    return (
        <div>
            <Navbar />
            <div className='container-fluid my-3'>
                <div className='row'>
                    <div className='col-md-2'>
                        <div className='px-3 mx-2 bg-white shadow-sm'>
                            <div className='d-flex justify-content-center'>
                                <img src={user} width="90" className="rounded-circle my-3 shadow-lg" alt="..." />
                            </div>
                            <div className='fw-bold text-center mb-4'>Username</div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Reports</a></li>
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Log Out</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='px-3 mx-2 bg-white shadow-sm order-wrapper'>
                            <div className='row'>
                                <div className='h5 fw-bold my-3'>Choose category</div>
                                <div className='row my-5'>
                                    <div className='col-3 my-2 text-center'>
                                        <img src={image} width='150' />
                                        <span className='product-title fw-bold'>Product title</span>
                                        <div>$90.00</div>
                                        <button className='btn bg-color-primary text-white rounded-pill product-title my-1'>Add Product</button>
                                    </div>
                                    <div className='col-3 my-2 text-center'>
                                        <img src={image} width='150' />
                                        <span className='product-title fw-bold'>Product title</span>
                                        <div>$90.00</div>
                                        <button className='btn bg-color-primary text-white rounded-pill product-title my-1'>Add Product</button>
                                    </div>
                                    <div className='col-3 my-2 text-center'>
                                        <img src={image} width='150' />
                                        <span className='product-title fw-bold'>Product title</span>
                                        <div>$90.00</div>
                                        <button className='btn bg-color-primary text-white rounded-pill product-title my-1'>Add Product</button>
                                    </div>
                                    <div className='col-3 my-2 text-center'>
                                        <img src={image} width='150' />
                                        <span className='product-title fw-bold'>Product title</span>
                                        <div>$90.00</div>
                                        <button className='btn bg-color-primary text-white rounded-pill product-title my-1'>Add Product</button>
                                    </div>
                                    <div className='col-3 my-2 text-center'>
                                        <img src={image} width='150' />
                                        <span className='product-title fw-bold'>Product title</span>
                                        <div>$90.00</div>
                                        <button className='btn bg-color-primary text-white rounded-pill product-title my-1'>Add Product</button>
                                    </div>
                                    <div className='col-3 my-2 text-center'>
                                        <img src={image} width='150' />
                                        <span className='product-title fw-bold'>Product title</span>
                                        <div>$90.00</div>
                                        <button className='btn bg-color-primary text-white rounded-pill product-title my-1'>Add Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='px-3 mx-2 bg-white shadow-sm order-wrapper'>
                            <div className='row '>
                                <p className='h5 fw-bold my-3'>New Order Bill</p>
                                <div className='p-3 my-1 shadow-lg'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <img src={image} width="120" alt="" className='my-2' />
                                        </div>
                                        <div className='col-md-8'>
                                            <div className='product-title'>Catéter periferico para venoclisis INTROCAN SAFETY PUR</div>
                                            <div className='d-flex my-3'>
                                                <div className='my-1 mx-4'>$90.00</div>
                                                <div>
                                                    <button className='btn bg-color-primary text-white btn-circle shadow-lg'>-</button> <span className='h5 mx-3'>1</span> <button className='btn bg-color-primary text-white btn-circle shadow-lg'>+</button>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-end mx-2'>
                                                <a href="#" className='text-danger remove-text'>Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-3 mx-2 my-3 bg-white shadow-sm'>
                            <div className='row'>
                                <div className='col-9 my-2 fw-bold mt-3'>Sub total</div>
                                <div className='col-3 my-2 fw-bold mt-3'>$90.00</div>
                                <div className='col-9 my-2 fw-bold'>IVA(16%)</div>
                                <div className='col-3 my-2 fw-bold'>$30.00</div>
                                <div className='w-100 border-dashed my-1' />
                                <div className='col-9 my-2 fw-bold'>TOTAL</div>
                                <div className='col-3 my-2 fw-bold text-color-success'>$120.00</div>
                                <p className='h5 fw-bold my-4'>Payment Method</p>
                                <div className='col-4'>
                                    <div className='card mb-3 rounded-3'>
                                        <i class="fa-solid fa-money-bill text-center text-secondary fs-2 my-2"></i>
                                        <span className='text-center product-title'>Cash</span>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='card mb-3 rounded-3'>
                                        <i class="fa-solid fa-credit-card text-center text-secondary fs-2 my-2"></i>
                                        <span className='text-center product-title'>Credit Card</span>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='card mb-3 rounded-3'>
                                        <i class="fa-solid fa-qrcode text-center text-secondary fs-2 my-2"></i>
                                        <span className='text-center product-title'>E-Wallet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;