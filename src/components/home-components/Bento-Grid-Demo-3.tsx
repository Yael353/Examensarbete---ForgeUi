"use client";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  // IconBoxAlignRightFilled,
  // IconClipboardCopy,
  // IconFileBroken,
  // IconSignature,
  // IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";

import Card from "../myComponents/card/Card";
import { LoginForm } from "../myComponents/loginform/LoginForm";
import ContactForm from "../myComponents/contactform/ContactForm";

export default function BentoGridThirdDemo() {
  return (
    <div className="py-20">
      <h2 className="text-5xl md:text-6xl font-semibold text-center text-gradient font-cinzel tracking-wide drop-shadow-lg">
        Dive Into Our <span className="text-gold">UI</span> Elements
      </h2>
      <BentoGrid className="max-w-screen-xl mx-auto md:auto-rows-[28rem] py-10 gap-6 px-2 md:px-0">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            // icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const duration = 20;
  const distance = 200;

  const pathTopLeft = {
    animate: {
      x: [0, distance, distance, 0, 0],
      y: [0, 0, distance, distance, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pathTopRight = {
    animate: {
      x: [distance, distance, 0, 0, distance],
      y: [0, distance, distance, 0, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pathBottomRight = {
    animate: {
      x: [distance, 0, 0, distance, distance],
      y: [distance, distance, 0, 0, distance],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const pathBottomLeft = {
    animate: {
      x: [0, 0, distance, distance, 0],
      y: [distance, 0, 0, distance, distance],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative w-full h-[300px] mx-auto border-2 rounded-xl overflow-hidden">
      {/* Gold Shimmer */}
      <motion.div className="absolute" variants={pathTopLeft} animate="animate">
        <a href="/components/myComponents/Button">
          <motion.button
            type="button"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-yellow-300 border-2 border-yellow-500 rounded-xl shadow-xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 group"
            aria-label="Gold Shimmer Button"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-yellow-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-50 blur-sm animate-pulse"></span>
            <span className="relative z-10">Gold Shimmer</span>
          </motion.button>
        </a>
      </motion.div>

      {/* Pulse Edge */}
      <motion.div
        className="absolute"
        variants={pathTopRight}
        animate="animate"
      >
        <a href="/components/myComponents/Button">
          <motion.button
            type="button"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-green-300 border-2 border-green-400 rounded-xl shadow-lg transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500 group"
            aria-label="Pulse Edge Button"
          >
            <span className="absolute inset-0 bg-green-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
            <span className="absolute inset-0 border-2 border-green-500 rounded-xl animate-ping group-hover:animate-none"></span>
            <span className="relative z-10">Pulse Edge</span>
          </motion.button>
        </a>
      </motion.div>

      {/* Blazing Glow */}
      <motion.div
        className="absolute"
        variants={pathBottomRight}
        animate="animate"
      >
        <a href="/components/myComponents/Button">
          <motion.button
            type="button"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-orange-300 border-2 border-orange-400 rounded-xl shadow-2xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500 group"
            aria-label="Blazing Glow Button"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-orange-700 to-orange-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
            <span className="absolute inset-0 border-2 border-orange-500 rounded-xl animate-pulse group-hover:animate-none"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">Blazing Glow</span>
          </motion.button>
        </a>
      </motion.div>

      {/* Neon Laser */}
      <motion.div
        className="absolute"
        variants={pathBottomLeft}
        animate="animate"
      >
        <a href="/components/myComponents/Button">
          <motion.button
            type="button"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-fuchsia-300 border-2 border-fuchsia-500 rounded-xl shadow-lg transition-all duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-500 group"
            aria-label="Neon Laser Button"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-fuchsia-800 to-fuchsia-950 opacity-90 group-hover:opacity-100 transition duration-300"></span>
            <span className="absolute top-0 left-0 h-0.5 w-0 bg-fuchsia-400 group-hover:w-full transition-all duration-500 ease-out"></span>
            <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-fuchsia-400 group-hover:w-full transition-all duration-500 ease-out delay-200"></span>
            <span className="relative z-10">Neon Laser</span>
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="flex flex-1 w-auto h-[50%] min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-2 rounded-2xl"
    >
      <div className="flex w-full h-full items-center rounded-2xl justify-center overflow-auto no-scrollbar ">
        <div className="w-full h-full max-w-full">
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="flex flex-1 w-auto h-[50%] min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-2 rounded-2xl"
    >
      <div className="flex w-full h-full items-center rounded-2xl justify-center overflow-auto no-scrollbar ">
        <div className="w-full h-full max-w-full">
          <LoginForm />
        </div>
      </div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate:-5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div variants={first} className="h-full w-1/3">
        <a href="/components/myComponents/card/CardGallery">
          <Card
            title="We Forge with React!"
            image="spring2.jpg"
            imageAlt="spring2.jpg"
            text="Ctrl Z is my love language"
            className="h-full rounded-2xl"
          />
        </a>
      </motion.div>

      <motion.div variants={second} className="h-full w-1/3">
        <a href="/components/myComponents/card/CardGallery">
          <Card
            title="I love tailwind CSS!"
            image="spring.jpg"
            imageAlt="avatar"
            text="Sensible"
            className="h-full rounded-2xl"
          />
        </a>
      </motion.div>

      <motion.div variants={second} className="h-full w-1/3">
        <a href="/components/myComponents/card/CardGallery">
          <Card
            title="Ctrl+Z is my love language."
            image="spring3.jpg"
            imageAlt="avatar"
            text="Helpless"
            className="h-full rounded-2xl"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Buttons",
    description: <span className="text-lg">Pick and modify at your will!</span>,
    header: <SkeletonOne />,
    className: "md:col-span-1",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Login form",
    description: (
      <span className="text-lg">Animated, responsive, and accessible</span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Contact form",
    description: (
      <span className="text-lg">Animated, responsive, and accessible</span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cards",
    description: (
      <span className="text-lg">
        Elegant, accessible, and responsive cards for modern interfaces.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-lg">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
