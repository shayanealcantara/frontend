import React from 'react';

import { Container, Header, Title, VerticalContainer, Circle, IndicatorNumber } from './styles';

function Card() {
  return (
    <Container elevation={5}>
      <Header>
        <Title>Pressão média (Pa)</Title>

        <VerticalContainer>
          <Circle />
          <Circle />
          <Circle />
        </VerticalContainer>
      </Header>

      <IndicatorNumber>21.0</IndicatorNumber>
    </Container>
  );
}

export default Card;