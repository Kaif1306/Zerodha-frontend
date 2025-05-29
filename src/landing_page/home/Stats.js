import React from 'react';
function Stats() {
    return ( 
        <div className='container p-2'>
            <div className='row p-2'>
                <div className='col-lg-5 col-sm-12 p-2'>
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p className='mb-5'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h4>No spam or gimmicks</h4>
                    <p className='mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4>The Zerodha universe</h4>
                    <p className='mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4>Do better with money</h4>
                    <p className='mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-lg-7 col-sm-12'>
                    <img src='/images/ecosystem.png' alt="image" style={{width:"100%"}}></img>
                    <div className='text-center'>
                        <a href='#' className='mx-5'>Explore Our Products<i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='#'>Try Kite demo<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Stats;