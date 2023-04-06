import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';
import logo from 'images/QiuYeDx.png';

export const NavWrapper = styled.div`
  height: 60px;
  background-color: antiquewhite;
  color: #444444;
  display: flex;
  flex-direction: row;

  line-height: 60px;
  text-align: center;
`

export const NavList = styled.div`
  background-color: #bfc;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

export const NavItem = styled(NavLink)`
  background-color: #61dafb;
  flex-grow: 1;
  
  cursor: pointer;
`

export const LogoWrapper = styled.div`
  background-color: blueviolet;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
`

export const Logo = styled.div`
  width: 44px;
  height: 44px;
  //background-color: white;
  //background-image: url("../../assets/images/QiuYeDx.png");
  background-image: url(images/QiuYeDx.png);
  background-size: cover;
  
`

export const LogoText = styled.div`
  margin: 0 10px;
  
  font-size: 24px;
  
`

export const MoreWrapper = styled(LogoWrapper)`
  
`

