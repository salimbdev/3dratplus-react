import React, {useEffect, useState} from "react";
import ProductsView from "../view/ProductsView";


export default function ProductsController(){

    const [products, setProducts] = useState(null);
    const backUrl = "http://127.0.0.1:8081/api/public";

    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts(){
        fetch(`${backUrl}/products`)
            .then(response => response.json())
            .then(json => setProducts(json));
    }

    return (
        <div>
            <ProductsView products={products} setProducts={(data) => setProducts(data)} />
        </div>
    )
}