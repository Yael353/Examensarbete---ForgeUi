import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground space-y-16">
      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold text-center tracking-tight"
      >
        What is Forge<span className="text-gold">UI</span>?
      </motion.h1>

      {/* Intro Text */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl text-center text-muted-foreground max-w-4xl font-merriweather"
      >
        ForgeUI is a flexible, modern component library and UI builder for
        developers who want to build beautiful, production-ready interfaces
        faster. With clean, reusable components and an open source mindset,
        ForgeUI makes it simple to create and customize your web projects.
      </motion.p>

      {/* Feature Cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl shadow-2xl"
      >
        <div className="p-6 border border-border rounded-xl bg-card shadow-sm text-center">
          <h3 className="text-2xl font-bold text-gold mb-2">
            Modern & Stylish
          </h3>
          <p className="text-muted-foreground text-xl font-merriweather">
            Build modern, responsive interfaces with pre-designed components
            powered by React and Tailwind CSS.
          </p>
        </div>

        <div className="p-6 border border-border rounded-xl bg-card shadow-sm text-center">
          <h3 className="text-2xl font-bold text-gold mb-2">
            Flexible & Customizable
          </h3>
          <p className="text-muted-foreground text-xl font-merriweather ">
            Adjust, restyle, and remix components to perfectly match your
            project's branding and design needs.
          </p>
        </div>

        <div className="p-6 border border-border rounded-xl bg-card shadow-sm text-center">
          <h3 className="text-2xl font-bold text-gold mb-2">
            Production-Ready
          </h3>
          <p className="text-muted-foreground text-xl font-merriweather">
            Focus on building your app — we’ll handle the interface. Every
            component is clean, scalable, and ready for real projects.
          </p>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link to="/components">
          <Button
            size="lg"
            className="text-2xl font-semibold font-cinzel p-4 bg-accent border-2 border-gold text-foreground rounded-lg shadow-md hover:ring-2 hover:ring-[rgb(var(--gold))] transition duration-300"
          >
            Browse Components
          </Button>
        </Link>
        <Link to="/documentation">
          <Button
            variant="outline"
            size="lg"
            className="text-2xl font-semibold font-cinzel p-4 bg-accent border-2 border-gold text-foreground rounded-lg shadow-md hover:ring-2 hover:ring-[rgb(var(--gold))] transition duration-300"
          >
            Documentation
          </Button>
        </Link>
      </motion.div>

      {/* Open Source CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="flex flex-col items-center justify-center space-y-4 pt-12"
      >
        <h2 className="text-3xl font-bold text-center text-gold">
          🔥 Open Source & Made for Developers
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl text-xl font-merriweather">
          ForgeUI is open source and built by developers, for developers. Got a
          unique component idea or a slick button concept? Join us on GitHub and
          help grow this toolkit together.
        </p>
        <a
          href="https://github.com/your-github-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="text-2xl font-semibold font-cinzel p-4 bg-accent border-2 border-gold text-foreground rounded-lg shadow-md hover:ring-2 hover:ring-[rgb(var(--gold))] transition duration-300"
          >
            <Github className="w-6 h-6" />
            Star & Contribute
          </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default About;
