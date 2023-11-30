import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: none;
  border-radius: 10px;
  background: #f5ecec;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  padding: 10px;
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 2px 4px 9px 0px #e11e1e;
  }
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    height: 150px;
  }
`;

export const CardText = styled.p`
  margin: 5px;
`;

export const CardBtn = styled.button`
  align-self: flex-end;
  width: 120px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${props => (props.onActive ? '#e1b3ad' : 'white')};
  border: none;
  box-shadow: 2px 4px 9px 0px
    ${props => (props.onActive ? '#e11e1e' : '#a68dae47')};

  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: white;
    background-color: #e11e1e;
  }
`;
