import styled from "styled-components";

export const Menu = styled.div<{show: boolean}>`
  position: relative;
  top: 0;
  background: grey;
  width: 100vw;
  overflow: hidden;
  height: ${props => props.show ? "100vh" : "0vh"}
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;