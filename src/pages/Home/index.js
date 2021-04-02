import React, { useState } from 'react';
import { SideBar, SideBarButton, MeasurerCards, SideBarRight } from '../../components';
import { Img } from '../../assets';

import { Container, Body, Title, BodyCard, TitleCard, TextCard, Icon, InfoText } from './styles';

const buttons = [
  {
    id: 1,
    text: 'Despressurizar câmara',
    icon: Img.MONOMETRO
  },
  {
    id: 2,
    text: 'Sensores',
    icon: Img.SENSOR
  },
  {
    id: 3,
    text: 'Histórico de experimentos',
    icon: Img.HISTORIC
  },
];

const Home = () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <Container>
      <SideBar>
        <>
          {buttons.map(item => 
            <SideBarButton 
              key={item.id} 
              icon={item.icon} 
              selected={item.id === selectedId}
              onClick={() => setSelectedId(item.id)}
            >
              {item.text}
            </SideBarButton>
          )}
        </>
      </SideBar>
      <Body>
        <Title>Painel de Monitoramento de Testes</Title>
        <MeasurerCards />

        <BodyCard>
          <TitleCard>Orientações</TitleCard>

          <TextCard>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TextCard>

          <TextCard>
            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TextCard>
        </BodyCard>
      </Body>

      <SideBarRight>
        <>
            <Icon src={Img.CLOSE} />
            <InfoText>Não pronto para simulação</InfoText>
        </>
      </SideBarRight>
    </Container>
  );
}

export default Home;