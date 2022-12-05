import styled from 'styled-components';

export const Container = styled.section``;

export const Wrapper = styled.div`
  position: relative;

  @media (min-width: 945px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerCombo = styled.div`
  position: relative;
  left: -24px;

  width: 100vw;

  .banner {
    display: block;
    width: 100vw;
    max-width: 700px;

    @media (min-width: 700px) {
      max-width: 945px;
    }
  }
`;

export const ContainerMenuBurgerTitle = styled.div`
  position: absolute;
  top: 40px;
  left: 24px;

  max-width: 280px;
  width: 100%;

  div + button {
    margin-top: 16px;
  }

  @media (min-width: 700px) {
    left: 300px;
    top: 30%;
    left: 400px;
  }
`;

export const ContainerMenuList= styled.div`
  position: relative;
  left: -24px;

  width: 100vw;
  max-height: 575px;

  background: ${({ theme }) => theme.colors.brown[500]};
  padding: 0 24px;
  padding-bottom: 50px;

  h3 {
    font-family: 'Lilita One';
    font-size: 25px;
    color: ${({ theme }) => theme.colors.yellow};
    text-transform: uppercase;
    padding-top: 55px;
  }
`;

export const MenuList = styled.div`
  margin-top: 24px;

  div + div {
    margin-top: 16px;
  }
`;

export const Item = styled.div`
  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 4px;
  }
`;

export const ItemTitle = styled.div`
  font-family: 'Lilita One';
  font-size: 20px;
  color: ${({ theme }) => theme.colors.brown[100]};
  text-transform: uppercase;

  display: flex;
  gap: 3px;

  span {
    display: flex;
    flex: 1;
    height: 20px;
    gap: 3px;

    &::after {
      content: '';
      border-bottom: 3px dotted #FAE4D0;
      flex: 1;
    }
  }

  strong {
    display: block;
    text-align: right;
  }
`;

export const ContainerAttendance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 48px;

  .card-banner {
    display: block;
    width: 100%;
    max-width: 570px;
  }
`;

export const ContainerTitleAttendance = styled.div`
  margin-top: 16px;

  border-bottom: 1px solid rgba(29, 6, 5, 0.15);

  div + button {
    margin-top: 8px;
    margin-bottom: 64px;
  }
`;
