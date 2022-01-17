import React, { HtmlHTMLAttributes } from "react";

const  ProgressBar =()=> {
  return (
      <>
      <div className="container justify-content-center mt-5 w-25">
    <div className="spinner-grow text-primary" role="status">
    {/* <span className="sr-only">Loading...</span> */}
  </div>
  <div className="spinner-grow text-secondary" role="status">
    {/* <span className="sr-only">Loading...</span> */}
  </div>
  <div className="spinner-grow text-success" role="status">
    {/* <span className="sr-only">Loading...</span> */}
  </div>
  <div className="spinner-grow text-danger" role="status">
    {/* <span className="sr-only">Loading...</span> */}
  </div>
  <div className="spinner-grow text-warning" role="status">
    {/* <span className="sr-only">Loading...</span> */}
  </div>
  <div className="spinner-grow text-info" role="status">
    {/* <span className="sr-only">Loading...</span> */}
  </div>
  <div className="spinner-grow text-dark" role="status">
    {/* <span className="sr-only">Loading...</span> */}
  </div>
  </div>
  </>
  );
}

export default ProgressBar;
