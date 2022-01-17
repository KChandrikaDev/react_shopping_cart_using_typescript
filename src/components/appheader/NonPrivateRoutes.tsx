import React from "react";
import { Link } from "react-router-dom";

type Props = {
    cartItems: number;
  };
const NonPrivateRoutes:React.FC<Props>=({cartItems})=> {
  return (
    <>
      <div>
        <header className="fixed ">
          <div
            style={{ textDecoration: "none" }}
            className="navbar  bg-dark shadow-sm"
          >
            <Link className=" text-white bg-dark" to="/">
              <div className="navbar-brand align-item-center ">
                <i className="text-white fas fa-shopping-cart fa-2x ms-3"></i>
                <strong
                  style={{ textDecoration: "none", fontFamily: "sans-serif" }}
                  className="text-white  h5"
                >
                  {" "}
                  Flipkart
                </strong>
              </div>
            </Link>
            <div>
              <Link to="/">
                <strong
                  style={{ fontSize: "16px" }}
                  className="text-white btn   button-nav shadow"
                >
                  Home
                </strong>
              </Link>
              <Link to="/login">
                <strong
                  style={{ fontSize: "16px" }}
                  className="text-white btn  button-nav "
                >
                  {" "}
                  LogIn
                </strong>
              </Link>

              <Link to="/login">
                <button className="btn btn-dark">
                  <i className="fa fa-cart-plus fa-2x" />
                  <div className="badge bg-danger ">{cartItems}</div>
                </button>
              </Link>

              
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default NonPrivateRoutes;
