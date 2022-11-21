import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .banner {
    position: relative;
    left: 0;
    width: 100%;
    /* max-width: 1920px;
    max-height: 1200px; */
  }
`;

export const ContainerTitle = styled.div`
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
`;

export const ContainerServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  position: absolute;
  bottom: -205px;

  max-width: 355px;
  width: 100%;
  max-height: 323px;
  height: 100%;

  padding: 26px 0;

  background: #fff;
  box-shadow: 0px 4px 35px rgba(179, 155, 132, 0.3);
  border-radius: 10px;

  & > div {
    border-bottom: 1px solid rgba(73, 46, 21, 0.15);
    padding-bottom: 16px;
  }

  & :last-child {
    border: none;
    padding-bottom: 0;
  }
`;

export const ContainerService = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  width: 80%;

  margin-left: 36px;
`;
