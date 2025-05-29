import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row p-3">
        <div className="col-4">
          <img
            src="/images/zerodhaFundHouse.png"
            style={{ width: "65%" }}
            alt="image"
          ></img>
          <p className="text-muted mt-3 p-2" style={{ lineHeight: "2" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img src="/images/sensibullLogo.svg" alt="image" style={{ width: "75%" }}></img>
          <p className="text-muted mt-3 p-2" style={{ lineHeight: "2" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4">
          <img src="/images/streakLogo.png" alt="image" style={{ width: "50%" }}></img>
          <p className="text-muted mt-3 p-2" style={{ lineHeight: "2" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
      </div>

      <div className="row mt-5 p-3">
        <div className="col-4">
          <img src="/images/goldenpiLogo.png" alt="image"></img>
          <p className="text-muted mt-3 p-2" style={{ lineHeight: "2" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4">
          <img src="/images/smallcaseLogo.png" alt="image"></img>
          <p className="text-muted mt-3 p-2" style={{ lineHeight: "2" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img src="/images/dittoLogo.png" alt="image" style={{ width: "30%" }}></img>
          <p className="text-muted mt-3 p-2" style={{ lineHeight: "2" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
