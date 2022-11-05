import React from "react";
import PropTypes from "prop-types";
import ProductPreview from "./ProductPreview";
import  ProductLogo from "./ProductLogo";
import '../styles/product.css'
import Rate from "./Rate";
import Price from "./Price";
import SizeVariants from "./SizeVariants";
import ColorVariants from "./ColorVariants";
import Quantity from "./Quantity";
import ShoppingBtns from "./ShoppingBtns";

class Product extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            qty:1,
            id:"",
        }; 
    }

    render(){
    const product=this.props.main_product;
        return(
                <section className="product main__product container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <ProductPreview thumbnails={product.thumbnails}/>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <ProductLogo imgURL="./images/productlogo.png"/>
                            <p className="desc">{product.description}</p>
                            <p className="taxonomy capitalize">{product.taxonomy}</p>
                            <Rate rating={product.rating} clients={product.rates_clinets}/>
                            <Price newPrice={product.new_price} oldPrice={product.old_price} sale={product.sale}/>
                            <SizeVariants sizeList={product.sizes}/>
                            <ColorVariants colorList={product.colors}/>
                            <Quantity/>
                            <ShoppingBtns  id={product.id} addToCartHandler={this.props.addToCartHandler} />
                        </div>
                    </div>
                </section>
            )} 
            
            
            componentDidMount(){
                this.setState({
                    id:this.props.main_product.id,
                })

                document.getElementById("qty-product").value="1";
             
                
            }
}

Product.propTypes = {
    description: PropTypes.string,
    taxonomy: PropTypes.string,
    clients: PropTypes.number,
    rating: PropTypes.number,
    newPrice: PropTypes.number,
    oldPrice: PropTypes.number,
    sale: PropTypes.number,
    sizeList: PropTypes.array,
    colorList: PropTypes.array,

  };  
export default Product;
