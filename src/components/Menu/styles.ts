import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (min-width: 901px) {
    max-width: 1200px;
  }
`;

export const LinkLogo = styled.a`
  img {
    display: block;
    width: 100%;
    max-width: 264px;
  }
`;

export const LinkList = styled.ul<{open: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background: ${({ theme }) => theme.colors.brown[100]};

  transition: transform 0.9s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-150%)')};

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    a {
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.2rem;
    }
  }

  @media (min-width: 901px) {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    gap: 16px;

    height: 100%;

    background: none;

    transition: none;
    transform: none;

    li {
      a {
        text-transform: none;
        font-weight: 400;
        letter-spacing: normal;
      }
    }
  }
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;

  @media (min-width: 901px) {
    margin-left: 84px;
    margin-bottom: 0;
    border-right: 2px solid #B50B04;

    a:last-child {
      margin-right: 18px;
    }

    a {
      img {
        filter: brightness(0) invert(1);
      }
    }
  }
`;
