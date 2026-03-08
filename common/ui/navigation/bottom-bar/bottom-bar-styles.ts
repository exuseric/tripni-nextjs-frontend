import { tv } from "tailwind-variants";

export const bottomBarStyles = tv({
  slots: {
    root: "md:hidden fixed z-50 bottom-0 inset-x-0 w-full pointer-events-none flex-center-col ",
    actionBar: "w-full flex-row-end items-center container pb-4 pointer-events-auto",
    navigationBar: " bg-surface-container w-full h-fit min-h-nav-height flex-center-col pointer-events-auto py-safe-bottom",
    navigationBarGrid: "w-full gap-1 container",
    navigationItem: "relative flex-center-col gap-1 p-1 w-full h-fit group transition-colors duration-300 ease-emphasized select-none outline-none",
    navigationItemIcon: "relative flex-center-col px-5 py-1.5 rounded-full overflow-hidden transition-all duration-400 ease-emphasized transform-gpu group-active:scale-90",
    navigationItemLabel: "text-xs tracking-wider capitalize transition-colors duration-300 ease-emphasized",
  },
  variants: {
    isActive: {
      true: {
        navigationItem: "text-secondary",
        navigationItemIcon: "bg-secondary-container text-on-secondary-container shadow-sm scale-110",
        navigationItemLabel: "text-primary opacity-100 translate-y-0",
      },
      false: {
        navigationItem: "text-on-surface-variant/70 hover:text-on-surface",
        navigationItemIcon: "bg-transparent text-on-surface-variant group-hover:bg-surface-container-high/40 group-hover:scale-105",
        navigationItemLabel: "text-on-surface-variant",
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

