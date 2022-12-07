import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div className="flex flex-row justify-evenly bg-yellow-800 mt-10 text-yellow-100">
        <div className="flex flex-col">
         <h1 className="text-2xl border-b-2 border-black-100">Contact Us</h1>
            <Link className=" hover:underline">Email</Link>
            <Link className=" hover:underline">Message</Link>
            <Link className=" hover:underline">Live Phone Support</Link>
         </div>
        <div className="flex flex-col  items-center">
         <h1 className="text-2xl border-b-2 border-black-100">Make Money With Us</h1>
            <Link className=" hover:underline">Sell Your Coffee Products</Link>
            <Link className=" hover:underline">Become an Affiliate</Link>
            <Link className=" hover:underline">Become a Deliverer</Link>
        </div>

        <div className="flex items-end flex-col">
         <h1 className="text-2xl border-b-2 border-black-100">Let Us Help You</h1>
            <Link className=" hover:underline">Shipping Rates and Policies</Link>
            <Link className=" hover:underline">Purchase CoffV.I.P for exclusive news and discounts</Link>
            <Link className=" hover:underline">Returns and Replacements</Link>
        </div>
      </div>
    )
}