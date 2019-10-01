import React from 'react';

const Experience = props => {
    return (
        <div className="Experience">
        <h3>Experience</h3>
            <div className="Experience-Container">
                { props.data.map((e, index) => (
                    <div className="Experience-item" key={`Experience-${index}`}>
                        <h4>{e.company}</h4>
                        <p>{e.jobDescription}</p>
                        <span>Start: {e.startDate} - End: {e.endDate}</span>
                    </div>         
                ))}     
            </div>
        </div>
    )
}

export default Experience;