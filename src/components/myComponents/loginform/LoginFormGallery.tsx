import { InstallBlock } from "../InstallBlock";
import { LoginForm } from "./LoginForm";
import { ExpandableCodeBlock } from "../ExpandableCodeBlock";

const labelCode = `interface LabelProps {
    htmlFor: string;
    children: React.ReactNode;
    className?: string;
  }
  
  export const Label: React.FC<LabelProps> = ({
    htmlFor,
    children,
    className,
  }) => {
    return (
      <label
        htmlFor={htmlFor}
        className={"block mb-2 font-medium text-gray-700 dark:text-gray-300 select-none " + (className ?? "")}
      >
        {children}
      </label>
    );
  };
  `;

const inputCode = `import React from "react";

  interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    className?: string;
  }
  
  export const Input: React.FC<InputProps> = ({ id, className, ...props }) => {
    return (
      <input
        id={id}
        className={
          "w-full rounded-md border border-gray-300 dark:border-gray-600 " +
          "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 " +
          "px-4 py-2 " +
          "placeholder-gray-400 dark:placeholder-gray-500 " +
          "focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent " +
          "transition " +
          (className ?? "")
        }
        {...props}
      />
    );
  };
  `;

const loginFormCode = `
import { useState } from "react";
import { motion } from "framer-motion";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-md mx-auto p-8 rounded-2xl shadow-xl border bg-background text-foreground"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Logga in</h2>

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label htmlFor="email" className="block mb-2 text-lg font-medium">
            E-postadress
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="namn@exempel.se"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 text-lg font-medium">
            Lösenord
          </label>
          <input
            id="password"
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Logga in
        </button>
      </form>
    </motion.div>
  );
};
`;

export const LoginFormGallery = () => {
  //   const [showCode, setShowCode] = useState(false);

  return (
    <div className="mx-4">
      <h3 className="text-5xl font-bold mb-4">Login Form</h3>
      <p className="text-2xl text-accent-foreground/70 pb-10  font-merriweather">
        Elegant and accessible login form with animation and responsive design.
      </p>
      <div className="flex flex-col items-start justify-start gap-6 border-2 rounded-md p-6">
        <div className="cursor-pointer w-full flex justify-center bg-primary p-4 rounded-md">
          <div className="w-full max-w-lg ">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="mt-16 w-auto">
        <InstallBlock command="npm install framer-motion" />
      </div>

      <div className="max-w-full mx-auto pt-16">
        <h4 className="text-2xl font-bold mb-4">
          components/ui/loginForm.tsx
        </h4>
        <ExpandableCodeBlock code={loginFormCode} previewLines={12} />
        <h4 className="text-xl font-bold mb-4">components/ui/Input.tsx</h4>
        <ExpandableCodeBlock code={labelCode} previewLines={5} />
        <h4 className="text-xl font-bold mb-4">components/ui/TextArea.tsx</h4>
        <ExpandableCodeBlock code={inputCode} previewLines={5} />
      </div>
    </div>
  );
};
