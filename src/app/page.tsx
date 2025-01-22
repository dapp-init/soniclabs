"use client";
import Image from "next/image";
import images from "../constant/images";
import TidioChat from "@/components/tidio";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to another page
    router.push("/walletconnect");
  };

  return (
    <div className="bg-black">
      <Navbar />

      {/* header */}
      <div className="w-full bg-[#291f1e]">
        <div className="flex items-center justify-between p-4">
          <Image src={images.header1} alt="Logo" className="h-auto " priority />

        </div>
      </div>

      {/* body */}

      <div className="bg-[#291f1e] flex flex-col items-center justify-center p-10">
        <div className="flex flex-row items-center justify-center p-4">
          <Image
            src={images.img1}
            alt="Logo"
            className="max-w-full max-h-full m-3 "
          />
          <Image
            src={images.img2}
            alt="Logo"
            className="max-w-full max-h-full m-3 "
          />
        </div>
        <div className="flex flex-row  items-center justify-center p-4">
          <Image
            src={images.img3}
            alt="Logo"
            className="max-w-full max-h-full m-3 "
          />
          <Image
            src={images.img4}
            alt="Logo"
            className="max-w-full max-h-full m-3 "
          />
        </div>
      </div>

      {/* //////// */}

      <div className="w-full flex justify-center items-center ">
        <Image
          src={images.phone}
          alt="Logo"
          className="max-w-full max-h-full "
        />
      </div>

      {/* //////// */}

      <div className="w-full bg-black">
        <div className="flex items-center justify-between p-4">
          <div className="flex flex-col">
            <h1 className=" w-1/2 h-auto text-white text-3xl flex items-center justify-center p-3">
              Earn 90% of your app's fees on Sonic. With Fee Monetization,
              developers earn by building apps that boost on-chain traffic.
            </h1>
            <button
              className="bg-[#383533] text-white border-black rounded-xl p-2 w-40"
              onClick={handleClick}
            >
              Learn more
            </button>
          </div>

          <div className="w-1/2 text-white max-w-md h-96 flex items-center justify-center border-none mt-9">
            <Image src={images.imgA} alt="Logo" className="" />
          </div>
        </div>
      </div>

      <div className="w-full bg-black">
        <div className="flex items-center justify-between p-4">
          <div className="flex flex-col">
            <h1 className=" w-1/2 h-auto text-white text-3xl flex items-center justify-center p-3">
              Real sub-second confirmation times Sonic is the fastest settlement
              layer for digital assets with over 10,000 TPS.
            </h1>
            <button
              className="bg-[#383533] text-white border-black rounded-xl p-2 w-40"
              onClick={handleClick}
            >
              Learn more
            </button>
          </div>

          <div className="w-1/2 text-white max-w-md h-96 flex items-center justify-center border-none mt-5">
            <Image src={images.imgB} alt="Logo" className="" />
          </div>
        </div>
      </div>

      {/* //////// */}

      <div className="bg-[#121214] flex items-start justify-start">
        <Image
          src={images.add}
          alt="Logo"
          className="max-w-full max-h-full "
        />
      </div>
      <div className="bg-[#121214] flex items-start justify-start">
        <Image
          src={images.add}
          alt="Logo"
          className="max-w-full max-h-full "
        />
      </div>
      <div className="bg-[#121214] flex items-start justify-start">
        <Image
          src={images.add}
          alt="Logo"
          className="max-w-full max-h-full "
        />
      </div>

      {/* //////// */}

      <div className="flex flex-col mt-7 justify-center items-center gap-2">
        <div className="w-full mt-10 flex justify-center items-center ">
          <Image
            src={images.footer}
            alt="Logo"
            className="max-w-full max-h-full "
          />
        </div>
      </div>

      {/* <TidioChat /> */}

      {/* key features */}
    </div>
  );
}
