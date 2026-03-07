"use client";
import React, { createContext, useContext, useMemo } from "react";
import Link from "next/link";
import { cardStyles } from "./card-styles";
import { Heading, Title, Description, Actions, HeadingProps, TitleProps, DescriptionProps, ActionsProps } from "../Heading";

// --- Context ---
type CardContextValue = {
  slots: ReturnType<typeof cardStyles>;
  href?: string;
};

const CardContext = createContext<CardContextValue | undefined>(undefined);

const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("Card sub-components must be used within a Card component");
  }
  return context;
};

// --- Root Component ---
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "filled" | "outlined";
  isHoverable?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export function Card({ variant, isHoverable, className, children, href, target, rel, ...props }: CardProps) {
  const hoverable = isHoverable ?? (!!href);
  const slots = useMemo(() => cardStyles({ variant, isHoverable: hoverable }), [variant, hoverable]);
  const contextValue = useMemo(() => ({ slots, href }), [slots, href]);

  const Component = href ? Link : "article";

  return (
    <CardContext.Provider value={contextValue}>
      <Component
        className={slots.root({ className })}
        {...(href ? { href, target, rel } : {})}
        {...(props as any)}
      >
        {children}
      </Component>
    </CardContext.Provider>
  );
}

// --- Sub-components ---

export interface CardHeaderProps extends HeadingProps { }
export function CardHeader({ className, variant = "card", ...props }: CardHeaderProps) {
  const { slots } = useCardContext();
  return (
    <Heading variant={variant} className={slots.header({ className })} {...props} />
  );
}

export interface CardTitleProps extends TitleProps { }
export function CardTitle({ level = "h3", ...props }: CardTitleProps) {
  return (
    <Title level={level} {...props} />
  );
}

export interface CardSubtitleProps extends DescriptionProps { }
export function CardSubtitle(props: CardSubtitleProps) {
  return (
    <Description {...props} />
  );
}

export function CardMedia({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { slots } = useCardContext();
  return (
    <div className={slots.media({ className })} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { slots } = useCardContext();
  return (
    <div className={slots.content({ className })} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { slots } = useCardContext();
  return (
    <div className={slots.footer({ className })} {...props}>
      {children}
    </div>
  );
}

export interface CardActionsProps extends ActionsProps { }
export function CardActions(props: CardActionsProps) {
  const { slots, href } = useCardContext();

  if (href) return null;

  return (
    <Actions className={slots.actions({ className: props.className })} {...props} />
  );
}

// --- Compound Component Assignment ---
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Media = CardMedia;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Actions = CardActions;
