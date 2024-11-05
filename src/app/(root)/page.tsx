"use client";
import { Button } from '@/components/ui/button'
import { PlaceholdersAndVanishInput } from "@/components/ui/placehlder-vanishing";
import React from 'react'

export default function page() {

  const placeholders = [
    "Describe a futuristic cityscape at sunset",
    "A serene beach with crystal clear water",
    "A bustling market in a medieval town",
    "A majestic mountain range under a starry sky",
    "A cozy cabin in a snowy forest",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className='h-[40rem]'>
      <div className="relative h-[40rem] inset-0 grid place-content-center px-4">
        <div className="z-50 space-y-6">
          <h2 className="text-xl text-center sm:text-5xl text-white font-semibold">
            Generate anything you want
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
          <div className='flex items-center justify-center gap-3'>
            {
              ["Background remover", "Image resizer", "Ai Image Generator", "Image Upscaler"].map((item, i) => (
                <Button variant="secondary" key={i} className='text-xs'>
                  {item}
                </Button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
