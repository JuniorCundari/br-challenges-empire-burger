import oferta1 from '../../assets/offers/oferta-1.png';
import oferta2 from '../../assets/offers/oferta-2.png';
import oferta3 from '../../assets/offers/oferta-3.png';

import timer from '../../assets/icons/timer.svg';

import { SpecialOffers } from '../SpecialOffers';
import { Subtitle } from '../Subtitle';
import { InfoIcon } from '../InfoIcon';

import { Container, HashtagSocialMedia, OpeningHours } from './styles';
import { DescriptionService } from '../DescriptionService';

export function Offers() {
  return (
    <Container>
      <Subtitle
        title="Ofertas Especiais"
        description="Aproveite todas as nossas ofertas, fiquei de olho porque sempre estamos mudando o nosso cardapio."
      />

      <SpecialOffers
        title="Burger Prime+Batata"
        description="250kg"
        subtitle="Apenas"
        placeholder="Lanche cortado com batatas fritas"
        color="secondary"
        color2="secondary"
        day="Hoje"
        image={oferta1}
      />
      <SpecialOffers
        title="Batata"
        description="150kg"
        placeholder="Cestinha com batatas fritas"
        image={oferta2}
      />
      <SpecialOffers
        title="Sorvete"
        description="50kg"
        placeholder="Cestinha de casquinha com sorvete"
        image={oferta3}
      />

      <OpeningHours>
        <InfoIcon
          icon={timer}
          placeholder="Ícone de um relógio"
          bg='secondary'
        />
        <DescriptionService
          title="Horário de funcionamento"
          description="Segunda a sexta: 17h00 - 23h00 Sábado a Domíngo: 18h30 - 23h00"
          color="secondary"
        />
      </OpeningHours>

      <HashtagSocialMedia>
        <p className="hashtag-title">Não esqueça de marcar a gente no Instagram:</p>
        <span className="hashtag-empireburger">#empireburger</span>
      </HashtagSocialMedia>
    </Container>
  );
}
