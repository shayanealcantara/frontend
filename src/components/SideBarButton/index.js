import React from 'react';

import { Container, Title, Icon } from './styles';

function SideBarButton({ children, selected = false, icon, onClick }) {
  return (
    <Container selected={selected} onClick={onClick}>
      <Icon src={icon}/>
      <Title>{children}</Title>
    </Container>
  );
}

export default SideBarButton;