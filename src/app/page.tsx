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


const Home = () => {
  

  return (
    <main className="h-[88vh] flex flex-col justify-center items-center container md:flex-row md:justify-between">
      <div className="flex flex-col items-center">
        <Salutation emoje="👏" salutation="Saudações" />
        <h2 className=" mt-5 mb-5 text-center flex flex-col"><span className=" text-primary font-semibold text-4xl md:text-3xl lg:text-4xl">WESLEY</span> <span className=" text-[#FF914D] font-semibold text-4xl md:text-3xl lg:text-4xl">PIMENTEL</span></h2>
        <h3 className=" text-primary font-normal text-2xl mb-5 md:text-lg lg:text-2xl dark:text-white">Front-end developer</h3>
        <div className="flex gap-3 mb-5">
          <div className="  rounded-full p-2 bg-primary cursor-pointer hover:opacity-90 hover:scale-110 transition-all duration-500">
            <Link href='https://github.com/wesleypimentel96 ' target="_blank">
              <FaGithub className=" text-white text-xl" />
            </Link>

          </div>

          <div className=" bg-primary rounded-full p-2 cursor-pointer hover:opacity-90 hover:scale-110 transition-all duration-500">
            <Link href='https://www.linkedin.com/in/wesleypimentel96/' target="_blank">
              <BiLogoLinkedin className="text-white text-xl" />
            </Link>

          </div>

          <div className=" bg-primary rounded-full p-2 cursor-pointer hover:opacity-90 hover:scale-110 transition-all duration-500">
            <Link href='https://www.linkedin.com/in/wesleypimentel96/' target="_blank">
              <FaInstagram className="text-white text-xl" />
            </Link>

          </div>

          <div className=" bg-primary rounded-full p-2 cursor-pointer hover:opacity-90 hover:scale-110 transition-all duration-500">
            <Link href='https://www.linkedin.com/in/wesleypimentel96/' target="_blank">
              <SiMinutemailer className="text-white text-xl" />
            </Link>

          </div>

        </div>
      </div>

      <div className=" hidden md:block md:w-72 lg:w-96 rounded-full w-96 bg-primary overflow-hidden shadow-lg hover:scale-110 transition-all duration-1000">
        <Image
          src={Avatar}
          alt="Foto de Avatar"
          className=" rounded-full"
        />
      </div>

      <div className="flex flex-col items-center">
        <Link href='public/wesley pimentel front-end.pdf'>
          <Button variant='outline' className=" border-primary text-primary hover:bg-primary hover:text-white mb-5 transition-all duration-700">Baixar CV <HiDownload className="ml-2 text-lg" /></Button>
        </Link>

        <WhatsAppButton phoneNumber={82987686824} />
      </div>
    </main>
  )
};

export default Home;