import React from 'react';

import Classes from './Login.css';

const login = (props) => {
    return (
        <form className={Classes.LoginForm}>
          <fieldset className="form-group">  
            <legend>Welcome:</legend>
            <div className={Classes.hrspace}></div>
            <input className="form-control" type="text" placeholder="Username/Email" />
            <div className={Classes.hrspace}></div>
            <input className="form-control" type="password" placeholder="Password" />
          </fieldset>
          <button className="btn btn-primary">Log In</button>
        </form>
    );
};

export default login;