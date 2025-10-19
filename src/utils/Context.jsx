import axios from "axios";
import { createContext, useEffect, useState } from "react";
import api from "./Axios";

export const ProductContext = createContext();

export default function Context(props) {
    const [products, setProducts] = useState(null);

    const getProducts = async () => {
        try {
            const { data } = await api("/products");
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
}