'use client';
import React, { createContext, useContext, useMemo } from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '@/common/lib/utils';

// 1. Style Definition with Slots
const headingStyles = tv({
    slots: {
        wrapper: 'w-full',
        title: 'font-heading tracking-tight capitalize',
        description: 'max-w-prose font-body',
        actions: ''
    },
    variants: {
        variant: {
            hero: {
                wrapper: 'gap-4',
                description: 'text-lg md:text-xl'
            },
            page: {
                wrapper: 'gap-3',
                description: 'text-base md:text-lg',
                title: 'max-w-[50ch]'
            },
            card: {
                wrapper: 'gap-1.5',
                title: 'text-xl font-bold leading-tight',
                description: 'text-sm font-medium',
                actions: 'mt-2 gap-3'
            }
        },
        level: {
            h1: { title: 'text-4xl md:text-5xl font-[900] max-w-[15ch]' },
            h2: { title: 'text-2xl md:text-3xl font-bold' },
            h3: { title: 'text-xl md:text-2xl font-bold' },
            h4: { title: 'text-lg md:text-xl font-semibold' },
            h5: { title: 'text-md md:text-lg font-semibold' },
            h6: { title: 'text-base md:text-lg font-medium' }
        },
        align: {
            left: {
                wrapper: 'flex-col-start items-start text-left',
                actions: 'flex-col-start items-start justify-start'
            },
            center: {
                wrapper: 'flex-center-col text-center',
                actions: 'flex-center-col'
            },
            right: {
                wrapper: 'flex-col-start items-end text-right',
                actions: 'flex-col-start items-end justify-end'
            },
            between: {
                wrapper: 'flex-row-between items-center',
                actions: 'justify-end mt-0'
            }
        },
        color: {
            default: {
                title: 'text-on-surface',
                description: 'text-muted-foreground'
            },
            inverse: {
                title: 'text-white',
                description: 'text-white'
            },
            inherit: {
                title: 'text-inherit',
                description: 'text-inherit'
            },
            primary: {
                title: 'text-primary',
                description: 'text-primary'
            }
        }
    },
    compoundVariants: [
        {
            variant: 'hero',
            level: 'h1',
            class: { title: 'text-5xl md:text-6xl' }
        },
        {
            variant: 'card',
            color: 'default',
            class: {
                title: 'text-on-surface',
                description: 'text-on-surface-variant/80'
            }
        }
    ],
    defaultVariants: {
        variant: 'page',
        align: 'left',
        level: 'h1',
        color: 'default'
    }
});

// 2. Context Definition
type HeadingContextValue = {
    variant?: 'hero' | 'page' | 'card';
    align?: 'left' | 'center' | 'right' | 'between';
    color?: 'default' | 'inverse' | 'inherit' | 'primary';
};

const HeadingContext = createContext<HeadingContextValue | undefined>(undefined);

const useHeadingContext = () => {
    const context = useContext(HeadingContext);
    if (!context) {
        return { variant: 'page', align: 'left', color: 'default' } as HeadingContextValue;
    }
    return context;
};

// 3. Prop Types
type HeadingProps = React.HTMLAttributes<HTMLDivElement> & HeadingContextValue;

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

type DescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
type ActionsProps = React.HTMLAttributes<HTMLDivElement>;

// 4. Components
const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(
    ({ variant = 'page', align = 'left', color = 'default', className, children, ...props }, ref) => {
        const { wrapper } = headingStyles({ variant, align, color });
        const value = useMemo(() => ({ variant, align, color }), [variant, align, color]);

        return (
            <HeadingContext.Provider value={value}>
                <div ref={ref} className={wrapper({ className: cn(wrapper(), className) })} {...props}>
                    {children}
                </div>
            </HeadingContext.Provider>
        );
    }
);
Heading.displayName = 'Heading';

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
    ({ level = 'h1', className, ...props }, ref) => {
        const { variant, align, color } = useHeadingContext();
        const { title } = headingStyles({ variant, align, level, color });
        const Tag = level as React.ElementType;
        return <Tag ref={ref} className={cn(title(), className)} {...props} />;
    }
);
Title.displayName = 'Heading.Title';

const Description = React.forwardRef<HTMLParagraphElement, DescriptionProps>(
    ({ className, ...props }, ref) => {
        const { variant, align, color } = useHeadingContext();
        const { description } = headingStyles({ variant, align, color });
        return <p ref={ref} className={cn(description(), className)} {...props} />;
    }
);
Description.displayName = 'Heading.Description';

const Actions = React.forwardRef<HTMLDivElement, ActionsProps>(
    ({ className, ...props }, ref) => {
        const { variant, align, color } = useHeadingContext();
        const { actions } = headingStyles({ variant, align, color });
        return <div ref={ref} className={cn(actions(), className)} {...props} />;
    }
);
Actions.displayName = 'Heading.Actions';

// 5. Export all components and types
export { Heading, Title, Description, Actions };
export type { HeadingProps, TitleProps, DescriptionProps, ActionsProps };
