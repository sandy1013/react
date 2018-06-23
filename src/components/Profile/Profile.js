import React from "react";

import logo from "../../Assets/images/logo/company_logo.jpg";

import Classes from "./Profile.css";

const profile = (props) => {
    return (
        <div className={Classes.Profile}>
            <img src={logo} className={Classes.CompanyLogo} />
            <div>
                <h3>Principle Engineer</h3>
                <hr />
                <p>UI Lead | Fullstack Javascript</p>
                <p>18 May 2015 - Present</p>
                <p>Total Relevent Experience : 7 Years</p>
            </div>
        </div>
    )
};

export default profile;