import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function CartSummary() {
    const {cart} = useContext(ProductsContext);
    return (
     <Link to={"/cart"}>
        <MdShoppingCart />
        </Link>
    );
}

export default CartSummary;
