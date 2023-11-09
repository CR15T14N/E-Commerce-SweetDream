import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return(
        <nav>
            <NavLink className={"a"} to={"/"}>HOME</NavLink>
            <NavLink className={"a"} to={"/products"}>PRODUCTS</NavLink>
            <NavLink className={"a"} to={"/cart"}>CART</NavLink>
        </nav>
    );
}

export default NavBar;