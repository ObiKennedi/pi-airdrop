import Image from "next/image"
import Board from "../board"

import "./globals.scss"

const WriteUp = () => {
    return (
        <div className="write-up">
            <div>
                <p>Mining crypto is hard.</p>
                <p>Investing in crypto is risky.</p>
                <p>Too many of us are left out of the cryptocurrency revolution…</p>
            </div>
            <div>
                <div>
                    <p>Pi makes crypto mining easy.</p>
                    <p>Breakthrough tech allows you to mine Pi on your phone without draining your battery.</p>
                    <button>Learn The Tech Behind Pi</button>
                </div>
                <Image
                    src={"/icons/write-up.webp"}
                    width={500}
                    height={500}
                    alt="write-up"
                />
            </div>
            <div>
                <Board 
                    header="Decentralized" 
                    writeUp="Secure, Immutable, non-counterfeitable and interoperable digital money."
                />
                <Board 
                    header="Mobile First"
                    writeUp="Works on your mobile phone and does not drain your battery."
                />
                <Board 
                    header="User & Planet-Friendly"
                    writeUp="Easy to use, secure at scale, without the massive electrical waste."
                />
            </div>
        </div>
    )
}

export default WriteUp