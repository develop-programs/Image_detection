"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placehlder-vanishing";
import Image from "next/image";
import React from "react";

export default function Page() {
  const [input, setInput] = React.useState<string>("");

  const placeholders = [
    "Describe a futuristic cityscape at sunset",
    "A serene beach with crystal clear water",
    "A bustling market in a medieval town",
    "A majestic mountain range under a starry sky",
    "A cozy cabin in a snowy forest",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="h-[80vh]" style={{
      position: "relative",
      backgroundImage: "url('./Designer.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-[1px]" />
      <div className="relative h-full inset-0 grid place-content-center px-4">
        <div className="z-50">
          <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl font-semibold">
            Generate anything you want
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      {input && <Image src={input} width={500} height={500} alt="Uploaded Image" />}
    </div>
  );
}
