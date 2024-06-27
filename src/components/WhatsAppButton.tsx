import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";


export const WhatsAppButton = () => {

    const whastappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_ZAP}`;

    return (
        <Link href={whastappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant='outline' className="border-primary text-primary hover:bg-primary hover:text-white mb-3 transition-all duration-700"> <FaWhatsapp className="mr-2 text-lg" /> Vamos conversar!</Button>
        </Link>
    )
};