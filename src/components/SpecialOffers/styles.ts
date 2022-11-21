import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 8px;

  position: relative;

  margin-top: 16px;

  img {
    max-width: 379px;
    width: 100%;
  }
`;

export const InfosOffer = styled.div<{color: string, color2: string}>`
  position: absolute;
  left: 20px;
  top: 14px;

  h3 {
    text-transform: uppercase;
    font-family: 'Lilita One';
    color: ${(props) => props.color};
  }

  span {
    color: ${(props) => props.color2};
  }
`;

export const InfosOfferDay = styled.div<{color: string, color2: string}>`
  position: absolute;
  right: 16px;
  bottom: 18px;

  span {
    color: ${(props) => props.color2};
  }

  h3 {
    text-transform: uppercase;
    font-family: 'Lilita One';
    color: ${(props) => props.color};
  }
`;
