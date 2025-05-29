import React from 'react';
function Education() {
    return (
         <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 mt-2'>
                    <img src='/images/education.svg' alt='Education' style={{width:"70%"}}></img>
                </div>
                <div className='col-lg-6 col-sm-12 mt-5'>
                    <h2 className='mb-4 fs-2'>Free and open market education</h2>
                    <p className='mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' style={{textDecoration:"none"}}>Varsity<i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mb-4 mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

         </div>
         );
}

export default Education;