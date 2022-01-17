import React from "react";

function Sliders() {
  return (
    <>
    
      <div
        id="carouselExampleControls"
        className="carousel slide mt-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ objectFit: "cover" }}
              src="https://images.indianexpress.com/2020/10/Untitled-design-2020-10-15T171350.830.jpg
              "
              className="d-block w-100"
              alt="image 1"
              height="300px"
             style={{minWidth:"100%"}}
            />
          </div>
          {/* <div className="carousel-item">
            <img
             style={{ objectFit: "cover" }}
              src="https://cdn.flipshope.com/blog/wp-content/uploads/…12/Flipkart-New-Year-Sale-2021-Offers-800x450.jpg"
              className="d-block w-100"
              alt="Image 2"
              height="500px"
             style={{minWidth:"100%"}}
            />
          </div> */}
          <div className="carousel-item">
            <img
             style={{ objectFit: "cover" }}
              src="https://www.karobargain.com/wp-content/uploads/2018/12/next-coming-boss-sale-2019.jpg"
              className="d-block w-100"
              alt="Image 3"
              height="300px"
             style={{minWidth:"100%"}}
            />
          </div>
          <div className="carousel-item">
            <img
             style={{ objectFit: "cover" }}
              src="https://stories.flipkart.com/wp-content/uploads/2017/09/bbdschedule_mainbanner2-59bfb1e3e37b8.jpg"
              className="d-block w-100"
              alt="Image 3"
              height="300px"
             style={{minWidth:"100%"}}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Sliders;
