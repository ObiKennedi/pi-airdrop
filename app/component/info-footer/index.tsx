import Image from "next/image"
import Link from "next/link"

import "./globals.scss"

const InfoFooter = () => {
    return (
        <div className="info">
            <Image
                src="/icons/info-footer.webp"
                width={400}
                height={600}
                alt="info"
            />
            <div>
                <h2>Download the mobile app to start mining today! Join now</h2>
                <p>Keep your money! Mining Pi is free. All you need is an invitation from an existing trusted member on the network. If you have an invitation you can download the mobile app below.</p>
                <p>
                    <Link href={'/https://play.google.com/store/apps/details?id=com.blockchainvault'}>
                        <Image
                            src={"/icons/google_play.webp"}
                            width={300}
                            height={150}
                            alt="google"
                        />
                    </Link>
                    <Link href={"https://itunes.apple.com/us/app/pi-network/id1445472541"}>
                        <Image 
                            src={"/icons/apple_store.webp"}
                            width={300}
                            height={150}
                            alt="apple"
                        />
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default InfoFooter