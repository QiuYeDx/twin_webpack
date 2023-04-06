import React from 'react';
import {
    Wrapper, WrapperMiddle , WrapperLeft,
    WrapperRight, WrapperBottom, WrapperTop,
    WrapperMain
} from './Styled.twin'

export default function Home(){
    return (
        <Wrapper hasBorder>
            <WrapperTop hasBorder>
                Top
            </WrapperTop>
            <WrapperMiddle>
                <WrapperLeft>
                    Left
                </WrapperLeft>
                <WrapperMain>
                    Main
                </WrapperMain>
                <WrapperRight>
                    Right
                </WrapperRight>
            </WrapperMiddle>
            <WrapperBottom>
                Bottom
            </WrapperBottom>
        </Wrapper>
    );
}