import React, {Component} from 'react';
import {Link} from 'react-router-dom';


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
                        <Link to="/"> Santosh Varma Kosuri J </Link>
                    </h1>
                    <div>
                        <Navigation orientation="vertical" toggleModal={this.props.toggleModal} toggleMenu={this.handelOpen}></Navigation>
                    </div>
                    <button className={Classes.AppMenuBtn} onClick={this.handelOpen}><div></div><div></div><div></div></button>
                </header>
                <div className={Classes.AppContainer}>
                    {this.props.children}
                </div>
    
                <SideBar show={this.state.open} toggle={this.handelOpen}>
                    <Navigation orientation="horizontal" toggleModal={this.props.toggleModal} toggleMenu={this.handelOpen}></Navigation>
                </SideBar>
            </Bux>
        )
    }
};

const Navigation = (props) => {

    let handelClick = (type) => {
        if( !type ) return;
    
        switch(type) {
            case 'login':
                if(props.orientation === "horizontal") props.toggleMenu();
                props.toggleModal();
                break;
            default:
            return;
        }
    };

    return(
        <Bux>
            <nav className={(props.orientation === "horizontal") ? Classes.NavigationHorizontal : Classes.NavigationVertical }>
                <ul className={(props.orientation === "horizontal") ? "list-group" : null}>
                    <li className={(props.orientation === "horizontal") ? "list-group-item" : null}>
                        <a href="javascript:void(0);" onClick={() => handelClick('login')}> Login </a>
                    </li>
                </ul>
            </nav>
            {props.children}
        </Bux>
    )
};

export default PrimeLayout;