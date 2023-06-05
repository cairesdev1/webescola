import { styled, css } from "styled-components";

export const HeaderModes = styled.header`
  ${(props) => {
    switch (props.$mode) {
      case "landin":
        return css`
          width: 100%;
          height: 70px;
          background: var(--branco-100);
          display: flex;
          justify-content: space-around;
          align-items: center;
        `;
      case "chamada":
        return css`
          width: 100%;
          height: 30px;
          background: var(--roxo-100);
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        `;
      default:
        return css`
          width: 100%;
          height: 70px;
          background: var(--branco-100);
        `;
    }
  }}

  .navega-container {
    position: relative;
  }
  .nav-hover {
    opacity: 0;
    z-index: -5;
    top: 10px;
    left: -30px;
    position: absolute;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 90%,
      rgba(255, 255, 255, 0) 90%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 40px;
    padding: 40px 50px;
    border-radius: 8px;
  }
  .link-navega:hover ~ .nav-hover {
    z-index: 5;
    opacity: 1;
  }
  .nav-hover:hover {
    z-index: 5;
    opacity: 1;
  }
  .link-utils {
    text-decoration: none;
    color: var(--preto-300);
  }
  .link-utils:hover {
    color: var(--preto-100);
  }
`;
