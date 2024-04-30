import React, {useContext, useEffect, useState} from "react";
import ProductsView from "../view/ProductsView";
import {myContext} from "../../index";


export default function ProductsController(props){

    const [products, setProducts] = useState(null);
    const backUrl = "http://127.0.0.1:8081/api/public";
    const [user,] = useContext(myContext);


    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    function fetchProducts(){
        fetch(`${backUrl}/products`)
            .then(response => response.json())
            .then(json => setProducts(json));
    }
    function fetchCategories(){
        fetch(`${backUrl}/categories`)
            .then(response => response.json())
            .then(json => props.setCategories(json));
    }

    function fetchProductsByCategory(categoryId){
        if (categoryId === "0"){
            fetchProducts();
        } else {
            fetch(`${backUrl}/products/category/${categoryId}`)
                .then(response => response.json())
                .then(json => setProducts(json));
        }
    }

    function addProduct(name, description, price, picture, available, brand ,categoriesId){

        const newProduct = {
            name: name,
            description: description,
            price: price,
            picture: picture,
            available: available,
            brand: brand,
            categoriesId: categoriesId
        };

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${user.token}` },
            body: JSON.stringify({
                name: name,
                description: description,
                price: price,
                picture: picture,
                available: available,
                brand: brand,
                categoriesId: categoriesId
            })
        };
        console.log(newProduct)
        fetch(`http://127.0.0.1:8081/api/admin/product`, requestOptions)
            .then(() => fetchProducts());
    }
    return (
        <div>
            <ProductsView products={products}
                          setProducts={(data) => setProducts(data)}
                          categories={props.categories}
                          setCategories={(data) => props.setCategories(data)}
                          fetchProductsByCategory={(categoryId) => fetchProductsByCategory(categoryId)}
                          user={user}
                          addProduct={(name, description, price, picture, available, brand ,categoriesId) => addProduct(name, description, price, picture, available, brand ,categoriesId)}

            />
        </div>
    )
}