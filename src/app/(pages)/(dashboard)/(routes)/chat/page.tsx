"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { MessageSquare } from "lucide-react";
import Heading from "../../../../components/heading";
import { ChatSchema } from "./constants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/button";
// import { useFormField } from "../../../../../components/ui/form";

const Chat = () => {
  const form = useForm<z.infer<typeof ChatSchema>>({
    resolver: zodResolver(ChatSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof ChatSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Heading
        title="Chat"
        description="Chat with one of the most awesome chatbots"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-within:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Type your message..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">Messages in here</div>
      </div>
    </div>
  );
};

export default Chat;
