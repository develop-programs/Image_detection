"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placehlder-vanishing";
import Image from "next/image";
import React from "react";

export default function page() {
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

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <div className="relative h-[40rem] inset-0 grid place-content-center px-4">
        <div className="z-50">
          <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-white font-semibold">
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
