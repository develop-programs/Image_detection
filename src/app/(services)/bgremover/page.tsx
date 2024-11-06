import React from "react";
import { Compare } from "@/components/ui/compare";
import { Button } from "@/components/ui/button";

export default function page() {
    return (
        <div className="h-screen grid place-content-center">
            <div className="flex gap-80">
                <Compare
                    firstImage="https://assets.aceternity.com/code-problem.png"
                    secondImage="https://assets.aceternity.com/code-solution.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                    slideMode="hover"
                />
                <div className=" h-full grid place-content-center">
                    <Button variant="default" size="default" className="p-6 text-xl" asChild>
                        <label htmlFor="bgremove">
                            Upload Image
                        </label>
                    </Button>
                    <input type="file" id="bgremove" hidden />
                    <span>Or drag a file</span>
                </div>
            </div>
        </div>
    );
}
