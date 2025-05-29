import React from "react";
function Hero() {
  return (
    <div className="container-fluid support">
      <div className="" id="supportWrapper">
        <h3 className="mt-5 fs-4">Support Portal</h3>
        <a href="" className="mt-3">
          Track tickets
        </a>
      </div>
      <div className="row p-5">
        <div className="col-lg-7 col-sm-12 p-5 mb-5">
          <h3 className="mb-4 fs-4">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            type="text"
            class="form-control"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
          ></input>
          <br></br>
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <br></br>
          <a href="">Kite user manuals</a>
        </div>
        <div className="col-lg-5 col-sm-12 p-5 mb-5">
          <h2 className="fs-4">Featured</h2>
          <ol type="1">
            <a href="">
              <li>Scheduled maintenance downtime for Coin</li>
            </a>
            <a href="">
              <li>BSE StAR mutual fund platform downtime</li>
            </a>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
