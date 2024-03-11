import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.main`
  width: 720px;
  min-height: 100px;
  background-color: ${({ theme }) => theme.color.lightGray400};
`;
