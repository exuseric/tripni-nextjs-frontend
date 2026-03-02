import { tv } from 'tailwind-variants';
import { focusRing } from '@/common/lib/react-aria-utils';

export const buttonStyles = tv({
  extend: focusRing,
  base: "group btn [-webkit-tap-highlight-color:transparent] [&:has(>svg:only-child)]:px-0 [&:has(>svg:only-child)]:h-8 [&:has(>svg:only-child)]:w-8",
  variants: {
    variant: {
      primary: "btn-filled",
      secondary: "btn-outlined",
      tonal: "btn-filled-tonal",
      destructive: "btn-danger",
      quiet: "btn-text",
    },
    size: {
      sm: "btn-sm",
    }
  },
  defaultVariants: {
    variant: "primary",
  }
});

export type ButtonVariant = keyof typeof buttonStyles.variants.variant;
export type ButtonSize = keyof typeof buttonStyles.variants.size;
