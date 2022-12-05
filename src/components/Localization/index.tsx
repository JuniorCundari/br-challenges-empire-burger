import { Subtitle } from '../Subtitle';

import map from '../../assets/images/map.png';

import { Container, ContainerMap } from './styles';

export function Localization() {
  return (
    <Container>
      <Subtitle
        title="Onde fica o nosso Castelo"
        description="Estaremos de portas abertas para a nossa realeza."
      />

      <ContainerMap>
        <img src={map} alt="" />
      </ContainerMap>
    </Container>
  );
}
