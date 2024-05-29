'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Projects } from "@/data/projects"
import Autoplay from "embla-carousel-autoplay";
import Fade from 'embla-carousel-fade';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { TechnologiesItems } from "./TechnologiesItems";


export const CarouselItems = () => {

    return (

        <Carousel orientation="horizontal" className="mt-5 w-full text-center max-w-sm lg:max-w-2xl xl:max-w-6xl"
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
                // Fade(),
            ]}
        >
            <CarouselContent className="">
                {Projects.map((item => (
                    <>
                        <CarouselItem key={item.id} className="lg:basis-1/2 xl:basis-1/3 cursor-pointer">
                            <Card className=" border-primary hover:bg-primary/10 transition-all duration-500 text-primary h-full flex flex-col justify-start items-center">
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{item.description}</CardDescription>
                                    <Image alt="Imagem Portfólio" src={`/${item.imageProject}`}
                                        width={500} height={500} className="rounded-md mt-5 w-96 h-40" quality={100}
                                    />
                                    <CardFooter className="p-0 mt-5 flex gap-2 items-center flex-wrap">
                                        {item.technologies.map((technology => (
                                            <span className="bg-primary text-white rounded-md px-2 py-1 font-semibold">{technology}</span>

                                        )))}
                                    </CardFooter>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        
                    </>
                )))}
            </CarouselContent>
            <CarouselPrevious className=" hidden md:flex text-white bg-primary/80 hover:bg-primary hover:text-white" />
            <CarouselNext className=" hidden  md:flex text-white bg-primary/80 hover:bg-primary hover:text-white" />
        </Carousel>
    )
};