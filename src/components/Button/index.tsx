import { Container } from './styles';

import theme from '../../assets/styles/themes/default';

interface ButtonProps {
  title: string;
  icon?: string;
  bg?: 'primary' | 'secondary';
  color?: 'primary' | 'secondary';
  width?: 'SM' | 'MD' | 'LG';
  height?: 'SM' | 'MD' | 'LG';
}

export function Button({
  title,
  icon,
  bg = 'primary',
  color = 'primary',
  width = 'SM',
  height = 'SM'
}: ButtonProps) {

  console.log(width);
  return (
    <Container
      type='button'
      bg={bg === 'secondary' ? theme.colors.yellow : theme.colors.red}
      color={color === 'secondary' ? theme.colors.brown[700] : '#fff'}
      width={width === 'MD'
        ? theme.button_size.width.MD
        : width === 'LG'
          ? theme.button_size.width.LG
          : theme.button_size.width.SM
      }
      height={height === 'MD'
        ? theme.button_size.height.MD
        : height === 'LG'
          ? theme.button_size.height.LG
          : theme.button_size.height.SM
      }
    >
      {icon && <img src={icon} alt="" />}
      {title}
    </Container>
  );
}
