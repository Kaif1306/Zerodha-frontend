import React from 'react';
function Team() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='text-center text-muted mb-5 p-5'>
                    <h1>People</h1>
                </div>
                <div className='col-lg-6 col-sm-12 p-4 text-center'>
                    <img src='/images/nithinKamath.jpg' alt="image" style={{borderRadius:"50%" , width:"65%"}}></img>
                    <h4 className='mt-4 mb-3'>Nithin Kamath</h4>
                    <h5>Founder, CEO</h5>
                </div>
                <div className='col-lg-6 col-sm-12 p-4 text-muted' style={{lineHeight:"2", fontSize:"1rem"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> / <a href='' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='' style={{textDecoration:"none"}}>Twitter</a></p>
                </div> 
            </div>
        </div>
     );
}

export default Team;