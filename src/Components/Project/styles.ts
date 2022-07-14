import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 64px;
  color: transparent;
  -webkit-text-stroke: 1px #000;
  margin-top: 16px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    color: #e1e1e1;
  }
`;

export const LinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 8px 16px;
  padding-right: 24px;

  font-size: 16px;
  font-weight: 700;

  border: solid 2px #b9b9b9;
  border-radius: 5px;

  margin-right: 16px;
`;

export const LinkSvg = styled.img`
  margin-right: 8px;
`;