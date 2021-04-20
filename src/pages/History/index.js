import React, { useState } from 'react';
import { SideBar, SideBarButton, Button } from '../../components';
import { useHistory } from "react-router-dom";
import { Img } from '../../assets';
import Switch from '../Experiment/SwitchButton';
import { DialogRotation } from '../../components';

import { 
  Container, 
  Body, 
  Title, 
  BodyCard, 
  TextCard, 
  ExperimentTitle,
} from './styles';


const History = () => {
  const [selectedId, setSelectedId] = useState(-1);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <Container>
      <SideBar>
      <>
          <SideBarButton 
            icon={Img.MONOMETRO} 
            selected={1 === selectedId}
            onClick={() => setOpen(true)}
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
          
          {/* TODO: include list of experiments to choose */}
          <SideBarButton 
            icon={Img.HISTORIC} 
            selected={4 === selectedId}
            onClick={() => history.push("/history")} 
          >
            Histórico de experimentos
          </SideBarButton>
            
        </>
      </SideBar>
      <Body>
        <Title>Histórico de Experimentos</Title>
        <ExperimentTitle>experimento-25-02-2021</ExperimentTitle>

        {/* TODO: Redirect to previous page */}
        <Button style={{width: 20, marginBottom: 10, backgroundColor: '#C4C4C4', color: 'black'}} onClick={() => history.goBack()}>Voltar</Button>
        
        <BodyCard>
            <TextCard>Duração transiente com temperatura baixa: 00:10:00</TextCard>
            <TextCard>Duração com temperatura máxima fria: 00:05:00</TextCard>

            <TextCard>Duração transiente com temperatura baixa: 00:10:00</TextCard>
            <TextCard>Duração com temperatura máxima quente: 00:05:00</TextCard>
            
            <TextCard>Duração da câmara despressurizada: 00:10:00</TextCard>
            <TextCard>Duração total: 00:05:00</TextCard>
        </BodyCard>
        
        {/* TODO: Export data */}
        <Button style={{width: 20, alignSelf: 'end', marginTop: 10, backgroundColor: '#4c7291'}} onClick={() => history.goBack()}>Exportar</Button>
      </Body>

      <DialogRotation open={open} setOpen={setOpen} />
    </Container>
  );
}

export default History;