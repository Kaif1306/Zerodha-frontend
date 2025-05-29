import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-12 p-5">
          <img src={imageURL} alt="image" style={{width:"85%"}}></img>
        </div>
        <div className="col-lg-4 col-sm-12 p-3 mt-5 mb-5">
          <h1 className="mb-4 text-muted">{productName}</h1>
          <p style={{lineHeight:"2"}} className="text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px", textDecoration:"none" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3" >
            <a href={googlePlay}>
              <img src="/images/googlePlayBadge.svg" alt="image"></img>
            </a>
            <a href={appStore} className="mx-4">
              <img src="/images/appStoreBadge.svg" alt="image"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
