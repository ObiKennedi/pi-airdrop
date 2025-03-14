import Image from "next/image"
import Link from "next/link"

import "./globals.scss"

const WalletHeader = () =>{
    return(
        <header className="wallet-header">
            <Link href={"/"}>
                <p>Home</p>
                <Image 
                    src={"/icons/logo.png"} 
                    width={50} 
                    height={50} 
                    alt="logo"
                />
            </Link>
        </header>
    )
}

export default WalletHeader