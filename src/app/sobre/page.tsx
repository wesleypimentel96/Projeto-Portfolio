import { Salutation } from "@/components/Salutation";
import { AboutMe } from "@/components/AboutMe"
import ImageAboutMe from '../../../public/img-aboutme.png';
import Image from "next/image";




const Page = () => {


    return (
        <main className=" h-[88vh] ">
            <section className=" pt-10 md:pt-8 flex flex-col items-center xl:flex-row  xl:justify-center xl:gap-40 xl:items-center h-full ">
                <div>
                    <Image 
                    src={ImageAboutMe}
                    alt="Image About Me"
                    className="rounded-full  w-40 h-40 md:w-60  md:h-60 xl:w-96 xl:h-96 bg-primary/20 dark:bg-primary/20"
                    quality={100}
                    />
                </div>
                <div className="mt-10 flex flex-col items-center">
                    <Salutation salutation="Sobre mim" emoje="🤓" />
                    <h1 className="mt-5 font-semibold text-primary text-xl text-center md:text-2xl lg:text-3xl">Ranielly Wesley Pimentel Santos da Silva</h1>
                    <div className="mt-0 md:mt-5 px-2">
                        <AboutMe emoje="👏" description="Hello world, pode me chamar apenas de Weley. Prazer!" />
                        <AboutMe emoje="🧑‍💻" description="+2 anos estudando aplicações com JavaScript, ReactJS, TypeScript e outras tecnologias." />
                        <AboutMe emoje="🎓" description="Graduado em Análise e Desenvolvimento de Sistemas pela UNCISAL, Universidade de Ciência e Saúde de Alagoas." />
                        <AboutMe emoje="💡" description="Interesses em desenvolvimento Front-end ou FullStack." />
                        <AboutMe emoje="🚀" description="Buscando me aprimorar um pouquinho todos os dias." />
                    </div>
                </div>
            </section>
        </main>
    )
};



export default Page;