import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row mt-4 mb-5">
        <div className="col-lg-4 col-sm-12 p-5">
          <h1 className="text-muted mb-3 mt-5">{productName}</h1>
          <p className="text-muted" style={{ lineHeight: "2" }}>
            {productDescription}
          </p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6 col-sm-12 mt-5">
          <img src={imageURL} alt="image" style={{ width: "95%" }}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
