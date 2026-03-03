"use client";
import React from "react";
import { tv } from "tailwind-variants";

// 1. Style Definition with Slots
const headingStyles = tv({
  slots: {
    wrapper: "flex flex-col gap-2",
    title: "text-4xl md:text-5xl font-[900] tracking-tight font-heading max-w-[15ch] capitalize",
    description: "text-lg text-muted-foreground max-w-prose",
    actions: "flex flex-wrap gap-4 mt-4",
  },
  variants: {
    variant: {
      hero: {
        wrapper: "gap-4",
        title: "text-5xl md:text-6xl",
        description: "max-w-2xl",
      },
      page: {
        // Default styles are suitable for page sections
      },
    },
    align: {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    },
  },
  defaultVariants: {
    variant: "page",
    align: "left",
  },
});

// 2. Prop Types
type HeadingProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "hero" | "page";
  align?: "left" | "center" | "right";
};

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

type DescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
type ActionsProps = React.HTMLAttributes<HTMLDivElement>;

// 3. Components
const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(({ variant, align, className, children, ...props }, ref) => {
  const { wrapper } = headingStyles({ variant, align });
  return (
    <div ref={ref} className={wrapper({ className })} {...props}>
      {children}
    </div>
  );
});
Heading.displayName = "Heading";

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(({ level = 1, className, ...props }, ref) => {
  const { title } = headingStyles();
  const Tag = `h${level}` as React.ElementType;
  return <Tag ref={ref} className={title({ className })} {...props} />;
});
Title.displayName = "Heading.Title";

const Description = React.forwardRef<HTMLParagraphElement, DescriptionProps>(({ className, ...props }, ref) => {
  const { description } = headingStyles();
  return <p ref={ref} className={description({ className })} {...props} />;
});
Description.displayName = "Heading.Description";

const Actions = React.forwardRef<HTMLDivElement, ActionsProps>(({ className, ...props }, ref) => {
  const { actions } = headingStyles();
  return <div ref={ref} className={actions({ className })} {...props} />;
});
Actions.displayName = "Heading.Actions";

// 4. Export all components and types
export { Heading, Title, Description, Actions };
export type { HeadingProps, TitleProps, DescriptionProps, ActionsProps };
