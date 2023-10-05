import React from 'react';
import DefaultLayout from '../components/DefaultLayout';

const Subscription = () => {
  return (
    <DefaultLayout>
    <div className="container">
        {/* <header>
            <div className='d-flex align-items-center ms-auto'>
                <a href='#' className='navbar-brand fs-4'>PedalShare</a>
                <nav>
                    <strong><a href=''>Pricing</a></strong>
                    <strong><a href=''>Contact</a></strong>
                </nav>
            </div>
            <div className='text-center w-75 my-4 mx-auto'>
                <h1>Pricing</h1>
                <p className='fs-5 text-muted'>
                    Quickly
                </p>
            </div>
        </header> */}
        <main>
            <div className='row row-cols-1 row-cols-md-3'>
                <div className='col'>
                    <div className='card text-center'>
                        <div className='card-header'>
                            <h4 className='fw-normal'>Monthly</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title'>
                                Rs400 <small className='text-muted fw-light'>/-</small>
                            </h1>
                            <ul>
                                <li></li>
                            </ul>
                            <ul>
                                <button className='btn btn-lg w-100 btn-outline-success'>Pay Rs1000</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card text-center'>
                        <div className='card-header'>
                            <h4 className='fw-normal'>Quarterly</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title'>
                                Rs700 <small className='text-muted fw-light'>/-</small>
                            </h1>
                            <ul>
                                <li></li>
                            </ul>
                            <ul>
                                <button className='btn btn-lg btn-success w-100 btn-outline-success'>Pay Rs1000</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card text-center'>
                        <div className='card-header'>
                            <h4 className='fw-normal'>Yearly</h4>
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title'>
                                Rs2000 <small className='text-muted fw-light'>/-</small>
                            </h1>
                            <ul>
                                <li></li>
                            </ul>
                            <ul>
                                <button className='btn btn-lg btn-success w-100 btn-outline-success'>Pay Rs1000</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      
    </div>
    </DefaultLayout>
  );
};

export default Subscription;
