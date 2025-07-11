'use client';

import Image from "next/image";
import Link from "next/link";
import burgerMenu from "../../public/images/burger-menu.svg";
import closeIcon from "../../public/images/x-close-icon.svg";
import { useState } from "react";


export default function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="navigation-container col-span-12">
            <button
                className={`burger-icon ${isOpen ? 'visible' : ''}`}
                onClick={toggleMenu}>
                {!isOpen ? <Image
                    src={burgerMenu}
                    alt="Burger Icon"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                /> :
                    ""
                }
            </button>
            <div className="top-navigation">
                <Link href="/"><div className="logo"></div></Link>
            </div>
            <div className="search-icon"></div>
            <ul className="desktop-navigation">
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
            <ul className={`mobile-navigation ${isOpen ? 'visible' : ''}`}>
                {isOpen &&
                    <button className="close-icon" onClick={closeMenu}>
                        <Image
                            src={closeIcon}
                            alt="Burger Icon"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </button>
                }
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