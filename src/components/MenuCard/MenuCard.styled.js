import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 195px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const CardText = styled.p``;

export const CardBtn = styled.button`
  align-self: flex-end;
  width: 120px;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: orangered;
  }

  &:focus {
    color: white;
    background-color: orangered;
  }
`;
