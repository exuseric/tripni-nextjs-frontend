import { tv } from 'tailwind-variants';
import { focusRing } from '@/common/lib/react-aria-utils';

export const buttonStyles = tv({
  extend: focusRing,
  base: "group btn [-webkit-tap-highlight-color:transparent]",
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
    },
    isIconOnly: {
      true: "p-1",
    }
  },
  compoundVariants: [
    { variant: 'primary', isIconOnly: true, class: 'btn-icon-filled' },
    { variant: 'secondary', isIconOnly: true, class: 'btn-icon-outlined' },
    { variant: 'tonal', isIconOnly: true, class: 'btn-icon-filled-tonal' },
    { variant: 'destructive', isIconOnly: true, class: 'btn-icon-danger' },
    { variant: 'quiet', isIconOnly: true, class: 'btn-icon' },
  ],
  defaultVariants: {
    variant: "primary",
  }
});

export type ButtonVariant = keyof typeof buttonStyles.variants.variant;
export type ButtonSize = keyof typeof buttonStyles.variants.size;