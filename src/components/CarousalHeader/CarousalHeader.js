import React from 'react';

import Classes from './CarousalHeader.css';

const carousalHeader = (props) => {
    return (
        <div className={Classes.CarousalHeader}>
            <h3>
                {props.title}
            </h3>
        </div>
    )
};

export default carousalHeader;