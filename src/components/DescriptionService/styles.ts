import styled from 'styled-components';

export const Container = styled.div`

  h3 {
    text-transform: uppercase;
    font-family: 'Lilita One';
    color: ${({ theme }) => theme.colors.brown[900]};
    opacity: 0.8;
  }

  p {
    color: ${(props) => props.color};
  }
`;
