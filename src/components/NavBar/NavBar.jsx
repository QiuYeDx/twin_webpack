import React from 'react';
import {
    NavWrapper, LogoWrapper, NavItem, NavList, MoreWrapper,
    Logo, LogoText
} from './Styled.twin'
import { useNavigate } from 'react-router-dom';

export default function NavBar(){
    const navigate = useNavigate();
    return (
        <NavWrapper>
            <LogoWrapper onClick={() => {navigate("/")}}>
                <Logo/>
                <LogoText>
                    QiuYeDx
                </LogoText>
            </LogoWrapper>
            <NavList>
                <NavItem to="/">
                    Home
                </NavItem>
                <NavItem to="/PageA">
                    PageA
                </NavItem>
                <NavItem to="/PageB">
                    PageB
                </NavItem>
                <NavItem to="/about">
                    About
                </NavItem>
            </NavList>
            <MoreWrapper>
                More
            </MoreWrapper>
        </NavWrapper>
    );
}