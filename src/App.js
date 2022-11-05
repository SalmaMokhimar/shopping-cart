import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/layout.scss';
import './styles/responsive.scss';
import Header from './components/Header.js';
import Product from './components/Product';
import ProductsSlider from './components/ProductsSlider';
import Cart from './components/Cart';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(props){
    super(props);
    this.cartLST=[];

    this. navLst=["men","women","unisex","kids","best sellers","new arrivals","offers"];
    this.crumbsLst=["men","clothing","tops","addidas","addidas black t-shirt"];
    this.productsLST = require('./services/products.json');

    this.features=["about us","contact us","track order","terms and conditions","privacy policy","sell with us","shipping and returns"]
    this.socialLinks={"../images/facebook.svg":"/yeshtery ",
    "../images/linkedin.svg" :"/yeshtery " , "../images/instagram.svg" :"/yeshtery " ,"../images/twitter.svg":"/yeshtery "
    }

    this.cartElement=React.createRef();
    this.notification=React.createRef();
  }
 
  addToCartHandler = (e) => {
    e.preventDefault();
    const btn=e.currentTarget;
    console.log(this.cartLST);
    const pro_id=btn.getAttribute("id");
    const result = this.cartLST.find((pro) => pro.id == pro_id );
    (result)? result["qty"]++ : this.cartLST.push({ "id": pro_id , "qty" :1});
    //let price=document.getElementById()
    let price=parseInt(e.currentTarget.closest(".main__product").querySelector(".new-price strong").innerText);
    this.cartElement.current.changeState(e,this.cartLST.length);
    let notification=document.getElementById("cart_counter");
    console.log(notification);
    let item=this.cartLST.find(item => item.id == pro_id);
    
    notification.innerHTML= item["qty"];
    
}
render (){
  
  return (
    <div className="App ">
      <div className="overlay">
      </div>
      <Header navArr={this.navLst} crumbsArr={this.crumbsLst}/>
      <Product 
      main_product={this.productsLST[0]} 
      addToCartHandler={(e)=>this.addToCartHandler(e)}
      />
      <ProductsSlider slideData={this.productsLST.slice(1)}/>
      <Cart cartLST={this.cartLST} products={this.productsLST} ref={this.cartElement}/>
      <Footer features={this.features} socialLinks={this.socialLinks}/>
    </div>
  )}


}

export default App;

