import Image from "next/image";
import Link from "next/link";


export default function Navigation() {

    return (
        <div className="navigation-container col-span-12">
            <div className="top-navigation">
                <Link href="/"><div className="logo"></div></Link>
            </div>
            <ul>
                <li>
                    <Link className="underline-hover" href="/">Home</Link>
                </li>
                <li>
                    <Link className="underline-hover" href="/products">Products</Link>
                </li>
                <li>
                    <Link className="underline-hover" href="/catalog">Catalog</Link>
                </li>
                <li>
                    <Link className="underline-hover" href="/about">About</Link>
                </li>
                <li>
                    <Link className="underline-hover" href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}