import React from "react";
import { CartItemType, ProductItemType,ProductAllItemsType } from "../types/cartItem.types";
import { Link } from "react-router-dom";
import "../../App.css";
type Props = {
  cartItems1:ProductItemType[];
  cartItems: ProductAllItemsType[];
  removeFromCart: (item :any) => void;
  removeItem: (item :any) => void;
  addToCart: (clickedItem: ProductAllItemsType) => void;
};

const CartItem: React.FC<Props> = ({
  cartItems1,
  cartItems,
  removeFromCart,
  addToCart,
  removeItem
}) => {
  const calculateTotal = (items: ProductAllItemsType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="container w-50">
          <div id="card"className="card">
            {/* <h5 className="card-title">My Cart</h5> */}
          </div>
          <div className="center mt-3">
            <img
              src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt="Cart Image"
            />
            <h4>Your cart is empty!</h4>
            <h6>Add items to it now</h6>
            <Link to="/">
              <button className="btn btn-primary">
              <strong>
                    Shop Now
                    </strong>
                </button>
            </Link>
          </div>
        </div>
      ) : (
        <div  className="container mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 shadow">
                <h5 className="card-title">My Cart</h5>
                {cartItems.map((item) => (
                  <div className="row mt-5">
                    <div className="col-12">
                      <h5 className="ms-3">{item.title}</h5>
                      <div className="row">
                        <div className="col-sm-6 ">
                          <img
                            className="ms-3"
                            style={{ width: "120px" }}
                            src={item.image}
                            alt={item.title}
                          />
                          <div className="row col-sm-6 mt-3 mb-3 ms-3">
                            <i
                              onClick={() => removeFromCart(item.id)}
                              className=" col-4 fa fa-minus btn bg-secondary me-1 text-white p-3"
                              aria-hidden="true"
                            ></i>
                            <p style={{textAlign:"center"}} className=" h5  col-3 pt-3 texr-center">
                              {item.amount}
                            </p>
                            <i
                              onClick={() => addToCart(item)}
                              className="  col-4 fa fa-plus btn bg-secondary  text-white ms-1 p-3"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                        <div className="col-sm-6  pt-5">
                          <strong className="h5 pb-4">
                            Price:${item.price}
                          </strong>
                         

                          <div>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="btn text-white bg-danger mt-3 remove"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-sm-5 shadow ms-3 ">
                <strong className="h4">Invoice</strong>
                {
                  cartItems.map((item)=>(
                    <div className="row">
                      <div className="col-sm-8">
                        <p>{item.title}</p>
                      </div>
                      <div  style={{float:"right"}} className="col-sm-4">${(item.amount * item.price).toFixed(2)}</div>

                    </div>
                  ))
                }
                <hr></hr>
                <div style={{float:"right", marginRight:"80px"}}><strong>Grand Total: ${calculateTotal(cartItems).toFixed(2)}</strong></div>
                <div>
                  <Link to='/'>
                  <button className="btn btn-primary">
                    <strong>
                    Add Items
                    </strong>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
