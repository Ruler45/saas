import * as z from "zod";

export const ChatSchema = z.object({
  prompt: z.string().min(1, {
    message: "Please enter a message",
  }),
});
