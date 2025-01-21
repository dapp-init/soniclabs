"use client";
import React, { MouseEvent, useState } from "react";
import { images, data } from "@/constant";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

import loading from "../loading";

function OtherWallets() {
  interface Wallet {
    imageUrl: StaticImageData;
    title: string;
  }

  const [isLoading, setIsLoading] = useState(false);

  const Card: React.FC<Wallet> = ({ imageUrl, title }) => {
    const router = useRouter();

    const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
        // Navigate to another page with the title from the card clicked
        router.push(`/input-page?title=${encodeURIComponent(title)}`);
      }, 4000);
    };

    return (
      <div
        className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
        onClick={handleCardClick}
      >
        <Image src={imageUrl} alt={title} className="w-full rounded-t-lg" />
        <div className="p-4">
          <p className="flex items-center justify-center font-bold">{title}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md h-96 overflow-y-auto ">
        {/* <h2 className="flex text-xl font-bold mb-4 items-center justify-center">
          Connect Wallet
        </h2> */}

        {/* Wallet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-3 mt-8 p-8">
          {data.wallets.map((wallet, index) => (
            <Card key={index} title={wallet.title} imageUrl={wallet.imgUrl} />
          ))}
        </div>

        {isLoading && loading()}
      </div>
    </div>
  );
}

export default OtherWallets;
