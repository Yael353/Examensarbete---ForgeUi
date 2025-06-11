import { InstallBlock } from "../InstallBlock";

export default function Documentation() {
  return (
    <div className="">
      {/* Content list */}
      <div className="py-6 text-foreground font-cinzel text-start p-4">
        <h2 className="font-bold text-xl mb-6 text-gold">Content</h2>
        <ul className="space-y-3 text-xl sm:text-2xl pb-10 text-accent-foreground/70 font-merriweather">
          <li className="group">
            <a
              href="#introduction"
              className="flex items-center gap-2 pl-3 border-l-4 border-transparent group-hover:border-gold group-hover:text-gold transition-all duration-300"
            >
              Introduction
            </a>
          </li>
          <li className="group">
            <a
              href="#depinstall"
              className="flex items-center gap-2 pl-3 border-l-4 border-transparent group-hover:border-gold group-hover:text-gold transition-all duration-300"
            >
              Dependencies to install
            </a>
          </li>
          <li className="group">
            <a
              href="#copycss"
              className="flex items-center gap-2 pl-3 border-l-4 border-transparent group-hover:border-gold group-hover:text-gold transition-all duration-300"
            >
              Copy CSS
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <main className="flex flex-col max-w-[90vw] mx-4 space-y-12 items-start justify-start ">
        <section
          id="introduction"
          className="bg-background border border-gold shadow-md rounded-2xl p-4 text-accent-foreground/70 font-merriweather w-full"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gold">
            Introduction
          </h1>
          <div className="bg-primary/50 p-4 rounded-lg text-foreground">
            <p className="mb-4 text-lg sm:text-2xl">
              Welcome to{" "}
              <strong>
                <span></span>ForgeUI
              </strong>{" "}
              — a simple and efficient component library where you can quickly
              grab ready-to-use UI components and utilities for your projects.
              The main purpose of this page is to speed up your workflow by
              providing clean, reusable code snippets that you can easily copy
              and integrate into your own applications.
            </p>
            <p className="mb-4 text-lg sm:text-2xl normal-case">
              Whether you need buttons, color palettes, tables, or layout
              patterns, ForgeUI offers a growing collection of components styled
              with Tailwind CSS. Each example comes with a live preview and the
              complete code, so you can directly copy it into your project.
            </p>
            <p className="text-lg sm:text-2xl">
              <strong>Example:</strong> Need a well-designed button? Find it
              here, copy the code, paste it into your project — done. Quick,
              easy, and painless.
            </p>
          </div>
        </section>

        <section
          id="depinstall"
          className="bg-background border border-gold shadow-2xl rounded-2xl p-4 text-accent-foreground/70 font-merriweather w-full"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 font-cinzel text-[var(--color-gold)]">
            Dependencies to Install
          </h1>
          <p className="mb-8 text-lg sm:text-2xl text-foreground">
            In this section, you'll find the essential dependencies required for
            this project. Simply click the copy icon next to each command to
            quickly copy it to your clipboard and paste it in your terminal.
          </p>

          <div className="mb-4 border bg-primary/50 rounded-xl p-4 space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-foreground font-cinzel">
                ⚛️ Create Vite or Next.js
              </h2>
              <p className="mb-4 text-base sm:text-lg normal-case text-foreground">
                Use <code>create-vite</code> to quickly scaffold a new
                Vite-powered React project.
              </p>
              <InstallBlock command="npm create vite@latest my-app -- --template react" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-foreground font-cinzel pt-6 sm:pt-0">
                Next.js
              </h2>
              <p className="mb-4 text-base sm:text-lg normal-case text-foreground">
                Use <code>create-next-app</code> to quickly scaffold a new
                Next.js project.
              </p>
              <InstallBlock command="npx create-next-app@latest my-app" />
            </div>
          </div>

          <div className="mb-4 border bg-primary/50 rounded-xl p-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-foreground font-cinzel">
              📦 Tailwind CSS
            </h2>
            <p className="mb-4 text-base sm:text-lg normal-case text-foreground font-semibold">
              Install <code>tailwindcss</code> and its peer dependencies to
              start styling your project with utility-first CSS.
            </p>
            <InstallBlock command="npm install -D tailwindcss postcss autoprefixer" />
          </div>

          <div className="mb-4 border bg-primary/50 rounded-xl p-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-foreground font-cinzel">
              📦 framer-motion
            </h2>
            <p className="mb-4 text-base sm:text-lg normal-case text-foreground">
              A popular React animation library that makes it easy to create
              smooth and elegant transitions.
            </p>
            <InstallBlock command="npm install framer-motion" />
          </div>

          <div className="mb-4 border bg-primary/50 rounded-xl p-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-foreground font-cinzel flex">
              📦 clsx
            </h2>
            <p className="mb-4 text-base sm:text-lg normal-case text-foreground">
              A lightweight utility for conditionally joining classNames
              together in React.
            </p>
            <InstallBlock command="npm install clsx" />
          </div>
        </section>

        <section
          id="copycss"
          className="bg-background border border-gold shadow-2xl rounded-2xl p-4 mb-10 text-accent-foreground/70 font-merriweather w-full"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gold">
            Copy CSS
          </h1>
          <p className="text-lg sm:text-2xl mb-6 text-foreground">
            Here you can quickly copy the necessary CSS for your project. Click
            the copy icon on the right side of each code block to copy it to
            your clipboard.
          </p>

          {/* Fonts & Imports */}
          <div className="mb-12 border bg-primary/50 rounded-xl p-4">
            <h2 className="text-2xl font-semibold mb-4 text-foreground font-cinzel">
              📦 Fonts & Imports
            </h2>
            <InstallBlock
              command={`@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap");
@import "tailwindcss";
@import "tw-animate-css";`}
            />
          </div>

          {/* Custom Variant */}
          <div className="mb-12 border bg-primary/50 rounded-xl p-4">
            <h2 className="text-2xl font-semibold mb-4 text-foreground font-cinzel">
              🎨 Custom Variant
            </h2>
            <InstallBlock
              command={`@custom-variant dark (&:where(.dark, .dark *));`}
            />
          </div>

          {/* Light Theme */}
          <div className="mb-12 border bg-primary/50 rounded-xl p-4">
            <h2 className="text-2xl font-semibold mb-4 text-foreground font-cinzel">
              ☀️ Light Theme Colors
            </h2>
            <InstallBlock
              command={`@theme {
  --color-background: oklch(98.5% 0.001 106.423);
  --color-foreground: oklch(0.145 0 0);
  --color-primary: oklch(92% 0.01 240);
  --color-primary-foreground: oklch(0.205 0 0);
  --color-popover: oklch(1 0 0);
  --color-popover-foreground: oklch(0.145 0 0);
  --color-muted-foreground: rgb(60, 60, 60);
  --color-accent: oklch(80% 0.025 293.756);
  --color-accent-foreground: oklch(0.205 0 0);
  --color-gold: oklch(80% 0.12 85);
  --color-border: oklch(0.922 0 0);
  --color-ring: oklch(0.556 0 0);
  --color-shadow: oklch(86.9% 0.005 56.366);
}`}
            />
          </div>

          {/* Dark Theme */}
          <div className="mb-12 border bg-primary/50 rounded-xl p-4">
            <h2 className="text-2xl font-semibold mb-4 text-foreground font-cinzel">
              🌙 Dark Theme Colors
            </h2>
            <InstallBlock
              command={`@layer theme {
  .dark {
    --color-background: oklch(0.145 0 0);
    --color-primary: oklch(0.18 0 0);
    --color-primary-foreground: oklch(0.205 0 0);
    --color-foreground: oklch(0.96 0 0);
    --color-accent: oklch(0.269 0 0);
    --color-accent-foreground: oklch(0.985 0 0);
    --color-color-primary: rgb(32, 40, 66);
    --color-popover: oklch(0.205 0 0);
    --color-popover-foreground: oklch(0.985 0 0);
    --color-muted-foreground: rgb(200, 200, 200);
    --color-gold: rgba(229, 193, 0, 1);
    --color-border: oklch(1 0 0 / 10%);
    --color-ring: oklch(0.556 0 0);
  }
}`}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
