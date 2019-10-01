import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    letter-spacing: .8px;
    margin: .5em 0;
    color: #212121;
`;

const H3Styled = ({ children }) => <StyledH3>{children}</StyledH3>;

export default H3Styled;