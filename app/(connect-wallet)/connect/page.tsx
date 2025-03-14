import Image from "next/image";
import Link from "next/link"

import "./globals.scss"

const Connect = () => {
    return (
        <div className="wallet">
            <Image src={"/icons/logo.png"} width={500} height={500} alt="logo" />
            <ul>
                <li>
                    <Link href={"/wallet"}>
                        <Image
                            src={"/icons/wallet.jpg"}
                            width={300}
                            height={300}
                            alt="wallet"
                        />
                        <p>Wallet</p>
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        <Image
                            src={"/icons/mine.jpg"}
                            width={300}
                            height={300}
                            alt="wallet"
                        />
                        <p>Mine</p>
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        <Image
                            src={"/icons/blockchain.jpg"}
                            width={300}
                            height={300}
                            alt="wallet"
                        />
                        <p>Block chain</p>
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        <Image
                            src={"/icons/develope.jpg"}
                            width={300}
                            height={300}
                            alt="wallet"
                        />
                        <p>Develope</p>
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        <Image
                            src={"/icons/kyc.jpg"}
                            width={300}
                            height={300}
                            alt="wallet"
                        />
                        <p>KYC</p>
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        <Image
                            src={"/icons/fireside.jpg"}
                            width={300}
                            height={300}
                            alt="wallet"
                        />
                        <p>Fireside</p>
                    </Link>
                </li>
            </ul>
            <button>Explore the Testnet Ecosystem</button>
        </div>
    )
}

export default Connect