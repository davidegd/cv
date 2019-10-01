import React from 'react';
import styled from 'styled-components';
import H3Styled from '../styled/H3Styled';
import H2Styled from '../styled/H2Styled';

const StyledP = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: .8px;
    margin: .5em 0 1.2em 0;
    color: #757575;
`;

const Certifications = props => {
    return (
        <div className="Certifications">
        <H2Styled>Certifications</H2Styled>
            <div className="Certifications-Container">
                { props.data.map((e, index) => (
                <div className="Certifications-Item" key={`Certifications-${index}`}>
                        <H3Styled>{e.name}</H3Styled>
                        <StyledP>{e.institution} >Institution:{e.institution} - Date:{e.date}             </StyledP>        
                </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications;