import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from 'images/arrow-left.svg';

export const IconLeft = styled(ArrowLeft)`
  transition: all 0.3s ease-out;
  opacity: 0;
  stroke: #21130d;
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 22px;
  line-height: 21px;
  transition: all 0.3s ease-out;

  &:hover ${IconLeft} {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    &:hover {
      color: white;
    }

    &:hover ${IconLeft} {
      opacity: 1;
      stroke: white;
    }
  }
`;
