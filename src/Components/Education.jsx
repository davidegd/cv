import React from 'react';
import H3Styled from '../styled/H3Styled';
import H2Styled from '../styled/H2Styled';
import PStyled from '../styled/PStyled';

const Education = props => (   
    <div className="Education">
        <div className="Education-Container">
            <H2Styled name="Education" />
            {props.data.map((edu, index) => (
                <div className="Education-Item" key={`Edu-${index}`}>
                <H3Styled>{edu.degree} {edu.degree}
                    <span> {edu.startDate} - {edu.endDate}</span>
                </H3Styled>
                <PStyled name={edu.description} />
                </div>
            ))}             
        </div>
    </div>
)


export default Education;