import React, { useState, useEffect } from "react";
import { ProductItemType } from "../types/cartItem.types";
import { useParams } from "react-router-dom";
import { options } from "./select.options";
import "./AddProducts.css";
import { useNavigate } from "react-router-dom";
import { app, db } from "../../firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  getFirestore,
  where,
  Firestore,
  updateDoc,
} from "firebase/firestore";

function EditProducts() {
  const [data, setData] = React.useState<ProductItemType>();
  const [image, setImage] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("Id", id);
  const productsCollection = collection(db, "products");
  useEffect(() => {
    const example = async () => {
      const docRef = doc(productsCollection, id);
      const userQuery = await getDoc(docRef);
      console.log("userQuery", userQuery.data());
      setData(userQuery.data() as ProductItemType);
    };
    example();
    console.log("data", data);
  }, []);
  const handleChangeImage = async (e: any) => {
    console.log("selected files", e?.target.files[0].name);
    const file = e.target.files[0];
    console.log("image", image);
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file);
    const imageUrl = await fileRef.getDownloadURL();
    setImage(imageUrl || (data?.image as string));
  };

  const handleInputChange = (e: any) => {
    setData({ ...(data as ProductItemType), [e.target.name]: e.target.value });
  };
  const editData = async (e: any) => {
    e.preventDefault();
    console.log("data", data);
    const docRef = doc(productsCollection, id);
    await updateDoc(docRef, {
      ...data,
    });
    navigate("/products");
  };
  return (
    <>
      <div id="animate-area-edit">
        <div
          id="container"
          className="mt-3 justify-content-center  container 50 bg-light new  shadow "
        >
          <div className="row  ">
            <form onSubmit={(e) => editData(e)} key={data?.id}>
              <div className="   ">
                <h4 className="mt-3  mb-3 text-center">
                  <strong> Edit Product Item </strong>
                </h4>
                <div className="mb-3 row ">
                  <label className=" col-sm-4 col-col-sm-4 col-form-label p">
                    <strong> Product Title :</strong>
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Product Title..."
                      name="title"
                      value={data?.title}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-4 col-form-label  p">
                    <strong>Product Description :</strong>
                  </label>
                  <div className="col-sm-8">
                    <textarea
                      className="form-control"
                      rows={5}
                      id="comment"
                      name="description"
                      placeholder=" Description..."
                      value={data?.description}
                      // onChange={(e) => {
                      //   setdescription(e.target.value);
                      // }}
                      onChange={(e) => handleInputChange(e)}
                    ></textarea>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-4 col-form-label  p">
                    <strong>Catogery :</strong>
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      name="category"
                      value={data?.category}
                      // onChange={(e) => {
                      //   setcategory(e.target.value);
                      // }}
                      onChange={(e) => handleInputChange(e)}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-4 col-form-label  p">
                    <strong>Price :</strong>
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      placeholder="Price..."
                      value={data?.price}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-4 col-form-label  p">
                    <strong>Product Image:</strong>
                  </label>
                  <div className="col-sm-8">
                    {/* <input
                  type="file"
                  className="form-control mt-1 text-hover"
                  // name="image"
                  placeholder="file..."
                  
                  onChange={e => handleChangeImage(e)}
                /> */}
                    <img
                      src={data?.image || image}
                      width="200px"
                      height="100px"
                    ></img>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className=" mt-2 btn btn-primary w-25  mb-3"
                  >
                    Save Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProducts;
