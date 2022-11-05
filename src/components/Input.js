import React from "react";
import PropTypes from "prop-types";


class Input extends React.Component {
    render(){
   
    return (
       
        <input className="input-control" type={this.props.inputType} id={this.props.inputID } placeholder={this.props.inputPlaceholder} name={this.props.inputName} onChange={this.props.onchangeHandler}/>
    )}        
}

Input.propTypes = {
    inputType: PropTypes.string.isRequired,
    inputID: PropTypes.string,
    inputPlaceholder:PropTypes.string,
    inputName:PropTypes.string,
    onchangeHandler:PropTypes.func,
};



export default Input;