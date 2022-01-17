import { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { CartItemType, ProductItemType, ProductAllItemsType } from "../types/cartItem.types";
import { UsersType } from "../types/users.type";
import { useNavigate } from "react-router-dom";
import useProducts from "./useProducts";
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function useItemHook() {
  
   const [{productData}] = useProducts()
  const [cartItems, setCartItems] = useState([] as ProductAllItemsType[]);
  const [cartItems1, setCartItems1] = useState([] as ProductItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  const [ProductData, setProductData] = useState<ProductAllItemsType[] | undefined>([])
  const [userData, setUserData] = useState<UsersType>();
  const [isAuth, setIsAuth] =useState(false)
  
    
  const myClonedArray:any = [];
data?.forEach(val => myClonedArray.push(Object.assign({}, val)));
console.log("myClonedArray",myClonedArray)
productData?.forEach(val => myClonedArray.push(Object.assign({}, val)));
console.log("myClonedArray",myClonedArray)

  
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") as string);
    console.log("users Main.Tsx", users);
    setUserData(users);
    if(users){
      setIsAuth(true)
    }
  }, []);
  console.log(data);
  console.log("IsAuth",isAuth)
 

 
 
 console.log("Product Data", ProductData)

  const getTotalItems = (items: ProductAllItemsType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  const getTotalItemsProduct = (items: ProductItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

    const handleAddToCartProduct = (clickedItem: ProductItemType) => {
      setCartItems1(prev => {
        // 1. Is the item already added in the cart?
        const isItemInCart = prev.find(item => item.id === clickedItem.id);
        if (isItemInCart) {
          return prev.map(item =>
            item.id === clickedItem.id
              ? { ...item, amount: item.amount + 1 }
              : item
          );
        }
        // First time the item is added
        return [...prev, { ...clickedItem, amount: 1 }];
      });
    }
    const navigate = useNavigate();
  const handleAddToCart = (clickedItem: ProductAllItemsType) => {
    
   if(isAuth && userData?.type ==='user')  {
      setCartItems(prev => {
        // 1. Is the item already added in the cart?
        const isItemInCart = prev.find(item => item.id === clickedItem.id);
        if (isItemInCart) {
          return prev.map(item =>
            item.id === clickedItem.id
              ? { ...item, amount: item.amount + 1 }
              : item
          );
        }
        // First time the item is added
        return [...prev, { ...clickedItem, amount: 1 }];
      });}
      else{
        navigate('/login')
      }

    
    
   
  };

  const addToCart = (clickedItem: ProductAllItemsType) => {
    console.log("item", clickedItem);
   

    if(isAuth && userData?.type ==='user')  {
      setCartItems(prev => {
        // 1. Is the item already added in the cart?
        const isItemInCart = prev.find(item => item.id === clickedItem.id);
        if (isItemInCart) {
          return prev.map(item =>
            item.id === clickedItem.id
              ? { ...item, amount: item.amount + 1 }
              : item
          );
        }
        // First time the item is added
        return [...prev, { ...clickedItem, amount: 1 }];
      });}
      else{
        navigate('/login')
      }

  };

  const handleRemoveFromCart = (id:number) =>{
  setCartItems(prev =>
    prev.reduce((ack, item) => {
      if (item.id === id) {
        
          if (item.amount === 1) return ack;
        return [...ack, { ...item, amount: item.amount - 1 }];
      } else {
        return [...ack, item];
      }
    }, [] as ProductAllItemsType[])
  );
  }
  console.log("Cart1", cartItems1)
 
  const removeItem = (id:number) =>{
    const deleteItem= cartItems.filter((item)=> item.id !== id);
    setCartItems(deleteItem)
  }
  return [
    {
      cartItems,
      data,
      myClonedArray,
      isLoading,
      error,
      addToCart,
      handleAddToCart,
      handleRemoveFromCart,
      handleAddToCartProduct,
      getTotalItems,
      removeItem,
      cartItems1,
      userData
    },
  ];
}

export default useItemHook;
