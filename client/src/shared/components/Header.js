import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
`;

const MainHeader = styled.h1`
    color: #fff;
    font-size: 34px;
    text-transform: uppercase;
`;

const Message = styled.h1`
    margin-top: 25px;
`;

const Tagline = styled.p`
    color: #fff;
    font-size: 22px;
    line-height: 1.6;
`;

const BlueSpan = styled.span`
    color: #6BD5D9;
`;

const YellowSpan = styled.span`
    color: #FFFE7E;
`;

const Header = () => {
    return (
        <Top>
            <MainHeader><BlueSpan>H</BlueSpan>angboard <YellowSpan>T</YellowSpan>rainer</MainHeader>
            <Message>
                <Tagline>Build finger strength.</Tagline>
                <Tagline>Climb hard.</Tagline>
            </Message>
        </Top>
    )
};

export default Header;