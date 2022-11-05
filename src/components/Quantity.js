import React from "react";
import Input from "./Input";

class Quantity extends React.Component {

    quantityHandler = () =>{
        //logkjljlkj

    }
    render(){
        return( 
            <div className="variant">
               <h5 className="variant-name">Quantity</h5>
               <div className="variant-menu qty">
                    <div className="control">
                        <a className="icon qtyminus" href="#">
                            <box-icon name='minus'></box-icon>
                        </a>
                        <Input inputType={"number"} inputID={"qty-product"} inputName={"quantity"} onchangeHandler={()=>this.props.quantityHandler()} />
                        <a className="icon qtyplus" href="#">
                            <box-icon name='plus'></box-icon>
                        </a>
                    </div>
                </div>
            </div>
        )}        
}

export default Quantity;