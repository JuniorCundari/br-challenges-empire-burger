import { Subtitle } from '../Subtitle';
import { DescriptionService } from '../DescriptionService';
import { InfoIcon } from '../InfoIcon';

import cardPhone from '../../assets/images/card-phone.png';

import whatsapp from '../../assets/icons/whatsapp.svg';
import delivery from '../../assets/icons/delivery.svg';
import iceCream from '../../assets/icons/ice-cream.svg';
import ifood from '../../assets/icons/ifood.svg';
import phone from '../../assets/icons/phone.svg';

import { Container, ContainerContactsDelivery, ContactDelivery, ContainerRequest } from './styles';
import { Button } from '../Button';

export function Delivery() {
  return (
    <Container>
      <img className="card-banner" src={cardPhone} alt="Celular e Lanche Burger" />

      <Subtitle
        title="Nossas Entregas"
      />

      <ContainerContactsDelivery>
        <ContactDelivery>
          <InfoIcon
            icon={whatsapp}
            placeholder="Ícone whatsapp"
          />
          <DescriptionService
            title="WhatsApp"
            description="Vamos direto ao ponto, sem perder tempo!"
          />
        </ContactDelivery>

        <ContactDelivery>
          <InfoIcon
            icon={delivery}
            placeholder="Ícone moto de entrega"
          />
          <DescriptionService
            title="Entrega"
            description="Entregamos menos de 45 minutos na porta da sua casa!"
          />
        </ContactDelivery>

        <ContactDelivery>
          <InfoIcon
            icon={iceCream}
            placeholder="Ícone sorvete na taça"
          />
          <DescriptionService
            title="Sobremesa"
            description="Pedidos assima de 100 reais, ganham brindes."
          />
        </ContactDelivery>

        <ContactDelivery>
          <InfoIcon
            icon={ifood}
            placeholder="Ícone whatsapp"
          />
          <DescriptionService
            title="IFood"
            description="Nossa Loja é Top 1 da região!"
          />
        </ContactDelivery>
      </ContainerContactsDelivery>

      <ContainerRequest>
        <InfoIcon
          icon={phone}
          placeholder="Ícone de telefone celular"
          bg="secondary"
        />
        <DescriptionService
          title="faça o seu pedido agora mesmo!"
          description="Venha saborear a melhor experiência de hamburguenses artesanal do Empires Burger, com temática medieval!"
          color="secondary"
        />

        <Button
          title="Solicitar Pedido"
          bg="secondary"
          color="secondary"
        />
      </ContainerRequest>
    </Container>
  );
}
