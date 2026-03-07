"use client";
import React, { useMemo } from "react";
import { gridStyles, gridItemStyles } from "./grid-styles";
import { VariantProps } from "tailwind-variants";

// --- Grid Root ---
export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridStyles> {
  minItemWidth?: string;
}

export function Grid({ variant, gap, cols, align, minItemWidth, style, className, children, ...props }: GridProps) {
  const gridStyle = useMemo(() => {
    if (!minItemWidth) return style;
    return {
      ...style,
      "--grid-min-item-width": minItemWidth,
    } as React.CSSProperties;
  }, [minItemWidth, style]);

  return (
    <div 
      className={gridStyles({ variant, gap, cols, align, className })} 
      style={gridStyle}
      {...props}
    >
      {children}
    </div>
  );
}

// --- Grid Item ---
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridItemStyles> {}

export function GridItem({ span, colStart, rowSpan, className, children, ...props }: GridItemProps) {
  return (
    <div 
      className={gridItemStyles({ span, colStart, rowSpan, className })} 
      {...props}
    >
      {children}
    </div>
  );
}

Grid.Item = GridItem;
