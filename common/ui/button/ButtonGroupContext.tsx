"use client";
import { createContext, useContext } from "react";
import { ButtonVariant, ButtonSize } from "./button-styles";

export interface ButtonGroupContextValue {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isAttached?: boolean;
}

export const ButtonGroupContext = createContext<ButtonGroupContextValue | undefined>(undefined);

export const useButtonGroup = () => useContext(ButtonGroupContext);
