import React from "react";
import { Compare } from "@/components/ui/compare";
import { Button } from "@/components/ui/button";

export default function page() {
    return (
        <div>
            <div className="h-screen grid place-content-center">
                <div className="flex gap-80">
                    <Compare
                        firstImage="/senku_original.jpg"
                        secondImage="/senku_removebg.png"
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                        slideMode="hover"
                    />
                    <div className=" h-full grid place-content-center text-center gap-12">
                        <Button variant="default" size="default" className="p-6 text-xl" asChild>
                            <label htmlFor="bgremove">
                                Upload Image
                            </label>
                        </Button>
                        <input type="file" id="bgremove" hidden />
                        <span className="text-lg font-semibold">Or drop a file</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <span className="text-5xl font-black text-slate-700">Superb Quality</span>
            </div>
        </div>
    );
}
