import { Link, useParams } from "react-router-dom";
import api from "../utils/Axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Details() {

    const [product, setProduct] = useState(null);

    const { id } = useParams();
    // console.log(id);

    const getSingleProduct = async () => {
        try {
            const { data } = await api.get(`/products/${id}`);
            // console.log(data);
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleProduct();
    }, []);

    return product ? (
        <div className="min-h-screen w-full">
            <section className="h-full w-[40%] pt-10 px-5 flex flex-col gap-5 items-center m-auto">
                <h1 className="text-2xl font-bold text-center">{product.title}</h1>

                <div className="h-[30%] w-[30%]">
                    <img className="h-full w-full bg-fit" src={`${product.image}`} alt="" />
                </div>

                <div className="w-[80%]">
                    <p><b>Description : </b>{product.description}</p>
                    <p className="text-zinc-400">{product.category}</p>
                    <p className="text-red-300">Price : $ {product.price}</p>
                    <p>Rate : {product.rating.rate}</p>
                    <p>Count : {product.rating.count}</p>

                    <div className="flex gap-5 justify-start mt-6">
                        <Link className="border border-blue-500 rounded px-3 py-1 text-blue-500 h-fit">Edit</Link>
                        <Link className="border border-red-500 rounded px-3 py-1 text-red-500 h-fit">Delete</Link>
                        <Link to={"/"} className="px-3 py-1 rounded bg-green-500 text-white cursor-pointer mb-5">Home</Link>
                    </div>
                </div>

            </section>

        </div>

    ) : (<Loading />);
}