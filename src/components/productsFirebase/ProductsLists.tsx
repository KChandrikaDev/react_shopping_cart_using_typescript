import React, { useEffect } from "react";
import firebase from "firebase/compat";
import { ProductItemType } from "../types/cartItem.types";
import { Link } from "react-router-dom";
import { app, db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import '../../App.css';
import './AddProducts.css'
function ProductsLists() {
  const [data, setData] = React.useState<ProductItemType[]>([]);
  useEffect(() => {
    const d = {
      products: firebase.firestore().collection("products"),
    };

    const example = async () => {
      const userQuery = await d.products.get();
      console.log("userQuery", userQuery);
      const products = userQuery.docs.map((x) => ({
        ...(x.data() as ProductItemType),
        id: x.id,
      }));
      console.log("products", products);
      setData(products);
    };
    example();
    console.log("data", data);
  }, []);

  const deleteProduct = async (id: string) => {
    console.log("id", id);
    const ProductData = doc(db, "products", id);
    await deleteDoc(ProductData);
    window.location.reload();
  };

  return (
    <>
      {/* <div id="animate-area"> */}
      <div style={{ overflowX: "auto" }} className="container-fluid mt-3  ">
        <table className="table   ">
          <thead className="bg-table">
            <tr>
              <th>Image</th>
              <th>Product Title</th>
              <th>Product Description</th>
              <th>Categorey</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className=" ">
            {data?.map((pro) => (
              <tr
                key={pro.id}
                style={{ fontSize: "13px", fontFamily: "sans-serif" }}
                className="table-hover "
              >
                <td style={{ minWidth: "5%" }}>
                  <img
                    src={pro.image}
                    alt={pro.title}
                    width="50px"
                    height="50px"
                  ></img>
                </td>
                <td style={{ minWidth: "5%" }}>{pro.title}</td>
                <td style={{ minWidth: "10%" }}>{pro.description}</td>
                <td style={{ minWidth: "10%" }}>{pro.category}</td>
                <td style={{ textAlign: "right", minWidth: "7%" }}>
                  ${pro.price}
                </td>

                <td style={{ minWidth: "15%" }}>
                  <Link to={`/edit/products/${pro.id}`}>
                    <button
                      
                      className=" btn fa fa-pencil-square-o text-primary"
                    ></button>
                  </Link>
                  <button
                    onClick={() => deleteProduct(pro.id)}
                    className="btn fa fa-trash text-danger"
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </>
  );
}

export default ProductsLists;
