import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --branco-100: #fff;
  --branco-150: #f5f5f5;
  --branco-200: #E8E8E8;
  --branco-300: #D4D4D4;
  --roxo-100: #5d1397;
  --preto-100: #0D0D0D;
  --preto-200: #404040;
  --preto-300: #737373;
  --azul-100: #03a9f4;
  --verde-100: #1d9939;
  --error-100: #EA3838;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{scroll-behavior: smooth;}
html::-webkit-scrollbar {
  width: 6px;
  background-color: var(--branco-100);
}
html::-webkit-scrollbar-thumb {
  background-color: var(--roxo-100);
}
body{
  font-family: "Open Sans", "Inter", "Ubuntu", sans-serif;
  background: var(--branco-200);
}
a{text-decoration: none;}li{list-style:none;}
h1{
  font-family: "Open Sans";
  font-size: 32px;
  font-weight: 700;
  line-height: 33px;
}
h2{
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
}
h3{
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
}
h4{
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
}
p{
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
span{
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 6px;
}
.branco-100{
  color: var(--branco-100);
}.branco-150{color: var(--branco-150);}
.branco-200{
  color: var(--branco-200);
}.branco-300{
  color: var(--branco-300);
}.preto-100{
  color: var(--preto-100);
}.preto-200{
  color: var(--preto-200);
}.preto-300{
  color: var(--preto-300);
}.react-icons {
  vertical-align: middle;
  margin: 0px 4px;
}
.cor-erro{
  color: var(--error-100);
}
#error-page{
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pages-navs{
  width: 100%;
  & .linear-1{
    background: linear-gradient(90deg, #03A9F4 0%, #6EFED3 100%);
  }
  & .linear-2{
    background: linear-gradient(90deg, #5D1397 0%, #6EFED3 100%);
  }
  & section{
    height: 160px;
    width: 100%;
    padding: 40px 115px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: inset 0px 3px 12px rgba(0, 0, 0, 0.25);
    & h1{
      color: var(--branco-100);
    }
    & div{
      display: flex;
      flex-direction: row;
      gap: 33px;
    }
  }
  & .main-min {
  padding: 20px;
}

  & main{
    padding: 80px 115px;
    & .flex{
      display: flex;
      flex-direction: row ;
      justify-content: space-between;
    }
    & p{
      max-width: 600px;
      color: var(--preto-200);
    }
    & h3{
      color: var(--preto-100);
    }
    & span{
      color: var(--preto-300);
    }
    & iframe{
      border-radius: 16px;
      border: none;
    }
  }
}
.form{
  position: relative;
  height: 450px;
  background: linear-gradient(90deg, #5D1397 20%, #6EFED3 80%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .demo{
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div{
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    & span{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    & input{
      width: 320px;
      height: 40px;
      border-radius: 8px;
      padding: 15px 20px;
      border: none;
      background-color: var(--branco-150);
    }
    & button{
      background-color: var(--branco-100);
    }
  }
}
.demo-footer{
  background: var(--preto-100);
  text-align: center;
  padding: 40px;
  color: var(--branco-300);
}
`;
