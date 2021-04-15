import React, { useState } from 'react';
import { SideBar, SideBarButton, MeasurerCards, SideBarRight, Button, InputForm, RedButton } from '../../components';
import { Img } from '../../assets';
import Switch from './SwitchButton';
import Progress from './Progress';
import { useHistory } from "react-router-dom";

import { 
  Container, 
  Body, 
  Title, 
  BodyCard, 
  TitleCard, 
  TextCard, 
  Icon, 
  InfoText, 
  ContextCard,
  ContainerForm,
} from './styles';


const Experiment = () => {
  const [selectedId, setSelectedId] = useState(-1);
  const [isTest, setIsTest] = useState(false);
  const [checked, setChecked] = useState(false);
  const [maxTemp, setMaxTemp] = useState('');
  const [mimTemp, setMinTemp] = useState('');
  const [durMax, setDurMax] = useState('');
  const [durMin, setDurMin] = useState('');
  const [cicleHot, setCicleHot] = useState('');
  const [cicleCold, setCicleCold] = useState('');
  const history = useHistory();

  return (
    <Container>
      <SideBar>
      <>
          <SideBarButton 
            icon={Img.MONOMETRO} 
            selected={1 === selectedId}
            onClick={() => setSelectedId(1)}
          >
            Definir rotação
          </SideBarButton>

          <SideBarButton 
            icon={Img.FLASHLIGHT} 
            selected={2 === selectedId}
            onClick={() => setSelectedId(2)}
            button={
              <Switch
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
          >
            Ligar a lâmpada solar
          </SideBarButton>

          <SideBarButton 
            icon={Img.SENSOR} 
            selected={3 === selectedId}
            onClick={() => setSelectedId(3)}
          >
            Sensores
          </SideBarButton>

          <SideBarButton 
            icon={Img.HISTORIC} 
            selected={4 === selectedId}
            onClick={() => setSelectedId(4)}
          >
            Histórico de experimentos
          </SideBarButton>
            
          <RedButton
            // TODO: only appear when the test is running          
            selected={5 === selectedId}
            onClick={() => history.push("/experiment")} 
          >
            Cancelar experimento 
          </RedButton>
          
        </>
      </SideBar>
      <Body>
        <Title>Teste de Ciclagem Térmica</Title>
        <MeasurerCards />
        
        {!isTest && (
          <BodyCard>
            <ContextCard>
              <TitleCard>Orientações</TitleCard>

              <TextCard>
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </TextCard>

              <TextCard>
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </TextCard>
            </ContextCard>

            <Button style={{width: 40, alignSelf: 'center'}} onClick={() => setIsTest(true)}>Prosseguir</Button>
          </BodyCard>
        )}

        <ContainerForm>
          <TitleCard>Protocolo de teste</TitleCard>
  
          <InputForm
            label='Temperatura máxima (em ºC)'
            placeholder='Valor'
            value={maxTemp}
            onChange={(e) =>
              setMaxTemp(e.target.value.replace(/\D/,''))}
          />
          
          <InputForm
            label='Duração com temperatura máxima (em min):'
            placeholder='Duração'
            value={durMax}
            onChange={(e) =>
              setDurMax(e.target.value.replace(/\D/,''))}
          />

          <InputForm
            label='Temperatura mínima (em ºC)'
            placeholder='Valor'
            value={mimTemp}
            onChange={(e) =>
              setMinTemp(e.target.value.replace(/\D/,''))}
          />
          
          <InputForm
            label='Duração com temperatura mínima (em min):'
            placeholder='Duração'
            value={durMin}
            onChange={(e) =>
              setDurMin(e.target.value.replace(/\D/,''))}
          />

          <InputForm
            label='Quantidade de ciclos quentes (em unidades):'
            placeholder='Quantidade'
            value={cicleHot}
            onChange={(e) =>
              setCicleHot(e.target.value.replace(/\D/,''))}
          />

          <InputForm
            label='Quantidade de ciclos frios (em unidades):'
            placeholder='Quantidade'
            value={cicleCold}
            onChange={(e) =>
              setCicleCold(e.target.value.replace(/\D/,''))}
          />

          <Button style={{alignSelf: 'center', marginTop: 20}} onClick={() => setIsTest(true)}>Iniciar Teste</Button>
        </ContainerForm>
        
        <BodyCard>
          <ContextCard>
            <TitleCard>Teste em andamento</TitleCard>
              <TextCard>
                Aguarde enquanto o teste está sendo executado.
              </TextCard>
          <Progress />
          </ContextCard>
        </BodyCard>
        
      </Body>

      <SideBarRight>
        <>
            <Icon src={Img.CHECK} />
            <InfoText>Pronto para simulação</InfoText>

            <Icon src={Img.CHRONOMETER} />
            <InfoText>00:00:00</InfoText>
        </>
      </SideBarRight>
    </Container>
  );
}

export default Experiment;