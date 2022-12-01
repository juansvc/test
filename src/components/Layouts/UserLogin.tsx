import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Heading, Text, theme } from '@zenprojects/ndp-design-system';

import MainLogo from '../../assets/images/main-logo.png';

interface UserLoginProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const ContainerStyles = css`
  display: flex;
  gap: ${theme.space.get('s')};
  align-self: stretch;
`;

const StyledLayout = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.skyBlue.color01};
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.space.get('l')};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03);
  border-radius: ${theme.space.get('2xs')};
  background-color: ${theme.colors.white.color01};
  gap: ${theme.space.get('l')};
  justify-content: center;

  @media (min-width: 768px) {
    max-height: 530px;
    max-width: 600px;
    justify-content: unset;
  }
`;

const StyledHeader = styled.div`
  ${ContainerStyles};
  flex-direction: column;
  align-items: center;
  order: 0;
`;

const StyledText = styled(Text)`
  color: ${theme.colors.white.color07};
  text-align: center;
`;

export default function Layout({ children, title, description }: UserLoginProps) {
  return (
    <StyledLayout>
      <StyledContainer>
        <StyledHeader>
          <Image src={MainLogo} alt='Logo' width={64} />
          <Heading as='h1' size='2xl'>
            {title}
          </Heading>
          <StyledText size='s'>{description}</StyledText>
        </StyledHeader>
        {children}
      </StyledContainer>
    </StyledLayout>
  );
}
