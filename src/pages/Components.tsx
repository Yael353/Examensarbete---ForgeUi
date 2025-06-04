import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Box, Layers, FormInput, Github } from "lucide-react";

const stats = [
  { label: "Components Available", value: 6 },
  { label: "Contributors", value: 1 },
  { label: "Last Update", value: "11/06-2025" },
];

const categories = [
  {
    title: "Buttons",
    description: "Stylish, animated and interactive buttons.",
    icon: <Box className="w-8 h-8 text-gold" />,
    link: "/components/myComponents/Button",
  },
  {
    title: "Headings",
    description: "Typography components for modern UIs.",
    icon: <Layers className="w-8 h-8 text-gold" />,
    link: "/components/myComponents/Heading",
  },
  {
    title: "Forms",
    description: "Contact forms, login forms and more.",
    icon: <FormInput className="w-8 h-8 text-gold" />,
    link: "/components/myComponents/contactform/ContactFormGallery",
  },
  {
    title: "Forms",
    description: "Contact forms, login forms and more.",
    icon: <FormInput className="w-8 h-8 text-gold" />,
    link: "/components/myComponents/contactform/ContactFormGallery",
  },
];

const Components = () => {
  return (
    <div className="px-6 py-20 max-w-7xl mx-auto space-y-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold font-cinzel text-center"
      >
        Explore <span className="text-gold">Components</span>
      </motion.h1>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="p-6 rounded-xl hover:ease-out border border-border bg-background shadow hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4 ">{category.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
            <p className="text-muted-foreground mb-4">{category.description}</p>
            <Link to={category.link}>
              <Button className="text-foreground bg-primary border border-gold hover:bg-accent hover:text-foreground">
                Explore
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Fun Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="p-4 bg-accent rounded-lg border border-border"
          >
            <div className="text-4xl font-extrabold text-gold">
              {stat.value}
            </div>
            <div className="text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Contribute CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center space-y-4 pt-10 flex flex-col justify-center items-center"
      >
        <p className="text-2xl text-muted-foreground">
          Got a cool component idea? Help us grow{" "}
          <span className="font-cinzel font-bold">
            Forge<span className="text-gold">UI</span>!
          </span>
          !
        </p>
        <a
          href="https://github.com/ditt-repo-url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex gap-2 text-lg font-semibold bg-gold text-background hover:border-2 border-background">
            <Github className="w-5 h-5" /> Contribute on GitHub
          </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default Components;
