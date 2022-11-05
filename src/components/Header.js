import React from "react";
import MenuItem from "./MenuItem";
import 'boxicons';
import {ReactComponent as SiteLogo} from "../images/Group 769.svg";
import  ProductLogo from "./ProductLogo";
import PropTypes from "prop-types";
import Input from "./Input";


class Header extends React.Component {


    openCart =(e) =>
    {
        e.preventDefault();
        document.getElementById("shopping_cart").classList.toggle("opened");
        document.getElementsByClassName("overlay")[0].classList.toggle("show");
  
    }

    render(){
        const navL=this.props.navArr;
        const bread_crumbs=this.props.crumbsArr;
        return(
                <header className="header">
                    <div className="header__section__one">
                        <div className="container d-flex">
                            <div className="brand">
                                <box-icon name='menu'></box-icon>
                                <SiteLogo className="site__logo"/>
                            </div>
                            <div className="offer capitalize">
                                <p>Valentine's day offers! buy two get one free 
                                    <a href="#">Shop now</a>
                                </p>
                            </div>
                            <div className="menu d-flex">
                                <ul className="d-flex">
                                    <MenuItem key={"phone"} className="capitalize" icon='phone-call' itemTitle="contact us"/>
                                    <MenuItem key={"order"} className="capitalize"  icon='cart-alt' itemTitle="track order"/>
                                    <MenuItem  key={"store"} className="capitalize"  icon='map' itemTitle="find a store"/>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header__section__two ">
                        <div className="container d-flex">
                            <div className="search">
                                <box-icon name='search-alt-2' ></box-icon>
                                <Input inputType={"text"} inputPlaceholder={"search"} /> 
                            </div>
                            <ProductLogo imgURL={"productlogo.png"}/>
                            <div className="menu d-flex">
                                <ul className="d-flex">
                                    <MenuItem key={"cart"} className="capitalize"  icon='cart' itemTitle="cart" onClick={(e)=> this.openCart(e)} id="cart-item"/>
                                    <MenuItem key={"wish"} className="capitalize"  icon='heart' itemTitle="wishlist"/>
                                    <MenuItem key={"login"} className="capitalize"  icon='user' itemTitle="login"/>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header__section__three">
                        <div className="container d-flex">
                            <ul className="d-flex">
                            { navL.map((menuitem,index) => 
                                <MenuItem key={index} className="capitalize"  itemTitle={menuitem}/>   
                            )}
                            </ul>
                        </div>
                    </div>
                    <div className="container breadCrumbs d-flex">
                    { bread_crumbs.map((el) => 
                            <div><a className="capitalize" href="#">{el}</a></div>  
                        )}
                    </div>
                    
                </header>
            )}        
}




Header.propTypes = {
    navArr: PropTypes.array.isRequired,
    crumbsArr:PropTypes.array,
  };

export default Header;


