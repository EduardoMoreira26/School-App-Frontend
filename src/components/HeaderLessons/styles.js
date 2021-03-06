import styled from "styled-components";

export const Container = styled.div`
   border: 1px solid #252f3e;
  background-color: #1b2330;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
  appearance: none;
  backface-visibility: hidden;
  background-color: #2f80ed;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 14px 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all .1s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
}

.button-65:hover {
  background-color: #1366d6;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .2s;
}

@media (min-width: 768px) {
  .button-65 {
    padding: 14px 22px;
    width: 176px;
  }
}
`;

export const SearchInput = styled.input`
  border: 0;
  border-radius: 25px;
  font-size: 15px;
  width: ${props => props.active ? 300 : 0}px;
  height: 40px;
  background-color: #fff;
  background-image: url('/assets/search2.svg');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  outline: 0;
  padding-left: 50px;
  transition: all ease 0.2s;
  cursor: pointer;

  &:focus {
    cursor: text;
  }

  ::placeholder {
    color: #aaa;
    font-weight: bold;
  }
`;