import React from "react";
import Button from "./Button";


class ShoppingBtns extends React.Component {
    render(){
   
    return (
        <>
        <Button className={'primarybtn'} btnName={"add to cart"}  id={this.props.id} onClick={this.props.addToCartHandler}/>
        <Button className={'secondrybtn'} btnName={"pick up from store"}/>
    </>
       
    )}        
}

export default ShoppingBtns;