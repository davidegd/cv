import React from 'react'

const Sidebar = ({ children}) => {
    return (
        <div className="Sidebar">
            <div className="Sidebar-Container">
                {children}
            </div>
        </div>
    );
};

export default Sidebar
