import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "./Input";
import { Textarea } from "./TextArea";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    console.log(form);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-8 rounded-2xl shadow-lg bg-background text-foreground grid gap-6 border border-border"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold font-cinzel text-center mb-2">
        Contact us
      </h2>
      <p className="text-muted-foreground text-center mb-4">
        We will get back to you as soon as we can.
      </p>

      <div className="grid gap-4">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Name</span>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="mt-1"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">E-mail</span>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="email@email.com"
            className="mt-1"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Message</span>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Type your message here..."
            className="mt-1"
          />
        </label>
      </div>

      <Button
        type="submit"
        className="w-full text-lg font-semibold transition-all duration-300 
           bg-blue-600 text-white 
           dark:bg-popover dark:text-white
           hover:scale-[1.02] 
           focus-visible:ring-4 focus-visible:ring-blue-400/60
           dark:focus-visible:ring-gray-300/60"
      >
        Submit
      </Button>
    </motion.form>
  );
}
