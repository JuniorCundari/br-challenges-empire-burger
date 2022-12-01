import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  top: 146px;

  .card-banner {
    width: 100%;
    max-width: 570px;
  }
`;

export const ContainerContactsDelivery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  margin-top: 16px;
`;

export const ContactDelivery = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 20px 13px;

  border-radius: 10px;
  background: #fff;

  div + div {
    padding-left: 14px;
    border-left: 1px solid rgba(29, 6, 5, 0.4);
  }
`;

export const ContainerRequest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  text-align: center;

  padding: 20px 25px;
  margin-top: 64px;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors.red[100]};

  div + div {
    padding-top: 8px;
    border-top: 1px solid rgba(29, 6, 5, 0.4);
  }

  button {
    margin-top: 8px;
    width: 100%;
    text-transform: uppercase;
  }
`;
