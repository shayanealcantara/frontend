import React from 'react';
import { Container, Context, Header, Title, InfoText } from './styles';

function SideBar({ children }) {
  return (
    <Container>
      <Header>
        <Title>Nível dos tanques</Title>

        <InfoText>LN2: 90%</InfoText>
        <InfoText>GN2: 80%</InfoText>
      </Header>
      <Context>
        {children}
      </Context>
    </Container>
  );
}

export default SideBar;