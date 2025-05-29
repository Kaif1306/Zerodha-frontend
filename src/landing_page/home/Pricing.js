import React from 'react';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h2 className='mb-3'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#'>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-8 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-2 border mb-3'>
                            <h2 className='mb-2'><i class="fa-solid fa-indian-rupee-sign"></i>0</h2>
                            <p>Free equity and <br/>direct mutual funds</p>
                        </div>
                        <div className='col p-2 border mb-3'>
                            <h2 className='mb-2'><i class="fa-solid fa-indian-rupee-sign"></i>20</h2>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;