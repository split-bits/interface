"use client";
import React from "react";
import Head from "next/head";

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            <Head>
                <title>
                    CryptoExpense - Track Expenses, Unleash Crypto Power
                </title>
                <meta
                    name="description"
                    content="Revolutionize your expense tracking with blockchain technology"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                    {/* <Image src="/logo.png" alt="Splitbits Logo" width={40} height={40} /> */}
                    <span className="ml-2 text-xl font-bold">Splitbits</span>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        {/* Trigger the form popup */}
                        <li>
                            <label
                                htmlFor="waitlist-modal"
                                className="hover:text-purple-400 cursor-pointer"
                            >
                                Join our waiting list
                            </label>
                        </li>
                    </ul>
                </nav>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Connect Wallet
                </button>
            </header>

            <main className="flex-grow flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        Track Expenses, Unleash Crypto Power
                    </h1>
                    <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                        Revolutionize your expense tracking with blockchain
                        technology. Secure, transparent, and effortless
                        management of your finances in the Web3 era.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">
                            Get Started
                        </button>
                        <button className="bg-transparent hover:bg-gray-700 text-white font-semibold py-3 px-6 border border-white rounded-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </main>

            {/* Popup Form */}
            <input
                type="checkbox"
                id="waitlist-modal"
                className="modal-toggle hidden"
            />
            <div className="modal fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 hidden">
                <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg relative w-full max-w-lg">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                    >
                        <input
                            type="hidden"
                            name="access_key"
                            value="8f346795-f73d-420c-94c3-9e2f1063b322"
                        />
                        <label className="block mb-2">Enter your email:</label>
                        <input
                            type="email"
                            id="userEmail"
                            name="user_email"
                            required
                            placeholder="Your Email Address"
                            className="border p-2 w-full mb-4 rounded-lg"
                        />
                        <input type="checkbox" name="botcheck" hidden />
                        <div className="flex justify-end">
                            <label
                                htmlFor="waitlist-modal"
                                className="bg-gray-500 text-white px-4 py-2 mr-2 rounded cursor-pointer transition duration-300 hover:bg-gray-600"
                            >
                                Close
                            </label>
                            <button
                                type="submit"
                                className="bg-purple-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-purple-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                #waitlist-modal:checked ~ .modal {
                    display: flex;
                }
            `}</style>

            {/* Modal Styling */}
            <style jsx>{`
                #waitlist-modal:checked ~ .modal {
                    display: flex;
                }
            `}</style>
        </div>
    );
};

export default LandingPage;
