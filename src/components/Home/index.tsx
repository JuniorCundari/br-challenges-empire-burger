import bannerHeroMobile from '../../assets/images/banner-hero-mobile.png';
import bannerHero from '../../assets/images/banner-hero.png';
import { Button } from '../Button';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <picture>
        <source srcSet={bannerHero} media="(min-width: 700px)" />
        <img srcSet={bannerHeroMobile} alt="" />
      </picture>

      <div className="container-title">
        <span>Uma nova experiência!</span>
        <h1>
          King <strong>Burger</strong>
        </h1>
        <h3>
          Para quem tem um <strong>Apetite de um REI!</strong>
        </h3>
        <Button
          title="Comprar Agora"
          width="MD"
          height='MD'
        />
      </div>
    </Container>
  );
}
