import React from "react";
import images from "../constant/images";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const handleClick = () => {
    // Navigate to another page
    router.push("/walletconnect");
  };
  return (
    <nav className="bg-[#121214] px-10 py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* First Div: Logo and Text */}
        <div className="flex items-center space-x-2">
          <Image src={images.logo} alt="Logo" className="h-8 w-8" />
          <span className="text-2xl text-white font-bold">Sonic</span>
        </div>

        {/* Second Div: Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/walletconnect" className="text-white hover:text-white">
            Staking
          </a>
          <a href="/walletconnect" className="text-white hover:text-white">
            Benefits
          </a>
          <a href="/walletconnect" className="text-white hover:text-white">
            Ecosystem
          </a>
          
          <a href="/walletconnect" className="text-white hover:text-white">
            Roadmap
          </a>
        </div>

        {/* Third Div: Button */}
        <div>
          <button onClick={handleClick} className="bg-transparent text-white text-lg px-8 py-2 rounded-3xl hover:bg-[#362318] border-white border-[1px]">
            Connect a Wallet
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {/* <div className="md:hidden">
      <div className="flex flex-col space-y-2 mt-2 items-center gap-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">Link 1</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Link 2</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Link 3</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Link 4</a>
      </div>
    </div> */}
    </nav>
  );
}

export default Navbar;
