import React from "react";
import PropTypes from "prop-types";



class Rate extends React.Component {
    render(){
        return( 
            <div className="product-rate d-flex">
                <span>
                <box-icon name='star' type='solid' color='#f3c900' />
                <box-icon name='star' type='solid' color='#f3c900' />
                <box-icon name='star' type='solid' color='#f3c900' />
                <box-icon name='star' type='solid' color='#f3c900' />
                <box-icon name='star' color='#f3c900' />
                </span>
                <span className="fw-bolder rate-number">{this.props.rating}  of 5 </span>
                {
                    (this.props.clients)?
                    <span className="clients">{this.props.clients} Rates</span>
                    :
                    ""

                }
                

            </div>
            )}        
}


Rate.propTypes = {
    rating: PropTypes.number.isRequired,
  };
  
export default Rate;