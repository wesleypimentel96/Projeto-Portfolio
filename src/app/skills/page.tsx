import { Salutation } from "@/components/Salutation";



export const Page = () => {


    return (
        <main className="h-[88vh] flex">
            <section className="container flex flex-col items-center justify-center">
                <Salutation emoje="🧑‍💻" salutation="Skills" />

                <h1 className="font-semibold text-2xl">Tecnologias e Habilidades</h1>

                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>

                    </ul>
                </div>
            </section>
        </main>
    )
};



export default Page;