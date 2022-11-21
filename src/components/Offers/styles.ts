import styled from 'styled-components';

export const Container = styled.section`
  display: grid;

  max-width: 380px;
  width: 100%;

  margin-top: 280px;
`;

export const OpeningHours = styled.section`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 20px 13px;
  margin-top: 38px;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors.red[100]};

  div + div {
    padding-left: 14px;
    border-left: 1px solid rgba(29, 6, 5, 0.4);
  }
`;
