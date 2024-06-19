'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import TsIcon from '../../public/technologies/ts-icon.svg';
import { SiZod } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";


export const CarouselIconsTechs = () => {

    return (
        <Carousel className="mt-10 max-w-80 md:max-w-lg xl:max-w-4xl"

            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}

        >
            <CarouselContent className="">

                <CarouselItem className=" flex justify-center md:basis-1/3 ">
                    <FaHtml5 className=" text-8xl bg-primary rounded-full w-52 h-52 p-3 md:w-32 md:h-32 xl:w-52 xl:h-52 text-white" />
                </CarouselItem>

                <CarouselItem className=" flex justify-center md:basis-1/3 ">
                    <FaCss3 className=" text-8xl bg-primary rounded-full w-52 h-52 p-3 md:w-32 md:h-32 xl:w-52 xl:h-52 text-white" />
                </CarouselItem>

                <CarouselItem className=" flex justify-center md:basis-1/3">
                    <IoLogoJavascript className=" text-8xl bg-primary rounded-full w-52 h-52 p-3 md:w-32 md:h-32 xl:w-52 xl:h-52  text-white" />
                </CarouselItem>

                <CarouselItem className=" flex justify-center md:basis-1/3">
                    <Image src={TsIcon} alt="TypeScript Icon" className="bg-primary rounded-full w-52 h-52 p-3 md:w-32 md:h-32 xl:w-52 xl:h-52 text-white" />
                </CarouselItem>

                <CarouselItem className=" flex justify-center md:basis-1/3">
                    <BiLogoTailwindCss className=" text-8xl bg-primary rounded-full w-52 h-52 p-3 md:w-32 md:h-32 xl:w-52 xl:h-52 text-white" />
                </CarouselItem>

                <CarouselItem className=" flex justify-center md:basis-1/3">
                    <FaReact className=" text-8xl bg-primary rounded-full w-52 h-52 p-3 md:w-32 md:h-32 xl:w-52 xl:h-52 text-white" />
                </CarouselItem>

                <CarouselItem className=" flex justify-center md:basis-1/3">
                    <TbBrandNextjs className=" text-8xl bg-primary rounded-full w-52 h-52 p-3 md:w-32 md:h-32 xl:w-52 xl:h-52 text-white" />
                </CarouselItem>

                <CarouselItem className=" flex justify-center md:basis-1/3">
                    <FaGitAlt className=" text-8xl bg-primary rounded-full w-52 h-52 p-3 md:w-32 md:h-32 xl:w-52 xl:h-52 text-white" />
                </CarouselItem>

                <CarouselItem className=" flex justify-center md:basis-1/3">
                    <SiZod className=" text-8xl bg-primary rounded-full w-52 h-52 p-3 md:w-32 md:h-32 xl:w-52 xl:h-52 text-white" />
                </CarouselItem>

                <CarouselItem className=" flex justify-center md:basis-1/3">
                    <SiShadcnui className=" text-8xl bg-primary rounded-full w-52 h-52 p-3 md:w-32 md:h-32 xl:w-52 xl:h-52 text-white" />
                </CarouselItem>

            </CarouselContent>
            <CarouselPrevious className=" hidden md:flex text-white bg-primary/80 hover:bg-primary hover:text-white" />
            <CarouselNext className=" hidden md:flex text-white bg-primary/80 hover:bg-primary hover:text-white" />
        </Carousel>
    )
};