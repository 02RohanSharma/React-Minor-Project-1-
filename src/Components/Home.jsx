import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { ProductContext } from "../utils/Context";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import api from "../utils/Axios";

export default function Home() {
    const [products] = useContext(ProductContext);
    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);

    const [filteredProducts, setFilteredProducts] = useState(null);

    const getCategoryData = async () => {
        try {
            const { data } = await api.get(`/products/category/${category}`);
            setFilteredProducts(data);
            // console.log(filteredProducts);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!filteredProducts || category == "undefined") {
            setFilteredProducts(products);
        }
        if (category != "undefined") {
            getCategoryData();
        }
    }, [category, products]);


    return products ? (
        <>
            <Navbar />
           
            <section className="min-h-screen w-[82%] p-15 flex flex-wrap justify-center gap-10">
                {filteredProducts && filteredProducts.map((p, id) => (
                    <Link key={id} to={`/details/${p.id}`} className="h-[13rem] w-[12rem] rounded border flex flex-col p-2 justify-between cursor-pointer">
                        <div
                            className="h-[50%] w-[50%] bg-cover self-center mb-2 hover:scale-105 flex flex-col justify-between"
                            style={{ backgroundImage: `url(${p.image})` }}
                        ></div>

                        <div className="text-sm">
                            <p>{p.title}</p>
                            <p><b>$ </b> {p.price}</p>
                        </div>
                    </Link>
                ))}
            </section>
        </>

    ) : (<Loading />);

}