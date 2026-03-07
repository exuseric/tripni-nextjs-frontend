"use client";
import React from "react";
import { composeRenderProps, Button as RACButton, ButtonProps as RACButtonProps } from "react-aria-components";
import { ButtonSize, buttonStyles, ButtonVariant } from "./button-styles";
import { useButtonGroup } from "./ButtonGroupContext";

export interface ButtonProps extends RACButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isIconOnly?: boolean;
}

export function Button(props: ButtonProps) {
  const group = useButtonGroup();
  const variant = props.variant ?? group?.variant;
  const size = props.size ?? group?.size;

  // Determine spinner stroke color based on the button variant's text color
  const spinnerStrokeColor = React.useMemo(() => {
    switch (variant) {
      case "secondary":
      case "quiet":
        return "var(--color-primary)";
      case "destructive":
        return "white"; // text-on-error is typically white
      case "primary":
      case "tonal":
      default:
        // text-on-primary and text-on-secondary-container are typically white or dark
        // but white is a safer default for filled buttons.
        return "white";
    }
  }, [variant]);

  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        buttonStyles({
          ...renderProps,
          variant,
          size,
          isIconOnly: props.isIconOnly,
          className
        })
      )}
    >
      {composeRenderProps(props.children, (children, { isPending }) => (
        <>
          {isPending ? (
            <span aria-hidden className="flex absolute inset-0 justify-center items-center">
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                stroke={spinnerStrokeColor}
              >
                <circle cx="12" cy="12" r="10" strokeWidth="4" fill="none" className="opacity-25" />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  pathLength="100"
                  strokeDasharray="60 140"
                  strokeDashoffset="0"
                />
              </svg>
            </span>
          ) : <>
            {children}
          </>}
        </>
      ))}
    </RACButton>
  );
}