import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react"; //IconMenu2, om jag ändrar mig
import { NavLink } from "react-router-dom";

// interface Links {
//   label: string;
//   href: string;
//   icon: React.JSX.Element | React.ReactNode;
// }

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = false,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);
  const [currentView, setCurrentView] = useState("home"); // 👈 här

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider
      value={{ open, setOpen, animate, currentView, setCurrentView }} // 👈 lägg till här
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          " px-4 py-4 hidden md:flex md:flex-col bg-background w-[300px] shrink-0  rounded-xl mx-6",
          className
        )}
        animate={{
          width: animate ? (open ? "300px" : "60px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-background"
        )}
        {...props}
      >
        {/* <div className="flex justify-end z-20 w-full">
          <IconMenu2
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => setOpen(!open)}
          />
        </div> */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

type SidebarLinkProps = {
  label: string;
  view?: string;
  to?: string;
};

export const SidebarLink = ({ label, view, to }: SidebarLinkProps) => {
  const { setCurrentView } = useSidebar();

  if (to) {
    return (
      <NavLink to={to} className="block p-2">
        {label}
      </NavLink>
    );
  }

  return (
    <button onClick={() => setCurrentView(view!)} className="block p-2">
      {label}
    </button>
  );
};

// export const SidebarLink = ({
//   link,
//   className,
//   ...props
// }: {
//   link: Links;
//   className?: string;
// }) => {
//   const { open, animate } = useSidebar();
//   return (
//     <div className="flex flex-col justify-between  h-full">
//       <a
//         href={link.href}
//         className={cn(
//           "flex items-center justify-start gap-2  group/sidebar py-2",
//           className
//         )}
//         {...props}
//       >
//         {link.icon}

//         <motion.span
//           animate={{
//             display: animate
//               ? open
//                 ? "inline-block"
//                 : "none"
//               : "inline-block",
//             opacity: animate ? (open ? 1 : 0) : 1,
//           }}
//           className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
//         >
//           {link.label}
//         </motion.span>
//       </a>
//     </div>
//   );
// };
