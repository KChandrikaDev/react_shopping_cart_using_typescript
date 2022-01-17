import React from "react";
import { useRef, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/products/ProgressBar";
import Item from "./components/products/Item";
import useItemHook from "./components/customHook/useItemHook";
import { CartItemType, ProductItemType,ProductAllItemsType } from "./components/types/cartItem.types";

import "./components/products/Preview.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./components/products/Test.css";
import Sliders from "./components/products/Sliders";


type Props = {
  myClonedArray:ProductItemType[] | undefined,
  productData: ProductItemType[] | undefined,
  data: CartItemType[] | undefined,
  addToCart: (clickedItem: ProductAllItemsType) => void,
  // handleAddToCart: (clickedItem: ProductAllItemsType) => void,
};
const App: React.FC<Props> = ({ data, addToCart, 
  // handleAddToCart,
   productData,
   myClonedArray}) => {
  const sliderRef = React.useRef<Slider>(null);
  React.useEffect(() => {
    console.log(sliderRef);
  }, []);

  const settings = {
    ref: sliderRef,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    centerPadding: "250px",
  };
 
  const imgSlides = () =>
  {
  return(
    myClonedArray?.map((item) => (
      <div className=" mt-5 container-fluid">
        <Item
          key={item.id}
          item={item}
          // handleAddToCart={handleAddToCart}
          addToCart={addToCart}
        />
      </div>
      
    )))};
   

  const [{ isLoading, error }] = useItemHook();
  const divRef = React.useRef<HTMLDivElement>(null);
  console.log("div", divRef.current);

  if (isLoading) return <ProgressBar />;
  return (
    <>
      <Sliders />

      <div className="ms-5 prev">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="button btn btn-dark fa fa-angle-double-left "
        ></button>
      </div>
      <div className="me-5 next">
        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="button btn btn-dark fa fa-angle-double-right"
        ></button>
      </div>

      <Slider
        {...settings}
        infinite={false}
        focusOnSelect={true}
        autoplaySpeed={3000}
      >
        
        {imgSlides()}
      
      </Slider>
    </>
  );
};

export default App;
