import React, { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@zenprojects/ndp-design-system';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AllTheProviders: React.FC = ({ children }: React.PropsWithChildren<Record<string, any>>) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender: any = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
