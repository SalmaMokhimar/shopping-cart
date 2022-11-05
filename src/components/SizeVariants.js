import React from "react";
import PropTypes from "prop-types";



class SizeVariants extends React.Component {

    changeSizeHandler = (e) =>{
        let lis=document.querySelectorAll(".size_Variant li");
        lis.forEach(li =>li.classList.remove("active-Variant"));
        e.currentTarget.classList.add("active-Variant");
        e.preventDefault();
        console.log(e.currentTarget);
        console.log(lis);
       
    } 


    render(){
        const sizes=this.props.sizeList;
        return( 
            <div className="variant">
               <h5 className="variant-name">Size</h5>
               <div className="variant-menu">
                <ul className="size_Variant d-flex">
                    { sizes.map((el,index)=>
                        <li key={index} onClick={(e)=>{this.changeSizeHandler(e)}}>
                          <p>{el}  </p>    
                        </li>
                    )}
                </ul>
               </div>
            </div>
            )
        }
        componentDidMount(){
            const s=document.querySelectorAll(".size_Variant li")[3];
            s.classList.add("active-Variant");
        }  

}


SizeVariants.propTypes = {
    sizeList: PropTypes.array,
    variantName: PropTypes.string,
  };
  
export default SizeVariants;