import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: larger;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  gap: 30px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
`;

export const Btn = styled.button`
  width: 150px;
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

export const CardWrapepr = styled.div`
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 500px;
  flex: 1;
  padding: 15px;
  gap: 15px;
  border: 1px solid black;
  margin-left: 15px;
  border-radius: 10px;
`;
