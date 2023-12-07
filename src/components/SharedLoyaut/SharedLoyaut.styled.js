import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mainbg_light from 'images/background_light.jpg';

export const Container = styled.div`
  width: 320px;
  min-height: 650px;
  padding: 16px 16px;
  margin: 0 auto;
  background-image: url(${mainbg_light});
  background-size: cover;

  background-repeat: repeat-y;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 20px 20px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 40px;
    width: 1440px;
  }
`;

export const Header = styled.header`
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid black;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  > nav {
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }
  }
`;

export const LinkWrapper = styled.nav`
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  background: white;
  transition: all 0.3s ease-out;

  &.active {
    color: white;
    border: none;
    background-color: #a31212;
    box-shadow: 2px 4px 9px 0px #444444;

    &:hover {
      background-color: #e11e1e;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;
