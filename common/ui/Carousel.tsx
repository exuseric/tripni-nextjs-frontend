"use client";
import React, { createContext, useContext, useMemo } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const carouselStyles = tv({
  slots: {
    root: "relative w-full",
    container: "flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none",
    item: "flex-none snap-start",
  },
  variants: {
    gap: {
      none: { container: "gap-0" },
      xs: { container: "gap-1" },
      sm: { container: "gap-2" },
      md: { container: "gap-4" },
      lg: { container: "gap-6" },
    },
  },
  defaultVariants: {
    gap: "md",
  }
});

type CarouselContextValue = {
  slots: ReturnType<typeof carouselStyles>;
};

const CarouselContext = createContext<CarouselContextValue | undefined>(undefined);

export function Carousel({ 
  children, 
  className, 
  gap,
}: VariantProps<typeof carouselStyles> & { children: React.ReactNode; className?: string }) {
  const slots = useMemo(() => carouselStyles({ gap }), [gap]);
  
  return (
    <CarouselContext.Provider value={{ slots }}>
      <div className={slots.root({ className })}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { slots } = useContext(CarouselContext) ?? { slots: carouselStyles() };
  return (
    <div className={slots.container({ className })} {...props}>
      {children}
    </div>
  );
}

export function CarouselItem({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { slots } = useContext(CarouselContext) ?? { slots: carouselStyles() };
  return (
    <div className={slots.item({ className })} {...props}>
      {children}
    </div>
  );
}

Carousel.Content = CarouselContent;
Carousel.Item = CarouselItem;
