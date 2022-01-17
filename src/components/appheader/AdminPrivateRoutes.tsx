import React from "react";
import { Link } from "react-router-dom";

type Props ={
 
}
const AdminPrivateRoutes:React.FC<Props>=({})=> {
  const handleLogOut = () => {
    localStorage.removeItem("users");
    window.location.reload();
  };
  return (
    <>
      <div>
        <header className="fixed ">
          <div
            style={{ textDecoration: "none" }}
            className="navbar  bg-dark shadow-sm"
          >
            <Link className=" text-white bg-dark" to="/products">
              <div className="navbar-brand align-item-center ">
                
                <strong
                  style={{ textDecoration: "none", fontFamily: "sans-serif" }}
                  className="text-white  h5"
                >
                  Admin Pannel
                </strong>
              </div>
            </Link>
            <div>
              <Link to="/add/products">
                <strong
                  style={{ fontSize: "16px" }}
                  className="text-white btn  button-nav "
                >
                  Add Products
                </strong>
              </Link>
              <Link to="/products">
                <strong
                  style={{ fontSize: "16px" }}
                  className="text-white btn  button-nav"
                >
                  Products
                </strong>
              </Link>

              <Link to="/login">
                <strong
                  style={{ fontSize: "16px" }}
                  className="text-white btn  button-nav "
                >
                  <button
                  onClick={()=>handleLogOut()} 
                  className="btn btn-secondary">
                      LogOut
                      </button>
                 
                </strong>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default AdminPrivateRoutes;
