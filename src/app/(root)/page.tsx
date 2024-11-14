"use client";
import { Button } from '@/components/ui/button'
import { PlaceholdersAndVanishInput } from "@/components/ui/placehlder-vanishing"
import Link from 'next/link';
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
    <div
      className="relative h-[50rem]"
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "content-box",
        backgroundClip: "border-box",
      }}
    >
      <div className="h-full inset-0 grid place-content-center px-4">
        <div className="z-50 space-y-6">
          <h2 className="text-xl text-center sm:text-5xl font-black z-10 text-white">
            Know everything about your image
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
          <div className='flex items-center justify-center gap-3'>
            {
              [
                {
                  icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.625 84.3748H46.875V90.6248H53.125L53.125 9.37475H46.875L46.875 15.6247H15.625L15.625 84.3748ZM21.875 78.1248L21.875 21.8747H46.875L46.875 78.1248H21.875ZM59.375 84.3748L84.375 84.3748L84.375 15.6247L59.375 15.6247V21.8747H65.625V28.1247H71.875V21.8747H78.125V28.1247H71.875V34.3747H78.125V40.6247H71.875V46.8748H78.125V53.1248H71.875V59.3748H78.125V65.6248H71.875V71.8748H78.125V78.1248H71.875V71.8748H65.625V78.1248H59.375V84.3748ZM65.625 71.8748V65.6248H59.375V71.8748H65.625ZM65.625 65.6248H71.875V59.3748H65.625V65.6248ZM65.625 59.3748V53.1248H59.375L59.375 59.3748L65.625 59.3748ZM65.625 53.1248H71.875V46.8748H65.625V53.1248ZM65.625 46.8748V40.6247H59.375V46.8748H65.625ZM65.625 40.6247H71.875V34.3747H65.625V40.6247ZM65.625 34.3747V28.1247H59.375V34.3747H65.625Z" fill="black" />
                  </svg>
                  , text: 'Bg remover'
                  , href: "/bgremover"
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                    <path d="M 3 3 L 3 5 L 5 5 L 5 3 L 3 3 z M 7 3 L 7 5 L 9 5 L 9 3 L 7 3 z M 11 3 L 11 5 L 13 5 L 13 3 L 11 3 z M 15 3 L 15 5 L 17 5 L 17 3 L 15 3 z M 19 3 L 19 5 L 21 5 L 21 3 L 19 3 z M 3 7 L 3 9 L 5 9 L 5 7 L 3 7 z M 11.34375 7 L 13.464844 9.1210938 L 11.585938 11 L 5 11 C 3.9069372 11 3 11.906937 3 13 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 11 21 C 12.093063 21 13 20.093063 13 19 L 13 12.414062 L 14.878906 10.535156 L 17 12.65625 L 17 7 L 11.34375 7 z M 19 7 L 19 9 L 21 9 L 21 7 L 19 7 z M 19 11 L 19 13 L 21 13 L 21 11 L 19 11 z M 5 13 L 11 13 L 11 19 L 5 19 L 5 13 z M 19 15 L 19 17 L 21 17 L 21 15 L 19 15 z M 15 19 L 15 21 L 17 21 L 17 19 L 15 19 z M 19 19 L 19 21 L 21 21 L 21 19 L 19 19 z"></path>
                  </svg>,
                  text: 'Image resizer'
                  , href: "/resizer"
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 1C13.7761 1 14 1.22386 14 1.5V2H14.5C14.7761 2 15 2.22386 15 2.5C15 2.77614 14.7761 3 14.5 3H14V3.5C14 3.77614 13.7761 4 13.5 4C13.2239 4 13 3.77614 13 3.5V3H12.5C12.2239 3 12 2.77614 12 2.5C12 2.22386 12.2239 2 12.5 2H13V1.5C13 1.22386 13.2239 1 13.5 1ZM3.5 3C3.77615 3 4 3.22386 4 3.5V4H4.5C4.77615 4 5 4.22386 5 4.5C5 4.77614 4.77615 5 4.5 5H4V5.5C4 5.77614 3.77615 6 3.5 6C3.22386 6 3 5.77614 3 5.5V5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H3V3.5C3 3.22386 3.22386 3 3.5 3ZM12.5 12C12.7761 12 13 11.7761 13 11.5C13 11.2239 12.7761 11 12.5 11H12V10.5C12 10.2239 11.7761 10 11.5 10C11.2239 10 11 10.2239 11 10.5V11H10.5C10.2239 11 10 11.2239 10 11.5C10 11.7761 10.2239 12 10.5 12H11V12.5C11 12.7761 11.2239 13 11.5 13C11.7761 13 12 12.7761 12 12.5V12H12.5ZM8.72956 4.56346C9.4771 3.81592 10.6891 3.81592 11.4367 4.56347C12.1842 5.31102 12.1842 6.52303 11.4367 7.27058L4.26679 14.4404C3.51924 15.1879 2.30723 15.1879 1.55968 14.4404C0.812134 13.6928 0.812138 12.4808 1.55969 11.7333L8.72956 4.56346ZM8.25002 6.4572L2.26679 12.4404C1.90977 12.7974 1.90977 13.3763 2.26679 13.7333C2.62381 14.0903 3.20266 14.0903 3.55968 13.7333L9.54292 7.75009L8.25002 6.4572ZM10.25 7.04299L10.7295 6.56347C11.0866 6.20645 11.0866 5.6276 10.7296 5.27057C10.3725 4.91355 9.79368 4.91355 9.43666 5.27057L8.95713 5.7501L10.25 7.04299Z" fill="#212121" />
                  </svg>
                  ,
                  Ṅtext: 'Ai Generator'
                  , href: "/ImageGenerator"
                }, {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 13.332031 4 C 8.1895418 4 4 8.1895418 4 13.332031 L 4 36.667969 C 4 41.810458 8.1895418 46 13.332031 46 L 36.667969 46 C 41.810458 46 46 41.809388 46 36.666016 L 46 13.332031 C 46 8.1895418 41.809388 4 36.666016 4 L 13.332031 4 z M 13.332031 6 L 36.666016 6 C 40.728643 6 44 9.2705212 44 13.332031 L 44 36.666016 C 44 40.728643 40.729479 44 36.667969 44 L 13.332031 44 C 9.2705211 44 6 40.729479 6 36.667969 L 6 13.332031 C 6 9.2705211 9.2705212 6 13.332031 6 z M 33.980469 14.990234 A 1.0001 1.0001 0 0 0 33.869141 15 L 27 15 A 1.0001 1.0001 0 1 0 27 17 L 31.585938 17 L 26.585938 22 L 18 22 C 16.35503 22 15 23.35503 15 25 L 15 32 C 15 33.64497 16.35503 35 18 35 L 25 35 C 26.64497 35 28 33.64497 28 32 L 28 23.414062 L 33 18.414062 L 33 23 A 1.0001 1.0001 0 1 0 35 23 L 35 16.126953 A 1.0001 1.0001 0 0 0 33.980469 14.990234 z M 18 24 L 26 24 L 26 32 C 26 32.56503 25.56503 33 25 33 L 18 33 C 17.43497 33 17 32.56503 17 32 L 17 25 C 17 24.43497 17.43497 24 18 24 z"></path>
                  </svg>,
                  text: 'Image upscaler'
                  , href: "/upscaler"
                }].map((item, i) => (
                  <Link href={item.href} key={i} legacyBehavior passHref>
                    <Button variant="secondary" className='text-xs'>
                      {item.icon}
                      {item.text}
                    </Button>
                  </Link>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
