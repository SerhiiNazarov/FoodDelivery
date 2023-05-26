import styled from 'styled-components';

export const DishImage = styled.img`
  display: block;
  height: 150px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Text = styled.p`
  display: block;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  margin-left: 15px;
  display: block;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;

  &:focus {
    outline-color: orangered;
  }

  &:hover {
    border: 1px solid orangered;
  }

  &:hover::-webkit-input-placeholder {
    color: orangered;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
