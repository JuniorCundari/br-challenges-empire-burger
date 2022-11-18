import styled from 'styled-components';

export const Container = styled.section`
  img {
    position: absolute;
    left: 0;
    width: 100%;
    max-width: 1920px;
    min-height: 500px;
  }

  .container-title {
    position: absolute;
    top: 100px;

    span {
      color: ${({ theme }) => theme.colors.brown[900]};
      font-weight: 700;
      line-height: 25px;
    }

    h1 {
      color: ${({ theme }) => theme.colors.brown[500]};
      font-family: 'Lilita One';
      font-size: 54px;
      text-transform: uppercase;

      strong {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }

    h3 {
      font-weight: 400;
      color: ${({ theme }) => theme.colors.brown[300]};
      margin-bottom: 16px;

      strong {
        background: ${({ theme }) => theme.colors.yellow};
        border-radius: 5px;
        padding: 2px;
        height: 24px;
        width: 143px;
        color: ${({ theme }) => theme.colors.brown[800]};
      }
    }
  }

  @media (min-width: 901px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .container-title {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0;
    }
  }
`;
