import { css, styled } from "styled-components";

export const Button = styled.button`
  //Verifico o modo do butão e estilizo passando com switch case
  ${(props) => {
    switch (props.$mode) {
      case "primario":
        return css`
          padding: 10px 20px;
          border-radius: 8px;
          border: 1px solid var(--azul-100);
          background: none;
          cursor: pointer;
          color: var(--azul-100);
          font-family: "Inter";
          &:hover {
            background: #03a8f410;
          }
        `;
      default:
        return css`
          padding: 10px 20px;
          border-radius: 8px;
          border: 1px solid var(--preto-200);
          cursor: pointer;
          font-family: "Inter";
          &:hover {
            background: #e6e6e6;
          }
        `;
    }
  }}
`;
