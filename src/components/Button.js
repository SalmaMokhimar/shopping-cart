import React from "react";
import PropTypes from "prop-types";


class Button extends React.Component {
    render(){
   
    return (
       
        <button className={`btn capitatlize ${this.props.className}`} id={this.props.id} onClick={this.props.onClick}>{this.props.btnName} </button>
    )}        
}

Button.propTypes = {
    btnName: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

 
export default Button;