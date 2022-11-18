import { MenuMobileProps } from '../MenuMobile';
import { Button } from '../Button';

import logo from '../../assets/images/logo.png';
import ifood from '../../assets/icons/ifood.svg';
import instagram from '../../assets/icons/instagram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

import { Container } from './styles';

export function Menu({ open, setOpen }: MenuMobileProps) {
  const close = () => setOpen(false);

  return (
    <Container open={open}>
      <a href="#">
        <img className="logo" src={logo} alt="Logo Empire Burger" />
      </a>

      <ul>
        <li>
          <a href="#home" onClick={() => close()}>Home</a>
        </li>
        <li>
          <a href="#offer" onClick={() => close()}>Promoção</a>
        </li>
        <li>
          <a href="#ca" onClick={() => close()}>Cardápio</a>
        </li>
        <li>
          <a href="#ca" onClick={() => close()}>Comentário</a>
        </li>
        <li>
          <a href="#ca" onClick={() => close()}>Contato</a>
        </li>

        <div className="social-media">
          <a href="">
            <img src={ifood} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </div>

        <Button
          title="Contato"
          icon={whatsapp}
          bg="secondary"
          color="secondary"
        />
      </ul>
    </Container>
  );
}
