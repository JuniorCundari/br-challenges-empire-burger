import { Button } from '../Button';
import { SecondSubtitle } from '../SecondSubtitle';

import bannerMenuMobile from '../../assets/images/banner-menu-mobile.png';
import bannerMenu from '../../assets/images/banner-menu.png';
import cardWomanEating from '../../assets/images/card-woman-eating.png';

import { Container, ContainerMenuBurgerTitle, ContainerMenuList, Item, MenuList, Wrapper, ItemTitle, ContainerAttendance, ContainerTitleAttendance } from './styles';

export function MenuBurger() {
  return (
    <Container>
      <Wrapper>
        <picture>
          <source srcSet={bannerMenu} media="(min-width: 700px)" />
          <img className="banner" srcSet={bannerMenuMobile} alt="" />
        </picture>

        <ContainerMenuBurgerTitle>
          <SecondSubtitle
            title="Escolha o seu combo imperial,"
            subtitle="Peça agora!"
            description="Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre promoção!"
          />

          <Button
            title="Ver Cardápio Completo"
            width="LG"
            height="MD"
          />
        </ContainerMenuBurgerTitle>
      </Wrapper>

      <ContainerMenuList>
        <h3>Nossa Especialidade</h3>
        <MenuList>
          <Item>
            <ItemTitle>
              <span>Classic Burger</span>
              <strong>R$49,99</strong>
            </ItemTitle>
            <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
          </Item>

          <Item>
            <ItemTitle>
              <span>Special Big Burger</span>
              <strong>R$49,99</strong>
            </ItemTitle>
            <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
          </Item>

          <Item>
            <ItemTitle>
              <span>Special Big Burger</span>
              <strong>R$49,99</strong>
            </ItemTitle>
            <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
          </Item>

          <Item>
            <ItemTitle>
              <span>Mexican Burger</span>
              <strong>R$49,99</strong>
            </ItemTitle>
            <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
          </Item>
        </MenuList>
      </ContainerMenuList>

      <ContainerAttendance>
        <img className="card-banner" src={cardWomanEating} alt="Mulher comendo um lanche" />
        <ContainerTitleAttendance>
          <SecondSubtitle
            title="Atendimento "
            subtitle="Personalizado"
            description="Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal."
          />

          <Button
            title="Cardápio Imperial"
            width="MD"
            height="MD"
          />
        </ContainerTitleAttendance>
      </ContainerAttendance>
    </Container>
  );
}
