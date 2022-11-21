import theme from '../../assets/styles/themes/default';

interface DescriptionServiceProps {
  title: string;
  description: string;
  color?: 'primary' | 'secondary';
}

import { Container } from './styles';

export function DescriptionService({
  title,
  description,
  color = 'primary'
}: DescriptionServiceProps) {
  return (
    <Container
      color={color === 'secondary' ? 'rgba(255, 255, 255, 0.85)' : theme.colors.brown[800]}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  );
}