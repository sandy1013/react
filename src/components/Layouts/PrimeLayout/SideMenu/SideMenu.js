import React, {Component} from 'react';

import Classes from "./SideMenu.css";

class SideMenu extends Component {
    render() {
        return (
            <div className={(this.props.show === null) ? Classes.SideMenu : (this.props.show) ? [Classes.SideMenu, Classes.show].join(' ') : [Classes.SideMenu, Classes.hide].join(' ')}>
                {this.props.children}
            </div>
        )
    }
};

export default SideMenu;