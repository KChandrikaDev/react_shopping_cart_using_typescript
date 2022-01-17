import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './Test.css'
import { CartItemType } from '../types/cartItem.types';
type Props={
  data:CartItemType[] | undefined
}
const Test : React.FC<Props>=({data})=> {  
  const sliderRef = React.useRef<Slider>(null);
  React.useEffect(() => {
    console.log(sliderRef);
  }, []);
    
  const settings = {
    ref:sliderRef,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "200px",
    
    // nextArrow: (
    //   <div>
    //     <div className="next-slick-arrow text-dark"> ⫸ </div>
    //   </div>
    // ),
    // prevArrow: (
    //   <div>
    //     <div className="prev-slick-arrow text-primary"> ⫷</div>
    //   </div>
    // )
  };
    var imgSlides = () =>  
    data?.map(item => (  
      <div className="imgpad m-5">  
          <img className="imgdetails" src= {item.image}  style={{width: "150px",
  height: "200px",
  objectFit: "scale-down"}}/>    
      </div>  
    ));  
  return (  
    <div className="App">  
     <button  onClick={() => sliderRef?.current?.slickPrev()}
     className="btn btn-dark text-white">
     <i className="fa fa-angle-double-left" aria-hidden="true"></i>
        </button>
      <button onClick={() => sliderRef?.current?.slickNext()}
      className="btn btn-dark text-white">
     <i className="fa fa-angle-double-right" aria-hidden="true"></i>
        </button>    <div className='container'>        
            <div className="row title" style={{marginBottom: "20px"}} >        
            <div className="col-sm-12">        
            {/* Image Slider In React Application      */}
            </div>        
            </div>    
            </div>  
      <Slider  
      {...settings}
      
        // swipeToSlide={false}
        // slidesToShow={3}  
        // slidesToScroll={2}  
        // autoplay={false}  
        // arrows={true}  
      focusOnSelect={true}
        autoplaySpeed={3000}>{imgSlides()}</Slider>  
    </div>  
  );  
}  

export default Test  