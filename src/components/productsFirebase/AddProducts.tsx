import React, { useState } from "react";
import "./AddProducts.css";

import { options } from "./select.options";
import { ProductItemType } from "../types/cartItem.types";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, app } from "../../firebase";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const productInitialValues = {
    title: "",
    description: "",
    price: "",
  };
  const [data, setData] = useState(productInitialValues);
  const [category, setcategory] = useState("");

  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const productCollection = collection(db, "products");
  React.useEffect(() => {
  
    return () => {
      setData(productInitialValues);
  
    setcategory("")
    setImage("")
    };
    
}, []);

  const handleChangeImage = async(e: any) => {
    console.log("selected files", e?.target.files[0].name);
    const file = e.target.files[0];
    // console.log("image", image);
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file);
    const imageUrl =await fileRef.getDownloadURL()
    setImage(imageUrl)
    
  };

  // console.log("image", image)
  const handleInputChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveProducts = async(e: any) => {
    e.preventDefault();
     await addDoc(productCollection, {
      ...data,
      category: category,
      image: image,
    });
   
    navigate("/products");
  };
  return (
    <div id="animate-area">
      <div
        id="container"
        className="mt-5 justify-content-center  container w-50 bg-light new  shadow "
      >
        <div className="row   ">
          <form onSubmit={(e) => saveProducts(e)}>
            <div className=" col-12 p-3 ">
              <h4 id="h4"className="mt-3  text-center">Add Product Item</h4>
              <div className="mb-5">
                <label className="form-label  p">Product Title :</label>
                <input
                  type="text "
                  className="form-control mt-1 text-hover"
                  placeholder="Product Title..."
                  name="title"
                  value={data.title}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label  p">Product Description :</label>
                <textarea
                  className="form-control text-hover"
                  rows={5}
                  id="comment"
                  name="description"
                  placeholder=" Description..."
                  value={data.description}
                 
                  onChange={(e) => handleInputChange(e)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label  p"> Catogery :</label>
                <select
                  className="form-select text-hover"
                  value={category}
                  onChange={(e) => {
                    setcategory(e.target.value);
                  }}
                  // onChange={(e)=>handleInputChange(e)}
                >
                  {options.map((option) => (
                    <option  key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label p"> Price :</label>
                <input
                  type="text"
                  className="form-control text-hover "
                  name="price"
                  placeholder="Price..."
                  value={data.price}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label p">Product Image:</label>
                <div className="lable bg-dark">
                  <input
                    id="file-upload"
                    type="file"
                    className="form-control text-hover "
                    // name="file"
                    placeholder="file..."
                    onChange={(e) => handleChangeImage(e)}
                  />
                
                </div>
                <img src={image}  height="50px" width="50px"/>
              </div>
              <div>
                <button type="submit" className=" btn btn-primary w-100  mb-3">
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
