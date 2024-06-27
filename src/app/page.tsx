'use client'

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import Avatar from '../../public/avatar.png';
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Salutation } from "@/components/Salutation";

import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Home = () => {

  const [typeEffect] = useTypewriter({
    words: ['Wesley Pimentel', 'Front-end Developer', 'Full-stack Developer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,



  })

  return (
    <main className="h-[88vh] flex flex-col justify-center items-center container md:flex-row md:justify-between">
      <div className="flex flex-col items-center justify-center w-full md:w-60 lg:w-80">
        <Salutation emoje="👏" salutation="Saudações" />
        <h2 className=" mt-5 mb-5 text-center flex justify-center"><span className=" text-primary font-semibold text-[1.4rem] md:text-xl lg:text-2xl w-full h-10 uppercase flex-1">{typeEffect}</span></h2>
        <div className="flex gap-3 mb-5">

          <div className="  rounded-full p-2 bg-[#FF914D]  cursor-pointer hover:opacity-90 hover:scale-110 transition-all duration-500">
            <Link href='https://github.com/wesleypimentel96 ' target="_blank">
              <FaGithub className=" text-white text-xl" />
            </Link>

          </div>

          <div className=" bg-[#FF914D] rounded-full p-2 cursor-pointer hover:opacity-90 hover:scale-110 transition-all duration-500">
            <Link href='https://www.linkedin.com/in/wesleypimentel96/' target="_blank">
              <BiLogoLinkedin className="text-white text-xl" />
            </Link>

          </div>

          <div className=" bg-[#FF914D]  rounded-full p-2 cursor-pointer hover:opacity-90 hover:scale-110 transition-all duration-500">
            <Link href='https://www.linkedin.com/in/wesleypimentel96/' target="_blank">
              <FaInstagram className="text-white text-xl" />
            </Link>

          </div>

          <div className=" bg-[#FF914D] rounded-full p-2 cursor-pointer hover:opacity-90 hover:scale-110 transition-all duration-500">
            <Link href='https://www.linkedin.com/in/wesleypimentel96/' target="_blank">
              <SiMinutemailer className="text-white text-xl" />
            </Link>

          </div>

        </div>
      </div>

      <div className=" hidden md:block md:w-60 lg:w-80 xl:w-96 rounded-full w-96 bg-primary overflow-hidden shadow-lg hover:scale-110 transition-all duration-1000">
        <Image
          src={Avatar}
          alt="Foto de Avatar"
          className=" rounded-full"
        />
      </div>

      <div className="flex flex-col items-center">
        <Link href='https://drive.google.com/file/d/18CiI3Idj9qgwyy7KDCP6T1jFQ3mgfWuv/view' target="_blank">
          <Button variant='outline' className=" border-primary text-primary hover:bg-primary hover:text-white mb-5 transition-all duration-700">Baixar CV <HiDownload className="ml-2 text-lg" /></Button>
        </Link>

        <WhatsAppButton/>
      </div>
    </main>
  )
};

export default Home;