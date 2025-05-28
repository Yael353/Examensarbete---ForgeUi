import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "./Label";
import { Input } from "./Input";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
 
    console.log("Login with:", { email, password });
  };

  
  const handleForgotPassword = () => {
    alert("Forgott password - Handle navigation here");
  };

  const handleCreateAccount = () => {
    alert("Create account - Handle navigation here");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="max-w-md mx-auto p-8 rounded-2xl shadow-xl border bg-background text-foreground"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Log in</h2>

      <form onSubmit={handleLogin} className="space-y-5" noValidate>
        <div>
          <Label htmlFor="email" className="block mb-2 text-lg">
            E-mail
          </Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="name@exempel.se"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            aria-describedby="emailHelp"
          />
        </div>

        <div>
          <Label htmlFor="password" className="block mb-2 text-lg required:">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            aria-describedby="passwordHelp"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            Forgot password?
          </button>

          <button
            type="button"
            onClick={handleCreateAccount}
            className="text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            Create Account
          </button>
        </div>

        <Button
          type="submit"
          className="bg-popover text-foreground w-full text-lg font-semibold transition-all duration-300 hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-accent/60"
        >
          Logga in
        </Button>
      </form>
    </motion.div>
  );
};
