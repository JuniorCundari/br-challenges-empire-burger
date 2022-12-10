import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 64px;
  margin-bottom: 40px;

  width: 100%;
`;

export const ContainerComments = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  margin-bottom: 64px;
`;

export const ContainerCommentSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
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

export const Marquee = styled.div`
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
