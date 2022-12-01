import { Button as NDPButton } from '@zenprojects/ndp-design-system';

export const Button = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <NDPButton>{children}</NDPButton>;
};
