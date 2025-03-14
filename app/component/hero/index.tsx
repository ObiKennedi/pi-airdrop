"use client"

import Image from "next/image";
import "./globals.scss";
import { useRouter } from 'next/navigation'; 

const Hero = () => {
    const router = useRouter(); 

    const handleActivateWallet = () => {

        router.push('/connect'); 
    };

    return (
        <div className="hero">
            <div>
                <div>
                    <p>The First Digital Currency You Can Mine on Your Phone</p>
                    <p>
                        Start mining Pi cryptocurrency today with our free, energy-light mobile app!
                    </p>
                    <button className="hero-button" onClick={handleActivateWallet}>
                        Activate Wallet
                    </button>
                </div>
                <div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/0" 
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <Image
                src={"/icons/background.jpg"}
                width={1000}
                height={1000}
                alt="background"
            />
        </div>
    );
};

export default Hero;