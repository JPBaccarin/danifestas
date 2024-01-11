'use client'
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Email Inválido"),
  password: z.string().min(1, "A senha é necessária"),
});

export function FormLogin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const router = useRouter();
  axios.defaults.withCredentials = true;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Envie uma requisição POST para a rota de login no backend usando Axios
      const response = await axios.post("http://localhost:3003/login", {
        email: values.email,
        password: values.password,
      });

      // Verifique o status da resposta
      if (response.status === 200) {
    
      } else {
        // Se o login falhar, exiba uma mensagem de erro
        console.error("Erro ao realizar o login:", response.data.message);
      }
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
    }
  }

  return (
  
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2 space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu e-mail"
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite sua senha"
                  type="password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full ">
          Login
        </Button>
      </form>
      <Link href="./signup" className="text-xs text-muted-foreground/50">
        Cadastrar conta
      </Link>
    </Form>
  );
}
