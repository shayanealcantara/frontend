import React from 'react';

import { Container, Title, Icon } from './styles';

function SideBarButton({ children, selected = false, icon, onClick, button }) {
  return (
    <Container selected={selected} onClick={onClick}>
      <Icon src={icon}/>
      <Title>{children}</Title>
      {button}
    </Container>
  );
}

export default SideBarButton;