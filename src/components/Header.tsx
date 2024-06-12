'use client'
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import LogoOculos from '../../public/LogoOculos.png';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MenuMobile } from "@/components/MenuMobile";

export const Header = () => {

    return (
        <header className=" container mx-auto h-[5vh]">
            <div className="flex justify-between items-center ">

                <Link href='/' >
                    <div className="flex flex-col items-center cursor-pointer hover:scale-110 transition-all duration-300">
                        <Image
                            src={LogoOculos}
                            alt="Logo Oculos"
                            className=" w-[3rem] relative"
                        />
                        <h1 className="text-primary font-semibold absolute top-[2.2rem] text-sm"><span className="text-[#FF914D] font-semibold ">&lt;</span>WP.CODING<span className="text-[#FF914D] font-semibold text-md">/&gt;</span></h1>
                    </div>
                </Link>

                <nav className="  items-center hidden  md:flex">

                    <Link href='/'><Button variant='link' className=" text-sm uppercase">Home</Button></Link>
                    <Link href='/sobre'><Button variant='link' className=" text-sm uppercase">Sobre mim</Button></Link>
                    <Link href='/portfolio'><Button variant='link' className=" text-sm uppercase">Portfólio</Button></Link>
                    <Link href='/skills'><Button variant='link' className=" text-sm uppercase">Skills</Button></Link>
                    <Link href='/contato'><Button variant='link' className=" text-sm uppercase">Contato</Button></Link>
                    <ThemeToggle/>
                </nav>

                <MenuMobile />

            </div>
        </header>
    )

};