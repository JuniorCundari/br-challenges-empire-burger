import logoFooter from '../../assets/images/logo-footer.svg';

import ifood from '../../assets/icons/ifood.svg';
import instagram from '../../assets/icons/instagram.svg';

import { Container, NavigationListFooter, Copyright } from './styles';
import { LinkLogo, ContainerSocialMedia } from '../Menu/styles';

export function Footer() {
  return (
    <Container>
      <LinkLogo>
        <img src={logoFooter} alt="Logo Empire Burger" />
      </LinkLogo>

      <NavigationListFooter>
        <ContainerSocialMedia>
          <a href="#">
            <img src={ifood} alt="Ícone do iFood" />
          </a>

          <a href="#">
            <img src={instagram} alt="Ícone do Instagram" />
          </a>
        </ContainerSocialMedia>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Localização</a>
          </li>
          <li>
            <a href="#">Cardápio</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
      </NavigationListFooter>

      <Copyright>
        <span>2022 &copy; EmpireBurger.</span>
        <span>Todos os direitos reservados.</span>
      </Copyright>
    </Container>
  );
}
