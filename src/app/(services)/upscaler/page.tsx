import React from "react";
import { Compare } from "@/components/ui/compare";

export default function page() {
    return (
        <div className="h-screen bg-slate-500 grid place-content-center">
            <Compare
                firstImage="https://assets.aceternity.com/code-problem.png"
                secondImage="https://assets.aceternity.com/code-solution.png"
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                slideMode="hover"
            />
        </div>
    );
}
