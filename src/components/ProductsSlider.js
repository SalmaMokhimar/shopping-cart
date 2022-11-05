import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation , EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import  ProductLogo from "./ProductLogo";
import Rate from "./Rate";
import Price from "./Price";


import React from "react";

class ProductsSlider extends React.Component {

  render(){
    const slideData=this.props.slideData;
    
    return(
      <section className="product_slider container">
        <h3 className='section__title capitalize'>Similar Products</h3>
        <h6 className='section__subtitle capitalize'>you may like these products also</h6>
        <Swiper 
          modules={[Navigation , EffectFade]}
          effect
          speed={800}
          slidesPerView={4}
          className='my_swiper'
          spaceBetween={30}
          breakpoints={{
            0 :{
              slidesPerView:1,
          },
          520 :{
              slidesPerView:2,
          },
          950 :{
              slidesPerView:4,
            },
          }}
          >
            { slideData.map((product,index)=>

              <SwiperSlide key={index} className='swiper_slide card'>
                <img src={require(`../images/${product.imgURL}`)}  alt=""/>
                  <div className="card-body">
                    <p className="card-text">{product.description}</p>
                    <div className='container'>
                    <div className='row firt__row'>
                      <div className='col-md-6'>
                        <Price newPrice={product.new_price} oldPrice={product.old_price} sale={parseInt(product.sale)}/>
                      </div>
                      <div className='col-md-6'>
                        <ProductLogo imgURL="./images/productlogo.png"/>
                      </div>
                    </div>
                    <div className='row second__row'>
                      <div className='col-md-12'>
                        <Rate rating={product.rating} />
                        {(product.store)? <span className='capitalize'>pickup from: <strong>{product.store}</strong> </span> :" "}
                        {(product.from)? 
                        <> <span className='capitalize'>from: <strong>{product.from}</strong></span><span className='capitalize'>to: <strong>{product.to}</strong></span> <span className='capitalize'>in: <strong>{product.duration} days</strong></span>   </>:" "}
                      </div>
                    </div>
                    </div>
                  </div>

            </SwiperSlide>
         
            )}
          </Swiper>



      </section>
    )}        
}


  
export default ProductsSlider;
