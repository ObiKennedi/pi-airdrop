"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.scss";

const Header = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo-container">
                <Image src="/icons/logo.webp" width={150} height={60} alt="logo" />
            </div>

            <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <Image src="/icons/menu.png" width={30} height={30} alt="menu" />
            </button>

            <nav className={`nav-container ${menuOpen ? "open" : ""}`}>
                <ul className="nav-list">
                    <li>
                        <Link href="/">Pi Blockchain</Link>
                        <ul className="dropdown">
                            <li>Pi Node</li>
                            <li>Pi Block Explorer</li>
                            <li>Pi White Paper</li>
                            <li>Roadmap</li>
                        </ul>
                    </li>
                    <li>
                        <Link href="https://minepi.com/developers/">Developers</Link>
                        <ul className="dropdown">
                            <li>New Developers</li>
                            <li>Why Build on Pi</li>
                            <li>Pi Hackathon</li>
                            <li>Developer Ambassador</li>
                        </ul>
                    </li>
                    <li>
                        <Link href="https://minepi.com/about/">About Us</Link>
                    </li>
                    <li>
                        <Link href="https://minepi.com/blog/">Blog</Link>
                    </li>
                    <li>
                        <Link href="/support">Support</Link>
                    </li>
                </ul>
            </nav>

            <div className="social-container">
                <ul className="social-list">
                    <li>
                        <Image src="/icons/x.png" width={30} height={30} alt="x" />
                    </li>
                    <li>
                        <Image src="/icons/facebook.png" width={30} height={30} alt="facebook" />
                    </li>
                    <li>
                        <Image src="/icons/youtube.png" width={30} height={30} alt="youtube" />
                    </li>
                    <li>
                        <Image src="/icons/instagram.png" width={30} height={30} alt="instagram" />
                    </li>
                </ul>
            </div>

            <div className="search-icon-container" onClick={() => setSearchBar(!searchBar)}>
                <Image src="/icons/search.png" width={30} height={30} alt="search" />
            </div>

            {searchBar && (
                <form className="search-form">
                    <input type="text" name="search" placeholder="Search" />
                    <button onClick={() => setSearchBar(false)}>X</button>
                </form>
            )}
        </header>
    );
};

export default Header;