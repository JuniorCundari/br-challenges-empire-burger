import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 70px;

  width: 100%;

  .slick-slide {
    & > div {
      margin: 0 6px;
    }

    .slick-list .slick-track {
      border: 2px solid red;
      opacity: 0.6;
    }
  }

  .slick-dots {
    li {
      width: 87px;
      height: 6px;
      background: white;

      button::before {
        color: white;
        width: 100%;
        top: -7px;
      }
    }

    .slick-active {
      background: ${({ theme }) => theme.colors.yellow};

      button::before {
        color: ${({ theme }) => theme.colors.yellow};
        width: 100%;
      }
    }
  }
`;

export const ContainerCommentSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  margin-top: 64px;
`;

export const WrapperImagesMarquee = styled.div`
  margin-top: 16px;
  width: 100vw;
`;

export const WrapperImages = styled.div`
  display: flex;
  justify-content: center;

  overflow-x: hidden;

  background-color: #21201B;

  img {
    width: 100%;
    max-width: 180px;
    max-height: 130px;

    &:first-child {
      mask-image: linear-gradient(to left, black -97.60%, transparent 118.38%);
    }

    &:last-child {
      mask-image: linear-gradient(to right, black -12.60%, transparent 60.38%);
    }
  }
`;

export const ContainerMarquee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  height: 50px;

  white-space: nowrap;
  overflow-x: hidden;

  background: ${({ theme }) => theme.colors.yellow};

  span {
    font-family: 'Lilita One';
    font-size: 28px;
    color: ${({ theme }) => theme.colors.brown[900]};
    text-transform: uppercase;
  }
`;
