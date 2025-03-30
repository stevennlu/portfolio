"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="">
      <div className="">
        <h1 className={`${calistoga.variable} text-5xl font-serif pt-16 pb-8`}>
          contact me.
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-9 resize-none"
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-9 resize-none"
        />
      </div>

      <div className="">
        <Textarea
          placeholder="Leave feedback about the site, career opportunities, or just say hello!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-8 h-60 resize-none"
        />
      </div>

      <div>
        <Button
          className="w-full mt-4 bg-white text-black hover:bg-neutral-200/80"
          onClick={handleSubmit}
        >
          Send Message <SendHorizontal />
        </Button>
      </div>

      {status === "success" && (
        <p className="text-green-600 mt-4">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4">Something went wrong. Try again.</p>
      )}
    </div>
  );
};

export default ContactPage;
