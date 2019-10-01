import React from 'react';

const Info = ({ children}) => {
    return (
        <div className="Info">
            <div className="Info-Container">
                { children}
            </div>            
        </div>
    )
};

export default Info;