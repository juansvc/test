import Link from 'next/link';
import styled from 'styled-components';

import { EyeNoneIcon } from '@radix-ui/react-icons';
import { Button, Checkbox, FormGroup, Label, Link as NDPLink, TextInput, theme } from '@zenprojects/ndp-design-system';

import Layout, { ContainerStyles } from '../../../components/Layouts/UserLogin';

const StyledContent = styled.div`
  ${ContainerStyles};
  flex-direction: column;
  align-items: flex-start;
  order: 1;
`;

const StyledFooter = styled.div`
  ${ContainerStyles};
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  order: 2;
`;

const StyledFormGroup = styled(FormGroup)`
  margin: 0;
  width: 100%;
`;

//TODO: Fix Link component from NDP
const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${theme.colors.tobiasBlue.color05};
  text-decoration: none;
  font-size: ${theme.space.get('s')};

  &:hover {
    color: ${theme.colors.tobiasBlue.color07};
    text-decoration: underline;
  }

  &:active,
  &:focus {
    color: ${theme.colors.tobiasBlue.color08};
    text-decoration: underline;
  }

  &:visited {
    color: ${theme.colors.tobiasBlue.color09};
    text-decoration: underline;
  }
`;

//TODO: API requests
export default function Login() {
  return (
    <Layout title='Log In' description='Fill in your email and password to enter your account'>
      <StyledContent>
        <StyledFormGroup alignment={'top'}>
          <Label htmlFor='email' size='xs' type='email' required>
            Email
          </Label>
          <TextInput id='email' required />
        </StyledFormGroup>
        <StyledFormGroup alignment={'top'}>
          <Label htmlFor='password' size='xs' required>
            Password
          </Label>
          <TextInput id='password' rightIcon={<EyeNoneIcon />} type='password' required />
        </StyledFormGroup>
        <StyledFormGroup direction='row'>
          <Checkbox checked id='remember' />
          <Label gap='none' htmlFor='remember'>
            Remember me
          </Label>
        </StyledFormGroup>
      </StyledContent>
      <StyledFooter>
        <StyledLink href='login/forgot'>
          {/* <NDPLink size='xs'> */}
          Forgot your password?
          {/* </NDPLink> */}
        </StyledLink>
        <Button>Log In</Button>
      </StyledFooter>
    </Layout>
  );
}
