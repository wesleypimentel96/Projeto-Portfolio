import { CarouselItems } from "@/components/CarouselItems";
import { Salutation } from "@/components/Salutation"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";




const Page = () => {


    return (
        <main className="flex  flex-col items-center justify-center h-[88vh]  container mx-auto">
            <div>
                <Salutation emoje="🔗" salutation="Portfólio" />
            </div>

            <div className="mt-5">
                <h1 className="uppercase font-semibold text-primary text-2xl">Projetos</h1>
            </div>

            <CarouselItems />

            <Link href={`https://github.com/wesleypimentel96?tab=repositories`} target="_blank">
                <div className="mt-10">
                    <Button variant='outline' className="flex justify-between gap-2 h-11 border-green-500 hover:bg-green-300 dark:bg-green-900 dark:text-white  text-green-900  dark:hover:opacity-70  transition-all duration-1000 rounded-xl"><span className=""><FaGithub className=" text-3xl" /></span> <span>Veja mais projetos no GitHub</span> <span><MdArrowForward className=" text-2xl" /></span></Button>
                </div>
            </Link>


        </main>
    )
};

export default Page;