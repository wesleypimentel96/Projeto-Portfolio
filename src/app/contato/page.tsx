'use client'

import { Card } from "@/components/ui/card";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';

const formSchema = z.object({
    firstName: z.string().min(2, 'Preencha seu primeiro nome '),
    lastName: z.string().min(2, 'Preencha seu sobrenome '),
    email: z.string().email(),
    subject: z.string().optional(),
});

const Page = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    const OnSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => console.log(data);

    return (
        <main className="flex flex-col items-center justify-center h-[88vh]  container mx-auto">
            <section className=" bg-slate-400 w-full">
                <div>
                    <p>Vamos conversar!</p>
                    <p>Me conte mais sobre seu projeto.</p>

                    <h3>Vamos criar algo juntos</h3>
                </div>

                <Form {...form}>

                </Form>
            </section>
        </main>
    )
};




export default Page;