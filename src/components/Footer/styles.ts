import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 24px;
`;

export const NavigationListFooter = styled.nav`
  width: 100%;

  div {
    border-top: 1px solid rgba(29, 6, 5, 0.15);

    padding-top: 14px;
    margin-top: 14px;
    margin-bottom: 14px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;

    padding-top: 14px;
    padding-bottom: 14px;

    border-top: 1px solid rgba(29, 6, 5, 0.15);
    border-bottom: 1px solid rgba(29, 6, 5, 0.15);

    li {
      a {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.brown[500]};
      }

      &:hover {
        font-weight: 700;
        color: #000;
      }
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  margin-top: 16px;
  margin-bottom: 20px;

  span {
    font-size: 14px;
  }
`;
