import React from 'react';
import Card from '../Card';
import { Container } from './styles';
const options = [
  {
    label: 'Atmosféra (atm)',
    value: 'atm'
  },
  {
    label: 'Milibar (mbar)',
    value: 'mbar'
  },
  {
    label: 'Pascal (Pa)',
    value: 'Pa'
  },
];

function MeasurerCards() {
  return (
    <Container>
      <Card controls='p' title='Pressão média' options={options} />
      <Card controls='t' title='Temperatura da câmara' options={options} />
      <Card controls='tg' title='Temperatura linha de gás ' options={options} />
    </Container>
  );
}

export default MeasurerCards;