import React, { useContext } from "react";
import "./Products.css";
import { useState } from "react";
// import {MdExpandLess, MdExpandMore} from "react-icons/md";
import { ProductsContext } from "../context/ProductsContext";

const Product = ({prod}) => {
    const {addToCart} = useContext(ProductsContext);
    // const [isFullDescription, setIsFullDescription] = useState(false);
    // const handleExpand = () => {
    //     setIsFullDescription(!isFullDescription);
    // };

    return (

    <div className="card" key={prod.id} 
    // style={card}
    >
        <div className="cardInnerContainer">
                <img src={prod.image} alt={prod.title} />

                <div className="footerCard">
                   <div className="cardPriceBtn">
                   <h3>{prod.title}</h3>
                   <p className="cardPrice"> ${prod.price} </p>
                   <button className="cardBtn" onClick={() => addToCart(prod)}>
                    Agregar
                   </button>
                   </div>
                </div>
        </div>











        {/* Esta parte la utilizaremos para cuando se toque el producto y se abra un nuevo componente el cual tenga mas informacion unica de ese producto */}

         {/* {isFullDescription ? (
            <span>
                {prod.title}
                <MdExpandLess
                className="icon-more-less"
                size={27}
                title="more info"
                onClick={handleExpand}
                />
            </span>
        ) : (
            <span>
                {prod.title.slice(0, 40)}...
                <MdExpandMore
                className="icon-more-less"
                size={27}
                title="less info"
                onClick={handleExpand}
                />
            </span>
        )} */}
    </div>
    ) 
} 

export default Product;