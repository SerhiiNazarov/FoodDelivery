import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Formfield = styled(Form)`
  position: relative;
  height: 450px;
  margin-top: 10px;
  margin-bottom: 30px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
`;

export const Input = styled(Field)`
  display: block;
  width: 250px;
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

export const Button = styled.button`
  position: absolute;
  right: 50px;
  margin-top: 20px;
  padding: 10px 15px;
  width: 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  transition: opacity 250ms var(--timingFn);

  cursor: pointer;

  &:hover {
    color: white;
    opacity: 1;
    background-color: orangered;
  }
`;

export const Text = styled.p`
  margin-top: 25px;
  margin-left: 450px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  color: var(--secondaryTextColor);
  font-weight: 500;
  font-size: 20px;
`;

export const DishContainer = styled.div`
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid black;
  flex: 1;
  margin-left: 30px;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
`;

export const UserContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
`;
