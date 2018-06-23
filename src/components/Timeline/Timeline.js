import React from 'react';

import Classes from "./Timeline.css";

const timeline = (props) => {
    return (
        <div className={Classes.Timeline}> 
            <ul>
                <TimeLog></TimeLog>
                <TimeLog></TimeLog>
                <TimeLog></TimeLog>
                <TimeLog></TimeLog>
                <TimeLog></TimeLog>
                <TimeLog></TimeLog>
            </ul>
        </div>
    )
};

const TimeLog = (props) => {
    return (
        <li className={Classes.Timelog}>
            <h6>Lorem Ipsum :</h6>
            <p>
                It is a long established fact that a reader will be distracted by the readable
            </p>
            <div className={Classes.VLine}></div>
        </li>
    )
};

export default timeline;