"use client";
import React, { useMemo } from "react";
import { Group, GroupProps, composeRenderProps } from "react-aria-components";
import { buttonGroupStyles } from "./button-group-styles";
import { ButtonGroupContext, ButtonGroupContextValue } from "./ButtonGroupContext";
import { ButtonVariant, ButtonSize } from "./button-styles";

export interface ButtonGroupProps extends GroupProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  orientation?: "horizontal" | "vertical";
  isAttached?: boolean;
}

export function ButtonGroup(props: ButtonGroupProps) {
  const { variant, size, orientation = "horizontal", isAttached = true, className, children, ...rest } = props;

  const contextValue = useMemo<ButtonGroupContextValue>(() => ({
    variant,
    size,
    isAttached
  }), [variant, size, isAttached]);

  return (
    <ButtonGroupContext.Provider value={contextValue}>
      <Group
        {...rest}
        data-orientation={orientation}
        className={composeRenderProps(className, (className, renderProps) =>
          buttonGroupStyles({
            ...renderProps,
            orientation,
            isAttached,
            className,
          })
        )}
      >
        {children}
      </Group>
    </ButtonGroupContext.Provider>
  );
}
