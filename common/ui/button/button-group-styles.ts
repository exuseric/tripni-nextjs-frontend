import { tv } from 'tailwind-variants';

export const buttonGroupStyles = tv({
  base: 'inline-flex group/btn-group isolate',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    isAttached: {
      true: 'gap-0',
      false: 'gap-2',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      isAttached: true,
      class: [
        // Reset child rounded corners and shared borders
        '[&>button]:!rounded-none [&>a]:!rounded-none',
        '[&>*:first-child]:!rounded-l-4xl',
        '[&>*:last-child]:!rounded-r-4xl',
        '[&>*:not(:last-child)]:border-r-0',
        // Handle borders and focus rings correctly in a group
        '[&>*:focus-visible]:z-10',
        '[&>*:active]:z-10',
        '[&>*.is-selected]:z-10',
      ],
    },
    {
      orientation: 'vertical',
      isAttached: true,
      class: [
        // Reset child rounded corners and shared borders
        '[&>button]:!rounded-none [&>a]:!rounded-none',
        '[&>*:first-child]:!rounded-t-4xl',
        '[&>*:last-child]:!rounded-b-4xl',
        '[&>*:not(:last-child)]:border-b-0',
        // Handle borders and focus rings correctly in a group
        '[&>*:focus-visible]:z-10',
        '[&>*:active]:z-10',
        '[&>*.is-selected]:z-10',
      ],
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    isAttached: true,
  },
});
