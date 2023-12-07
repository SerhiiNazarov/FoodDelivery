import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Formfield = styled(Form)`
  padding: 20px 0;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Input = styled(Field)`
  margin-top: 10px;
  display: block;
  width: 250px;
  padding: 10px;
  border: none;
  background-color: #f5ecec;
  transition: all 0.3s ease-out;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  border-radius: 4px;

  font-size: 15px;

  &:focus {
    outline-color: orangered;
  }

  &:hover {
    box-shadow: 2px 4px 9px 0px #a31212;
  }

  &:hover::-webkit-input-placeholder {
    color: orangered;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  width: 150px;
  font-size: 16px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  transition: opacity 250ms var(--timingFn);

  cursor: pointer;

  &:hover {
    color: white;
    opacity: 1;
    box-shadow: 2px 4px 9px 0px #a31212;
    background-color: #a31212;
  }
`;

export const Label = styled.label`
  color: white;

  font-weight: 500;
  font-size: 20px;
`;

export const DishContainer = styled.div`
  height: 100%;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    flex: 1;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: none;
  margin-right: 50px;
`;

export const TotalPrice = styled.div`
  padding: 10px 15px;
  text-align: center;
  background-color: #f5ecec;
  font-size: 16px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  transition: opacity 250ms var(--timingFn);

  @media screen and (min-width: 768px) {
    min-width: 150px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    gap: 90px;
  }
`;
