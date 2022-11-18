import styled from 'styled-components';

export const Container = styled.nav<{open: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 100%;
    max-width: 264px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.2rem;
      }
    }

    .social-media {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 13px;

      margin-bottom: 24px;
    }
  }

  @media (min-width: 901px) {
    max-width: 1200px;

    ul {
      position: static;
      flex-direction: row;
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

      .social-media {
        margin-left: 100px;
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
    }
  }
`;
