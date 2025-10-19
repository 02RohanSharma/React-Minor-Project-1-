import { Link } from "react-router-dom";

export default function Create() {
    return (
        <div className="w-full h-screen text-center space-y-5 pt-10 bg-red-300">
            <h1>Add new Data</h1>

            <Link to={"/"} className="px-3 py-1 rounded bg-green-500 text-white cursor-pointer mb-5">Home</Link>

        </div>
    );
}