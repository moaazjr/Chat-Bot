import { Message } from "@/types";
import { FormEvent, useRef, useState } from "react";

export default function useMessages() {
  const [userMessage, setUserMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setUserMessage(inputRef.current!.value);

    const token = process.env.NEXT_PUBLIC_SPARROW_API_KEY;
    const payload = {
      message: inputRef.current!.value,
    };

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      
      setMessages((prev) => [...prev, ...data.data.messages]);
      inputRef.current!.value = "";
      setIsLoading(false);
    } catch (error) {
      console.log("There was a problem with the fetch operation:", error);
      setIsLoading(false);
      throw error;
    }
  };

  return { isLoading, messages, inputRef, handleSubmit, isHidden, setIsHidden, userMessage };
}
