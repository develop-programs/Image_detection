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
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setInput(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
    setInput(e.target.value);

  };
  return (
    <div>
      <div className="h-[40rem] flex flex-col justify-center items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          Generate anything you want
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
      {input && <Image src={input} width={500} height={500} alt="Uploaded Image" />}
    </div>
  );
}
