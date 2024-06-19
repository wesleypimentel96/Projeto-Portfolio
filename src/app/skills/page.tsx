'use client'

import { CarouselIconsTechs } from "@/components/CarouselIconsTechs";
import { Salutation } from "@/components/Salutation";



const Page = () => {


    return (
        <main className="h-[88vh] flex">
            <section className="container flex flex-col items-center justify-center">
                <Salutation emoje="🧑‍💻" salutation="Skills" />
                <h1 className="uppercase font-semibold text-primary text-2xl mt-5 text-center">Tecnologias e Habilidades</h1>
                <CarouselIconsTechs />
            </section>
        </main>
    )
};

export default Page;