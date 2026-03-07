import { tv } from 'tailwind-variants';

export const cardStyles = tv({
  slots: {
    root: 'group/card relative flex flex-col overflow-hidden rounded-card-md transition-all duration-300 ease-emphasized',
    header: 'p-3',
    media: 'relative w-full overflow-hidden bg-surface-container-low',
    content: 'flex-1 px-5 py-3 text-sm leading-relaxed text-on-surface-variant font-body',
    footer: 'px-5 py-4 pt-2 text-xs font-medium tracking-wide text-on-surface-variant/60 uppercase',
    actions: 'px-4 pt-2 pb-4',
  },
  variants: {
    variant: {
      elevated: {
        root: 'bg-surface-container-low shadow-level-1 hover:shadow-level-2 hover:bg-surface-container',
      },
      filled: {
        root: 'bg-surface-container-highest/60 hover:bg-surface-container-highest transition-colors',
      },
      outlined: {
        root: 'border border-outline-variant bg-surface hover:border-outline hover:bg-surface-container-lowest shadow-none hover:shadow-level-1',
      },
    },
    isHoverable: {
      true: {
        root: 'cursor-pointer active:scale-[0.98]',
      },
    },
  },
  defaultVariants: {
    variant: 'filled',
  },
});

export type CardVariants = typeof cardStyles;
