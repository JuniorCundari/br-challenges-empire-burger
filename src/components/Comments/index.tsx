import { Subtitle } from '../Subtitle';
import { Comment } from '../Comment';

import avatar from '../../assets/images/avatar.png';
import burgerChips from '../../assets/instagram/burger-chips.png';
import burger from '../../assets/instagram/burger.png';
import threeBurger from '../../assets/instagram/three-burger.png';
import womanBurger from '../../assets/instagram/woman-burger.png';

import { Container, ContainerComments, ContainerCommentSocialMedia, WrapperImagesMarquee, WrapperImages, Marquee } from './styles';

export function Comments() {
  return (
    <Container>
      <Subtitle
        title="Nossa Realeza"
        description="A satisfação de nossos clientes em primeiro lugar!"
      />

      <ContainerComments>
        <Comment
          comment='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas rem enim sapiente, debitis laudantium ab assumenda eaque sed iste, quo ad alias odit suscipit libero veniam, tenetur qui neque."'
          avatar={avatar}
          name="Carla Gomes"
          age={23}
          profession="Designer"
        />
      </ContainerComments>

      <ContainerCommentSocialMedia>
        <Subtitle
          title="Publicações do Instagram"
          description="Todos os nossos clientes são tratados como rei e rainha, com a nossa culinária artesanal."
        />

        <WrapperImagesMarquee>
          <WrapperImages>
            <img src={burgerChips} alt="" />
            <img src={burger} alt="" />
            <img src={threeBurger} alt="" />
            <img src={womanBurger} alt="" />
          </WrapperImages>

          <Marquee>
            <span>#Empireburger &#x2022;</span>
            <span>#Empireburger &#x2022;</span>
            <span>#Empireburger &#x2022;</span>
            <span>#Empireburger &#x2022;</span>
            <span>#Empireburger &#x2022;</span>
          </Marquee>

        </WrapperImagesMarquee>
      </ContainerCommentSocialMedia>
    </Container>
  );
}
