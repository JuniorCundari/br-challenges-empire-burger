import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 280px;
`;

export const GridOffers = styled.div`
  margin-top: 16px;
  margin-bottom: 38px;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 370px;
    gap: 30px;

    div:first-child {
      grid-row: 1/3;
    }
  }
`;

export const WrapperOpeningHoursSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;

  width: 100%;

  margin-bottom: 64px;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
`;

export const OpeningHours = styled.section`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 20px 13px;
  width: 100%;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors.red[100]};

  div + div {
    padding-left: 14px;
    border-left: 1px solid rgba(29, 6, 5, 0.4);
  }

  @media (min-width: 900px) {
    max-width: 700px;
  }
`;

export const HashtagSocialMedia = styled.div`
  text-align: center;

  .hashtag-title {
    color: ${({ theme }) => theme.colors.brown[800]};
    font-size: 18px;
  }

  .hashtag-empireburger {
    font-family: 'Lilita One';
    color: ${({ theme }) => theme.colors.red[100]};
    font-size: 41px;
    text-transform: uppercase;
  }
`;
