'use client';

import { useRouter } from 'next/navigation';
import { RouterProvider } from 'react-aria-components';
import React from "react";

export function ReactAriaProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <RouterProvider navigate={router.push}>
      {children}
    </RouterProvider>
  );
}
