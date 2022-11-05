import React from "react";
import PropTypes from "prop-types";



class ColorVariants extends React.Component {

    changeColorHandler = (e) =>{
        let lis=document.querySelectorAll(".color_Variant li");
        lis.forEach(li =>li.classList.remove("active-color"));
        e.currentTarget.classList.add("active-color");
        e.preventDefault();
    }
    render(){
        const colors=this.props.colorList;
        return( 
            <div className="variant">
               <h5 className="variant-name">Color</h5>
               <div className="variant-menu">
                <ul className="color_Variant d-flex">
                    { colors.map((el,index)=>
                        <li key={index} onClick={(e)=>{this.changeColorHandler(e)}}>
                          <img src={require(`../images/${el}`)}/>     
                        </li>
                    )}
                </ul>
               </div>
            </div>
            )
        } 
        componentDidMount(){
            const s=document.querySelectorAll(".color_Variant li")[0];
            s.classList.add("active-color");
        }         
}


ColorVariants.propTypes = {
    colorList: PropTypes.array.isRequired,
    variantName: PropTypes.string,
  };
  
export default ColorVariants;