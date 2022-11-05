import React from "react";
import Button from "./Button";
import MenuItem from "./MenuItem";
import Input from "./Input";
import PropTypes from "prop-types";
import Nasnav from './images/nasnav.svg';
import FooterLogo from './images/footerlogo.svg';
import Sub from './image/sub.svg';

class Footer extends React.Component {
    render(){
        const features=this.props.features;
        const socialLST = [];
        for (const [key, value,index] of Object.entries(this.props.socialLinks)) {
            socialLST.push(<li key={index}><a href="#"><img src={require(`../images/${key}`)}/>{value}</a></li>);
        }

     
    return (
      <footer className="footer">
        <div className="container">
            <div className="row footer_top ">
                <div className="sec_one col-md-6 col-sm-12">
                    <div className="brand">
                        <FooterLogo/>
                    </div>
                    <div className="about">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        </p>
                        <p>
                        It is a long established facll be distracted by the readableut. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        </p>
                        <p>
                        It is a longbe distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        </p>
                    </div>
                </div>
                <div className="sec_two col-md-6 col-sm-12">
                    <div className="subscribe">
                        <h5> subscribe to our newsletter</h5>
                        <Input type={"text"} inputPlaceholder={"Enter Your Mail"}/>
                        <Button className={"secondrybtn"} btnName={"subscribe"}/> 
                        <Sub/>
                    </div>
                    <div className="links row">
                        <div className="features col-md-6 col-sm-12">
                            <ul className="capitalize">
                            { features.map((menuitem,index) => 
                                    <MenuItem key={index} className="capitalize"  itemTitle={menuitem}/>   
                                )}
                            </ul>
                        </div>
                        <div className="social col-md-6 col-sm-12">
                            <ul className=" capitalize">
                                {
                                    socialLST
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom d-flex">
                <div className="copyright">
                <box-icon name='copyright' color='#fff' ></box-icon>
                    <p>2021 yeshtery, all rights reserved.</p>
                </div>
                <div className="payment">
                    <img src="../images/Rectangle.png"/>
                    <img src="../images/master.png"/>
                    <img src="../images/visa.png"/>
                </div>
                <div className="powered">
                    <p>powered by <Nasnav/> </p>
                </div>
            </div>
        </div>
      </footer>
    )}        
}

Footer.propTypes = {
    features: PropTypes.array,
    socialLinks:PropTypes.object
  };

export default Footer;