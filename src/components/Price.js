import React from "react";
import PropTypes from "prop-types";

class Price extends React.Component {
    render(){
        return( 
            <div className="product-price d-flex">
                <div className="new-price"><strong>{this.props.newPrice}</strong><span>LE</span></div>
                {(this.props.oldPrice)?
                    <div className="old-price"><del>{this.props.oldPrice} <span>LE</span></del></div>
                :
                    ""
                }
                {(this.props.sale)?
                    <div className="sale"><p>{this.props.sale}% off</p></div> 
                :
                    ""
                }
            </div>
            )}        
}


Price.propTypes = {
    newPrice: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    sale: PropTypes.number,

  };
  
export default Price;