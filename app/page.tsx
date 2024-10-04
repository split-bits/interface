import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Head>
        <title>CryptoExpense - Track Expenses, Unleash Crypto Power</title>
        <meta name="description" content="Revolutionize your expense tracking with blockchain technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* <Image src="/logo.png" alt="Splitbits Logo" width={40} height={40} /> */}
          <span className="ml-2 text-xl font-bold">Splitbits</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-purple-400">Join our waiting list</a></li>
            {/* <li><a href="#pricing" className="hover:text-purple-400">Product</a></li>
            <li><a href="#about" className="hover:text-purple-400">Contact</a></li> */}
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
            Revolutionize your expense tracking with blockchain technology. Secure,
            transparent, and effortless management of your finances in the Web3 era.
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
    </div>
  );
};

export default LandingPage;