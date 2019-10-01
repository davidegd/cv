import React from 'react';
import styled, { ThemeProvider} from 'styled-components';

const SocialStyle = styled.div`
    margin: 0 auto;
    display:block;
`;

const SocialUL = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SocialLI = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color:#212121;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color};
`;

const fb = {
    color: "#3b5998"
}

const tw = {
    color: "#38A1F3"
}

const ld = {
    color: "#8e76a8"
}

const gh = {
    color: "#333"
}

const getColor = (name) => {
    if (name === 'fb') return fb;
    if (name === 'tw') return tw;
    if (name === 'ld') return ld;
    if (name === 'gh') return gh;
}

const Social = props => {
    return (
        <div className="Social">
            { props.social &&
                <SocialUL>
                {props.social.map((item, index) => (    <SocialLI key={`Social-${index}`}>
                    <SocialAnchor href={item.url} target="_blank">
                    <ThemeProvider theme={fb}>
                        <SocialIcon className={`fa fa-${item.name}`} />
                    </ThemeProvider>
                    </SocialAnchor> 
                    </SocialLI>                
                ))}
                </SocialUL>
            }            
        </div>
    )
}

export default Social;