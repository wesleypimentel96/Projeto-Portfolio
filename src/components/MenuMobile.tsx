import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";



export const MenuMobile = () => {



    return (
        <div className="block md:hidden">
            <Sheet>
                <SheetTrigger><RxHamburgerMenu className="text-2xl text-primary" /></SheetTrigger>
                <SheetContent>
                    <nav className="flex flex-col items-center">
                        <SheetClose asChild><Link href='/'><Button variant='link' className=" text-sm uppercase">Home</Button></Link></SheetClose>
                        <SheetClose asChild><Link href='/sobre'><Button variant='link' className=" text-sm uppercase">Sobre mim</Button></Link></SheetClose>
                        <SheetClose asChild><Link href='/portfolio'><Button variant='link' className=" text-sm uppercase">Portfólio</Button></Link></SheetClose>
                        <SheetClose asChild><Link href='/skills'><Button variant='link' className=" text-sm uppercase">Skills</Button></Link></SheetClose>
                        <SheetClose asChild><Link href='/contato'><Button variant='link' className=" text-sm uppercase">Contato</Button></Link></SheetClose>
                        <ThemeToggle />
                    </nav>
                </SheetContent>
            </Sheet>
        </div>

    )
};