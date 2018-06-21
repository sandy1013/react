import React from 'react';

import Classes from './Banner.css';

const Banner = (props) => {
    return (
        <div className={Classes.Banner}>
            <h3>
                {props.title}
            </h3>
        </div>
    )
};

export default Banner;