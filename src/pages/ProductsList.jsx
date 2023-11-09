import { useContext } from "react";
import "./ProductsList.css";
import { ProductsContext } from "../context/ProductsContext";
import Header from "../components/Header";
import Products from "../components/Products"

const ProductsList = () => {
    const {products, isLoading, error} = useContext(ProductsContext);
    console.log(products, isLoading, error);

if(isLoading)
    return (
        <div>
            <h2>Loading...</h2>
        </div>
    );
if (error) 
    return (
        <div>
        <h2>{error}</h2>
        </div>
    );
 
return (

    products?.length && (
        <>

        <Header />

        <main className="main">
        {products.map((p) => (
            <Products key={p.id} prod={p} />
            ))}
        </main>

        </>
    ))    
}

export default ProductsList