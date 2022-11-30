import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.ul`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  align-items: center;
  word-break: break-word;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding: 0;
  transition: 0.6s;

  ${({toggleDone}) => toggleDone && css`
  background: hsl(120, 100%, 30%);
  &:hover {
    background: hsl(120, 100%, 38%);
  }
  `}

  ${({remove}) => remove && css`
  background: hsl(0, 100%, 40%);
 &:hover{
    background: hsl(0, 100%, 55%);
 }
  `}
`;
