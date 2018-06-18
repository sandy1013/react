import React, {Component} from 'react';

import Bux from "../../../hoc/Bux";

import Classes from "./PrimeLayout.css";

import SideBar from './SideMenu/SideMenu';

class PrimeLayout extends Component {

    state = {
        open : null
    }

    handelOpen = () => {
        let open = this.state.open;
        if(open === null) open = true;
        else open = !open;

        this.setState({
            ...this.state,
            open : open
        })
    };

    render() {
        return (
            <Bux>
                <header className={Classes.AppHeader}>
                    <h1>
                        Santosh Varma Kosuri J
                    </h1>
                    <div>
                        <Navigation orientation="vertical" ></Navigation>
                    </div>
                    <button className={Classes.AppMenuBtn} onClick={this.handelOpen}><div></div><div></div><div></div></button>
                </header>
                <div className={Classes.AppContainer}>
                    {this.props.children}
                </div>
    
                <SideBar show={this.state.open}>
                    <Navigation orientation="horizontal" ></Navigation>
                </SideBar>
            </Bux>
        )
    }
};

const Navigation = (props) => {
    return(
        <Bux>
            <nav className={(props.orientation === "horizontal") ? Classes.NavigationHorizontal : Classes.NavigationVertical }>
                <ul>
                    <li>
                        <a href=""> Home </a>
                    </li>
                    <li>
                        <a href=""> Other </a>
                    </li>
                </ul>
            </nav>
            {props.children}
        </Bux>
    )
};

export default PrimeLayout;