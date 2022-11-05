import React from "react";
import PropTypes from "prop-types";
import Price from "./Price";
import Button from "./Button";



class Cart extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isEmpty:true,
            total:0,
            CartLst:[{"id":0,"qty":0}]
        }; 
    }

    changeState = (length,price) =>{
        if(length == 0){
            this.setState({
                isEmpty:true,
            })
        }
        else
        {
            this.setState({
                isEmpty:false,
                total: this.state.total+price
            })
        }
       
    }
    closeCart = (e) => {
        e.preventDefault();
        document.getElementById("shopping_cart").classList.toggle("opened");
        document.getElementsByClassName("overlay")[0].classList.toggle("show");
      }

    render(){
        const products=this.props.products;
        const cartLST=this.props.cartLST;
        
        let proID=(this.props.cartLST.length == 0 )? 0 : this.props.cartLST[0]["id"] ;
        let quantity=(this.props.cartLST.length == 0 )? 0 : this.props.cartLST[0]["qty"] ;
        
        const selectedProducts=products.filter((el)=>el.id==proID);
       
        
        
    return (
        <div id="shopping_cart" className="cart">
            <div className="cart__container">
             <a href="#" className="closebtn" onClick={(e)=> this.closeCart(e)}>&times;</a>
            <h1 className="cart__title capitalize">my cart</h1>
            <p className="cart__summary">cart summary</p>
            <div className="products_in_cart">
                {
                    
                    (this.state.isEmpty)?
                        <p className="empty">Your cart is Empty !</p>
                    :
                    selectedProducts.map((el)=>
                        <div className='cart_product'>
                            <div className="product_card row">
                                <div className="col-md-4">
                                    <img src={require(`../images/${el.imgURL}`)}  alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <p className="card-text">{el.description}</p>
                                    <div className="quantity">
                                        <span>Quantity :</span> 
                                        {quantity}
                                    </div>
                                    <Price newPrice={el.new_price}/>
                                       
                                    <Button className={'secondrybtn'} btnName={"remove"}></Button>
                                </div>
                            </div>
                            <div className="total">
                                <p>Total=<strong> 10.999 </strong> LE</p>
                            </div>
                            <div className="cart__btns d-flex">
                                <Button className={'secondrybtn'} btnName={"review cart"}/>
                                <Button className={'primarybtn'} btnName={"Complete check out"}/>
                            </div>
                        </div>
                        
                    )
                        
                    
                }
            </div>
            </div>
      </div>
    )}
   
    
}

Cart.propTypes = {
    products: PropTypes.array.isRequired,
    cartLST: PropTypes.array.isRequired,
};
   
export default Cart;