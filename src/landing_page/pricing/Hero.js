import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center mb-5 p-5">
        <h1 className="mt-5">Charges</h1>
        <h4 className="mt-3 text-muted">List of all charges and taxes</h4>
      </div>
      <div className="row text-muted text-center p-3 mt-5">
        <div className="col-lg-4 col-sm-12 mt-5">
          <img src="/images/pricingEquity.svg" alt="image" style={{width:"80%"}}></img>
          <h3>Free equity delivery</h3>
          <p style={{lineHeight:"2"}}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5">
          <img src="/images/other-trades.svg" alt="image" style={{width:"80%"}}></img>
          <h3>Intraday and F&O trades</h3>
          <p style={{lineHeight:"2"}}>
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades..
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5">
          <img src="/images/pricingMF.svg" alt="image" style={{width:"80%"}}></img>
          <h3>Free direct MF</h3>
          <p style={{lineHeight:"2"}}>
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
