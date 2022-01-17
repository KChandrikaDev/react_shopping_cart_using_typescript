import React, { lazy } from "react";
import App from "./App";
import {  Route, Routes } from "react-router-dom";
import useItemHook from "./components/customHook/useItemHook";
import { UsersType } from "./components/types/users.type";
import {
  ProductAllItemsType,
} from "./components/types/cartItem.types";
import useProducts from "./components/customHook/useProducts";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import PageNotFound from "./components/404/PageNotFound";
import { useState} from "react";

const CartItem = lazy(() => import("./components/products/CartItem"));
const NavBar = lazy(() => import("./components/appheader/NavBar"));
const Test = lazy(() => import("./components/products/Test"));

const AddProducts = lazy(
  () => import("./components/productsFirebase/AddProducts")
);
const ProductsLists = lazy(
  () => import("./components/productsFirebase/ProductsLists")
);
const EditProducts = lazy(
  () => import("./components/productsFirebase/EditProducts")
);

const UserAuth = lazy(() => import("./components/productsFirebase/UserAuth"));

const AdminAuth = lazy(() => import("./components/productsFirebase/AdminAuth"));

const Main = () => {
  const [{ productData }] = useProducts();
  console.log("Dataa", productData);

  const [
    {
      cartItems1,
      cartItems,
      data,
      isLoading,
      error,
      addToCart,
      handleAddToCart,
      handleRemoveFromCart,
      removeItem,
      handleAddToCartProduct,
      userData,
      myClonedArray,
    },
  ] = useItemHook();
  const [Users, setUsers] = React.useState([] as UsersType[]);

  const usersCollection = collection(db, "users");
  React.useEffect(() => {
    const fetchUsers = async () => {
      const users = await getDocs(usersCollection);
      const usersData = users.docs.map((user) => ({
        ...user.data(),
        id: user.id,
      }));
      console.log("userData", usersData);
      setUsers(usersData as UsersType[]);
    };
    fetchUsers();
  }, []);
  console.log("setUsers", Users);

  const [ProductData, setProductData] = useState<
    ProductAllItemsType[] | undefined
  >([]);

  console.log("Product Data", ProductData);

  return (
    <>
      <NavBar cartItems={cartItems.length} />
      {userData?.type === "admin" ? (
        <Routes>
          <Route path="/edit/products/:id" element={<EditProducts />} />
          <Route path="/add/products" element={<AddProducts />} />
          <Route path="/login" element={<UserAuth Users={Users} />} />
          <Route path="/products" element={<ProductsLists />} />
        </Routes>
      ) : userData?.type === "user" ? (
        <Routes>
          <Route
            path="/"
            element={
              <App
                productData={productData}
                // handleAddToCartProduct={handleAddToCartProduct}
                data={data}
                addToCart={addToCart}
                // handleAddToCart={handleAddToCart}
                myClonedArray={myClonedArray}
              />
            }
          />
          <Route path="/login" element={<UserAuth Users={Users} />} />
          <Route
            path="/cart"
            element={
              <CartItem
                cartItems1={cartItems1}
                cartItems={cartItems}
                removeFromCart={handleRemoveFromCart}
                addToCart={handleAddToCart}
                removeItem={removeItem}
              />
            }
          />
        </Routes>
      ) : (
        <Routes>
          {userData?.type === "user" ? (
            <Route
              path="/cart"
              element={
                <CartItem
                  cartItems1={cartItems1}
                  cartItems={cartItems}
                  removeFromCart={handleRemoveFromCart}
                  addToCart={handleAddToCart}
                  removeItem={removeItem}
                />
              }
            />
          ) : (
            <Route path="/login" element={<UserAuth Users={Users} />} />
          )}

          <Route
            path="/"
            element={
              <App
                productData={productData}
                // handleAddToCartProduct={handleAddToCartProduct}
                data={data}
                addToCart={addToCart}
                // handleAddToCart={handleAddToCart}
                myClonedArray={myClonedArray}
              />
            }
          />
          <Route path="/test" element={<Test data={data} />} />
          <Route path="/login" element={<UserAuth Users={Users} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
};

export default Main;
