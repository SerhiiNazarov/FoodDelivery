import styled from 'styled-components';

export const Container = styled.div``;

export const Text = styled.h2`
  color: #a31212;
  font-size: 24px;
  text-align: center;
  font-size: larger;
  background: #f5ecec;
  border-radius: 8px;
  margin-bottom: 40px;
  margin-top: 30px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
  /* box-shadow: 2px 4px 9px 0px #a68dae47; */

  border-radius: 10px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Btn = styled.button`
  width: 250px;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;

  box-shadow: 2px 4px 9px 0px #a68dae47;
  cursor: pointer;
  color: ${props => props.theme.btnColor};
  background-color: ${props => props.theme.btnBackground};
  transition: all 0.3s ease-out;

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
  }

  &:hover {
    color: white;
    background-color: #a31212;
  }
`;

export const CardWrapepr = styled.div`
  overflow-y: auto;
  display: grid;

  grid-template-columns: 1fr;
  gap: 20px;
  border: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
