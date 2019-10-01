import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 140px;
    height: auto;
    border: solid 2px #e2e2e2;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;



const About = ({ name, profession, avatar, address, bio, social}) => {
    return (
        <AboutStyle>
            <div className="About-Container">
                <AboutAvatar>
                    <figure>
                        <AboutImg src={avatar} alt={name} />
                    </figure> 
                </AboutAvatar>
                <div className="About-Name">
                    <h2>{name}</h2>
                </div>
                <div className="About-Profession">
                    <h4>{profession}</h4>
                </div>
                <div className="About-Description">
                    <p>{bio}</p>
                </div>
                <div className="About-Location">
                    <p>{address}</p>
                </div>
                <div className="About-Social">
                    <Social social={social} />
                </div>                
            </div>            
        </AboutStyle>
    )
};

export default About;