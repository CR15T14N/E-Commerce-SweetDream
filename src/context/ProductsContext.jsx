import { createContext, useState, useEffect } from "react";
import { initialProduct } from "../services/initialProduct";
import { getData } from "../services/productService";
export const  ProductsContext = createContext(initialProduct); //estas son las caracteristicas del producto que va a estar en el contexto y al cual vamos a acceder.

export const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, updateCart] = useState([]);
    const addToCart = prod => {
        updateCart(prod)
    };

    const fetchData = async () => {
        try {
            setError(null);
            setIsLoading(true);
            const data = await getData ('products');
            setProducts(data);
        } catch (error) {
            console.error(error);
            setError(error.message);
        }finally {
            setIsLoading(false);
        };
    };
    useEffect(()=> {
        fetchData();
    }, []);
    return (
        <ProductsContext.Provider value={{products, isLoading, error, cart, addToCart}}>
            {children}
        </ProductsContext.Provider>
    )
};