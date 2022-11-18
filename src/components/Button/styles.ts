import styled from 'styled-components';

export const Container = styled.button<{bg: string, width: string, height: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background: ${(props) => props.bg};

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: none;
  border-radius: 4px;

  color: ${(props) => props.color};
  font-weight: 700;

  img {
    width: 24px;
    height: 24px;
  }
`;
