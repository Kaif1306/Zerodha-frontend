import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <img src='/images/largestBroker.svg' alt="image"/>
                </div>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <h1>Largest Stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in : </p>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct Mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='/images/pressLogos.png' alt="image" style={{width: "80%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;