"use client";
import React from 'react'
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function TopUp() {
    const [amount, setAmount] = React.useState(0);

    return (
        <div className='px-52 space-y-8 py-12'>
            <span>Instant TopUp</span>
            <div className='flex justify-start space-x-2 gap-3'>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select credits" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">10</SelectItem>
                        <SelectItem value="dark">50</SelectItem>
                        <SelectItem value="system">100</SelectItem>
                    </SelectContent>
                </Select>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon">-</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>- 10 credits</span>
                        </TooltipContent>
                    </Tooltip>
                    <Button variant="outline" size="default" contentEditable={true} suppressContentEditableWarning onBlur={(event: React.FocusEvent<HTMLSpanElement>) => {
                        const newAmount = parseInt(event.target.innerText);
                        if (!isNaN(newAmount)) {
                            setAmount(newAmount);
                        }
                    }}>{amount}</Button>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon">+</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>+ 10 credits</span>
                        </TooltipContent>
                    </Tooltip>
                    <Button>TopUp</Button>
                    <Button variant="destructive" onClick={() => {
                        setAmount(0);
                    }}>Clear</Button>
                </TooltipProvider>
            </div>
        </div>
    )
}
