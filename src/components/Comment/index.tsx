interface CommentProps {
  comment: string;
  avatar: string;
  name: string;
  age: number;
  profession: string;
}

import { Container, ContainerAvatar, ContainerInfo, ContainerUser } from './styles';

export function Comment({ comment, avatar, name, age, profession }: CommentProps) {
  return (
    <Container>
      <p>{comment}</p>
      <ContainerAvatar>
        <img src={avatar} alt="Foto de perfil" />
        <ContainerUser>
          <h4>{name}</h4>
          <ContainerInfo>
            <span>{age} anos &#x2022;</span>
            <span>{profession}</span>
          </ContainerInfo>
        </ContainerUser>
      </ContainerAvatar>
    </Container>
  );
}
