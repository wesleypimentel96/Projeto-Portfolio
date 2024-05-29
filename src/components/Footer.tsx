import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { Separator } from "./ui/separator";
import { FaInstagram } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import Link from "next/link";

export const Footer = () => {


    return (
        <>
            <div className=" container">
                <Separator />
                <footer className=" h-[5vh] flex items-center justify-between flex-col md:flex-row">
                    <p className=" text-primary font-normal text-sm flex justify-center items-center p-1">
                        Copyright &copy; Wesley Pimentel 2024
                    </p>

                    <div className="flex text-primary gap-3 text-lg p-1">
                        <Link href='https://github.com/wesleypimentel96?tab=repositories' target="_blank"><FaGithub className=" cursor-pointer hover:opacity-70" /></Link>
                        <Link href='https://www.linkedin.com/in/wesleypimentel96/' target="_blank"><BiLogoLinkedin className=" cursor-pointer hover:opacity-70" /></Link>
                        <Link href='https://www.instagram.com/wesleypimeentel?igsh=dWE3YnAyZ3EwYXBt' target="_blank"><FaInstagram className=" cursor-pointer hover:opacity-70" /></Link>
                        <Link href='mailto:wesley-pimentel@outlook.com' target="_blank"><SiMinutemailer className=" cursor-pointer hover:opacity-70" /></Link>
                    </div>

                </footer>
            </div>
        </>
    )
};