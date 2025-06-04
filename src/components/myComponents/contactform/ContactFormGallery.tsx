// import { useState } from "react";
import { InstallBlock } from "../InstallBlock";
import ContactForm from "./ContactForm";
import { ExpandableCodeBlock } from "../ExpandableCodeBlock";

const textAreaCode = `import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-border bg-popover text-popover-foreground placeholder-muted-foreground px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 transition",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
`;
const inputCode = `import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-border bg-popover text-popover-foreground placeholder-muted-foreground px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 transition",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
`;
const contactFormCode = `
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
           dark:bg-gray-700 dark:text-white
           hover:scale-[1.02] 
           focus-visible:ring-4 focus-visible:ring-blue-400/60
           dark:focus-visible:ring-gray-300/60"
      >
        Submit
      </Button>
    </motion.form>
  );
}
`;

export const ContactFormGallery = () => {
  return (
    <div className="mx-4">
      <h3 className="flex text-5xl text-accent-foreground/70 justify-stard font-bold pb-2">
        Contact Forms
      </h3>
      <p className="text-2xl text-accent-foreground/70 pb-10  font-merriweather">
        Elegant, accessible, and responsive forms are essential for modern
        interfaces.
      </p>

      <div className="flex flex-col items-start justify-start gap-6 border-2 rounded-md md:p-4">
        <div className="cursor-pointer w-full flex justify-center bg-primary p-4 rounded-md">
          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="mt-16 ">
        <InstallBlock command={`npm install framer-motion\nnpm install clsx`} />
      </div>

      <div className="max-w-full  pt-16">
        <h4 className="text-xl font-bold mb-4">
          components/ui/ContactForm.tsx
        </h4>
        <ExpandableCodeBlock code={contactFormCode} previewLines={12} />
        <h4 className="text-xl font-bold mb-6">components/ui/Input.tsx</h4>
        <ExpandableCodeBlock code={inputCode} previewLines={5} />
        <h4 className="text-xl font-bold mb-6">components/ui/TextArea.tsx</h4>
        <ExpandableCodeBlock code={textAreaCode} previewLines={5} />
      </div>
    </div>
  );
};
