import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";


export default function Navbar() {

    const [products] = useContext(ProductContext);
    let distictCategory = products && products.reduce((newVal, currVal) => [...newVal, currVal.category], []);

    distictCategory = [...new Set(distictCategory)];

    const color = () => {
        const randomNum = () => ((Math.random() * 255).toFixed());
        return `rgba(${randomNum()},${randomNum()},${randomNum()},0.8)`
    };


    return (

        <nav className="bg-zinc-200 min-h-screen w-[18%] flex flex-col items-center pt-10">
            <Link to={"/"} className="px-3 py-1 rounded bg-green-500 text-white cursor-pointer mb-5">Home</Link>

            <a className="px-3 py-1 border rounded text-blue-400 cursor-pointer" href="/create">Add New Product</a>
            
            <hr className="w-[80%] mt-4 mb-2" />
            <h3 className="font-semibold text-l mb-2 w-[80%]">Category Filter</h3>

            <div className="w-[80%] flex flex-col">
                {distictCategory.map((category, idx) => (
                    <Link to={`?category=${category}`} className="mx-2 mb-2 cursor-pointer" key={idx}>
                        <span style={{ backgroundColor: color() }} className={"h-2 w-2 bg-yellow-500 inline-block rounded-full mr-2"} />
                        {category}
                    </Link>
                ))}

            </div>

        </nav>

    )
}
