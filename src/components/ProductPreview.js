import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


class ProductPreview extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state={
            prevImg:this.props.thumbnails[0],
        }; 
    }
    changePreviewHandler = (img) =>
    {
        //let src=img.getAttribute("src");
 
        this.setState({
            prevImg:img,
        });
    }
    render(){
        const thumbs=this.props.thumbnails;
        return(
                <div className="preview">
                    <div className="preview-pic tab-content">
                    <LazyLoadImage src={require(`../images/${this.state.prevImg}`)} effect="blur"/>
					</div>
                    <ul className="preview-thumbnail nav nav-tabs">
                        { thumbs.map((img,index) =>
                             
                            <li key={index} onClick={(e)=>{this.changePreviewHandler(img)}}>
                                
                                <a><LazyLoadImage src={require(`../images/${img}`)} effect="blur" /></a>
                            </li> 
                         )}
                    </ul>
                </div>
            )}        
}

  
export default ProductPreview;

