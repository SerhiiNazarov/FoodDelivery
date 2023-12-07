import styled from 'styled-components';
import { RiDeleteBin5Line } from 'react-icons/ri';

export const DishImage = styled.img`
  display: block;
  height: 150px;
  width: 120px;

  border-radius: 10px;

  @media screen and (min-width: 768px) {
    height: 150px;
    width: auto;
  }

  @media screen and (min-width: 1440px) {
    height: 200px;
  }
`;

export const Text = styled.p`
  margin: 10px;
  display: block;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  padding: 20px;
  border-radius: 10px;
  background: #f5ecec;
  transition: all 0.3s ease-out;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    box-shadow: 2px 4px 9px 0px #a31212;
  }
`;

export const Input = styled.input`
  width: 100px;
  margin-left: 15px;
  display: block;
  padding: 10px;
  border: none;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  border-radius: 4px;
  font-size: 15px;
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 2px 4px 9px 0px #a31212;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Btn = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  align-self: flex-end;
`;

export const Icon = styled(RiDeleteBin5Line)`
  color: inherit;
  transition: all 0.3s ease-out;

  &:hover {
    color: orangered;
  }
`;
