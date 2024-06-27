'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

import { AiOutlineMail } from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { emailService } from '@/services/email';
import { useState } from 'react';
import { ThankYouPage } from '@/components/ThankYouPage';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@radix-ui/react-toast';

const formSchema = z.object({
  name: z.string().min(2, 'O nome deve conter pelo menos 2 caracteres.'),
  surname: z
    .string()
    .min(2, ' O sobrenome deve conter pelo menos 2 caracteres.'),
  email: z.string().email('E-mail inválido.'),
  subject: z.string().optional(),
  project: z
    .string()
    .min(
      10,
      'A descrição do seu projeto, deve conter pelo menos 10 caracteres.'
    ),
});

const Page = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      project: '',
      subject: '',
    },
  });

  const OnSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    const submit = async () => {
      // Configure os params como achar melhor
      const params = {
        name: `${data.name} ${data.surname}`,
        emal: data.email,
        message: data.project,
      };

      // Faça a tratativa como achar melhor
      const { message, success } = await emailService.sendEmail(
        params.name,
        params.message
      );
    };

    submit();
    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
    }, 5000)
  };

  const handleToast = () => {
    toast({
      title: 'Email enviado com sucesso',
      description: 'Obrigado por entrar em contato conosco',
    })
  };

  return (
    <>
      {isVisible &&
        <main className="flex flex-col items-center justify-center h-[88vh]  container mx-auto">
          <section className="  w-full flex justify-center items-center md:justify-center lg:gap-16 xl:justify-between xl:max-w-5xl">
            <div className=" max-w-96 hidden lg:flex lg:flex-col">
              <p className=" text-[#FF914D] font-semibold text-5xl">
                Vamos conversar!
              </p>
              <p className=" text-primary font-semibold text-4xl mt-3">
                Me conte mais sobre seu projeto.
              </p>
              <h3 className=" text-[#FF914D] text-xl mt-3">
                Vamos criar algo juntos💙{' '}
              </h3>
              <Card className="mt-10 p-12 border-primary/40">
                <div className=" flex items-center justify-center">
                  <Link
                    href="mailto:wesley-pimentel@outlook.com"
                    target="_blank"
                    className="text-3xl bg-primary/40 hover:bg-primary/60 text-white p-2 rounded-md mr-3 transition-all duration-500"
                  >
                    <AiOutlineMail />
                  </Link>
                  <Link
                    href="mailto:wesley-pimentel@outlook.com"
                    target="_blank"
                    className="text-primary font-semibold hover:underline"
                  >
                    wesley-pimentel@outlook.com
                  </Link>
                </div>
              </Card>
            </div>

            <Card className=" border-primary/40 border-2 shadow-xl p-4 md:p-5">
              <CardHeader className=" p-0  md:flex">
                <CardTitle className="font-semibold text-2xl text-center py-2 md:text-3xl text-primary">
                  Nos envie uma menssagem 🚀
                </CardTitle>
              </CardHeader>
              <Form {...form}>
                <form
                  target="_blank"
                  onSubmit={form.handleSubmit(OnSubmit)}
                  className=" flex flex-col gap-3 md:gap-3 max-w-lg"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: true }}
                    render={({ field, fieldState, formState }) => (
                      <FormItem>
                        <FormLabel
                          className={`
                                            ${formState.errors.name
                              ? ' text-red-500 dark:text-red-400'
                              : 'text-primary/80'
                            }
                                        `}
                        >
                          Nome<span>*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            onChange={field.onChange}
                            placeholder="Digite seu nome"
                            className={`text-muted-foreground shadow-lg ring-1 ring-primary/80
                                                ${formState.errors.name
                                ? ' bg-red-200'
                                : 'bg-primary/20'
                              }
                                                ${formState.errors.name
                                ? ' ring-red-500/80 dark:ring-red-500/60'
                                : ' ring-primary/80'
                              }
                                            `}
                          />
                        </FormControl>
                        <FormMessage className=" text-red-400">
                          {formState.errors.name?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="surname"
                    rules={{ required: true }}
                    render={({ field, formState }) => (
                      <FormItem>
                        <FormLabel
                          className={`
                                            ${formState.errors.surname
                              ? ' text-red-500 dark:text-red-400'
                              : 'text-primary/80'
                            }
                                        `}
                        >
                          Sobrenome<span>*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            onChange={field.onChange}
                            placeholder="Digite seu sobrenome"
                            className={`text-muted-foreground shadow-lg ring-1 ring-primary/80
                                            ${formState.errors.surname
                                ? ' bg-red-200'
                                : 'bg-primary/20'
                              }
                                            ${formState.errors.surname
                                ? ' ring-red-500/80 dark:ring-red-500/60'
                                : ' ring-primary/80'
                              }
                                        `}
                          />
                        </FormControl>
                        <FormMessage className=" text-red-400">
                          {formState.errors.surname?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ required: true }}
                    render={({ field, formState }) => (
                      <FormItem>
                        <FormLabel
                          className={`
                                            ${formState.errors.email
                              ? ' text-red-500 dark:text-red-400'
                              : 'text-primary/80'
                            }
                                        `}
                        >
                          E-mail<span>*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            onChange={field.onChange}
                            placeholder="Digite seu e-mail"
                            className={`text-muted-foreground shadow-lg ring-1 ring-primary/80
                                            ${formState.errors.email
                                ? ' bg-red-200'
                                : 'bg-primary/20'
                              }
                                            ${formState.errors.email
                                ? ' ring-red-500/80 dark:ring-red-500/60'
                                : ' ring-primary/80'
                              }
                                        `}
                          />
                        </FormControl>
                        <FormMessage className=" text-red-400">
                          {formState.errors.email?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field, formState }) => (
                      <FormItem>
                        <FormLabel
                          className={`
                                            ${formState.errors.subject
                              ? ' text-red-500 dark:text-red-400'
                              : 'text-primary/80'
                            }
                                        `}
                        >
                          Assunto
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Digite o assunto"
                            className={`text-muted-foreground shadow-lg ring-1 ring-primary/80 bg-primary/20 `}
                          />
                        </FormControl>
                        <FormMessage className=" text-red-400">
                          {formState.errors.subject?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="project"
                    rules={{ required: true }}
                    render={({ field, formState }) => (
                      <FormItem>
                        <FormLabel
                          className={`
                                            ${formState.errors.project
                              ? ' text-red-500 dark:text-red-400'
                              : 'text-primary/80'
                            }
                                        `}
                        >
                          Conte-nos mais sobre seu projeto*
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            {...field}
                            maxLength={200}
                            placeholder="Fale um pouco sobre seu projeto"
                            className={` text-muted-foreground resize-none shadow-lg ring-1 ring-primary/80
                                            ${formState.errors.project
                                ? ' bg-red-200'
                                : 'bg-primary/20'
                              }
                                            ${formState.errors.project
                                ? ' ring-red-500/80 dark:ring-red-500/60'
                                : ' ring-primary/80'
                              }
                                        `}
                          />
                        </FormControl>
                        <FormMessage className=" text-red-400">
                          {formState.errors.project?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <Button
                    className={` bg-primary/80 text-sm uppercase dark:text-white`}
                    type="submit"
                    onClick={handleToast}
                  >
                    Enviar
                  </Button>
                </form>
              </Form>
            </Card>
          </section>
        </main>
      }

      {!isVisible &&
        < ThankYouPage />
      }

    </>

  );
};

export default Page;
