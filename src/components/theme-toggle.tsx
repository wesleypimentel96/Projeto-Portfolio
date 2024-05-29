"use client"

import * as React from "react"
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className=" border-primary text-primary dark:text-white hover:bg-primary hover:text-white">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 curso" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">

                <DropdownMenuItem onClick={() => setTheme("light")} className=" cursor-pointer text-primary hover:bg-primary hover:text-white">
                    <SunIcon className=" mr-2" />Claro
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme("dark")} className=" cursor-pointer text-primary hover:bg-primary hover:text-white">
                    <MoonIcon className=" mr-2" /> Escuro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className=" cursor-pointer text-primary hover:bg-primary hover:text-white">
                    <DesktopIcon className=" mr-2" />Sistema
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
