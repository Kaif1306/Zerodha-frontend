import React from "react";
function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center mt-5 mb-5 p-5 text-muted">
        <h1 className="mt-5">Zerodha Products</h1>
        <h4 className="mt-3">Sleek,modern and intuitive trading platforms</h4>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
