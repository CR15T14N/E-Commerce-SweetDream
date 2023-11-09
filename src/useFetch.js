import { useState, useEffect } from "react";

function useFetch () {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((products) => setProducts(products))
            .catch((error) => setError(error))
            .finally (() => setLoading(false));
    },[])
    
}

export { products, loading, error };