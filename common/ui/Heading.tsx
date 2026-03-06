'use client';
import React, {createContext, useContext, useMemo} from 'react';
import {tv} from 'tailwind-variants';

// 1. Style Definition with Slots
const headingStyles = tv({
    slots: {
        wrapper: 'flex flex-col',
        title: 'font-heading tracking-tight capitalize',
        description: 'text-muted-foreground max-w-prose',
        actions: 'flex flex-wrap gap-4 mt-4'
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
                wrapper: 'gap-1',
            }
        },
        level: {
            h1: {title: 'text-4xl md:text-5xl font-[900] max-w-[15ch]'},
            h2: {title: 'text-2xl md:text-3xl font-bold'},
            h3: {title: 'text-2xl md:text-3xl font-bold'},
            h4: {title: 'text-xl md:text-2xl font-semibold'},
            h5: {title: 'text-lg md:text-xl font-semibold'},
            h6: {title: 'text-base md:text-lg font-medium'}
        },
        align: {
            left: {
                wrapper: 'items-start text-left',
                actions: 'justify-start'
            },
            center: {
                wrapper: 'items-center text-center',
                actions: 'justify-center'
            },
            right: {
                wrapper: 'items-end text-right',
                actions: 'justify-end'
            }
        }
    },
    compoundVariants: [
        {
            variant: 'hero',
            level: 'h1',
            class: {title: 'text-5xl md:text-6xl'}
        }
    ],
    defaultVariants: {
        variant: 'page',
        align: 'left',
        level: 'h1'
    }
});

// 2. Context Definition
type HeadingContextValue = {
    variant?: 'hero' | 'page' | 'card';
    align?: 'left' | 'center' | 'right';
};

const HeadingContext = createContext<HeadingContextValue | undefined>(undefined);

const useHeadingContext = () => {
    const context = useContext(HeadingContext);
    if (!context) {
        // Return defaults if not used within a Heading provider
        return {variant: 'page', align: 'left'} as HeadingContextValue;
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
    ({variant = 'page', align = 'left', className, children, ...props}, ref) => {
        const {wrapper} = headingStyles({variant, align});
        const value = useMemo(() => ({variant, align}), [variant, align]);

        return (
            <HeadingContext.Provider value={value}>
                <div ref={ref} className={wrapper({className})} {...props}>
                    {children}
                </div>
            </HeadingContext.Provider>
        );
    }
);
Heading.displayName = 'Heading';

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
    ({level = 'h1', className, ...props}, ref) => {
        const {variant, align} = useHeadingContext();
        const {title} = headingStyles({variant, align, level});
        const Tag = level as React.ElementType;
        return <Tag ref={ref} className={title({className})} {...props} />;
    }
);
Title.displayName = 'Heading.Title';

const Description = React.forwardRef<HTMLParagraphElement, DescriptionProps>(
    ({className, ...props}, ref) => {
        const {variant, align} = useHeadingContext();
        const {description} = headingStyles({variant, align});
        return <p ref={ref} className={description({className})} {...props} />;
    }
);
Description.displayName = 'Heading.Description';

const Actions = React.forwardRef<HTMLDivElement, ActionsProps>(
    ({className, ...props}, ref) => {
        const {variant, align} = useHeadingContext();
        const {actions} = headingStyles({variant, align});
        return <div ref={ref} className={actions({className})} {...props} />;
    }
);
Actions.displayName = 'Heading.Actions';

// 5. Export all components and types
export {Heading, Title, Description, Actions};
export type {HeadingProps, TitleProps, DescriptionProps, ActionsProps};