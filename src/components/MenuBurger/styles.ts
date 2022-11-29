import styled from 'styled-components';

export const Container = styled.section`
  /* position: relative; */
  /* width: 100vw; */
`;

export const Wrapper = styled.div`
  position: relative;
  /* width: 100%; */

  .banner {
    /* position: absolute;
    z-index: -1;
    left: -24px; */
    width: 100%;
    max-width: 428px;
  }
`;

export const ContainerMenuBurgerTitle = styled.div`
  padding-top: 40px;
  /* padding-left: 24px;
  padding-right: 24px; */

  div + button {
    margin-top: 16px;
    margin-bottom: 39px;
  }
`;

export const ContainerMenuList= styled.div`
  /* position: absolute;
  left: -24px;
  right: -24px; */
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
  img {
    width: 100%;
    max-width: 570px;
  }
`;
