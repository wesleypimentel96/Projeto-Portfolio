import Image from "next/image"

export const ThankYouPage = () => {
    return (
        <main className="flex items-center justify-center h-[88vh] container mx-auto">
            <section className="flex flex-col items-center">
                <h1 className=" text-primary text-5xl uppercase font-semibold">Obrigado!</h1>
                <Image 
                src={'/email-sent.svg'} 
                alt="E-mail enviado" 
                width={100} height={100} 
                className=" w-96 h-96" />
                <p className=" font-semibold text-xl text-primary mt-10">Já recebemos seu e-mail, iremos entrar em contato o mais breve possivel.</p>
            </section>
        </main>
    )
}
