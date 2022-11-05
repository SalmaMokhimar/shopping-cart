import React from "react";
import PropTypes from "prop-types";
import 'boxicons';

class MenuItem extends React.Component {
    render(){
        return(
                <li key={this.props.itemTitle} onClick={this.props.onClick}>
                    <box-icon  name={this.props.icon}></box-icon>
                    {(this.props.itemTitle !="cart")?
                        <a href="#">{this.props.itemTitle}</a>
                      :
                      <>
                        <a href="#" className="cartMenuItem">{this.props.itemTitle}</a> 
                        <span id="cart_counter">0</span>
                      </>
                    }
                    
                </li>
            )}        
}
MenuItem.propTypes = {
    itemTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };
  
export default MenuItem;


