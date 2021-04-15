import React, { useState } from 'react';
import { SideBar, SideBarButton, MeasurerCards, SideBarRight } from '../../components';
import { Img } from '../../assets';
import { useHistory } from "react-router-dom";

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
  const [selectedId, setSelectedId] = useState(-1);
  const [isPressure, setIsPressure] = useState(true);
  const history = useHistory();

  return (
    <Container>
      <SideBar>
        <>
        {isPressure ? (
          <SideBarButton 
            icon={Img.MONOMETRO} 
            selected={1 === selectedId}
            onClick={() => setIsPressure(false)}
          >
          Despressurizar câmara
        </SideBarButton>
        ):(
        <>
          <SideBarButton 
            icon={Img.MONOMETRO} 
            selected={2 === selectedId}
            onClick={() => setIsPressure(true)}
          >
            Voltar câmara a pressão ambiente
          </SideBarButton>

          <SideBarButton 
            icon={Img.TEST} 
            selected={3 === selectedId}
            onClick={() => history.push("/experiment")} 
          >
            Teste de ciclagem térmica
          </SideBarButton>
        </>
        )}
          <SideBarButton 
            icon={Img.SENSOR} 
            selected={4 === selectedId}
            onClick={() => setSelectedId(4)}
          >
            Sensores
          </SideBarButton>

          <SideBarButton 
            icon={Img.HISTORIC} 
            selected={5 === selectedId}
            onClick={() => setSelectedId(5)}
          >
            Histórico de experimentos
          </SideBarButton>
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

        {isPressure ? (
          <SideBarRight>
            <Icon src={Img.CLOSE} />
            <InfoText>Não pronto para simulação</InfoText>
          </SideBarRight>
        ):(
          <SideBarRight>
            <Icon src={Img.CHECK} />
            <InfoText>Pronto para simulação</InfoText>
          </SideBarRight>
        )}
    </Container>
  );
}

export default Home;