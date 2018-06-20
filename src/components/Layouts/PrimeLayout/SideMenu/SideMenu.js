import React, {Component} from 'react';

import Classes from "./SideMenu.css";

import Bux from '../../../../hoc/Bux';

class SideMenu extends Component {
    render() {
        
        let backdropClasses =  [Classes.Backdrop];

        if(this.props.show) {
            backdropClasses.push(Classes.Show);
        }

        backdropClasses = backdropClasses.join(" ");

        return (
            <Bux>
                <div className={backdropClasses} onClick={this.props.toggle}></div>
                <div className={(this.props.show === null) ? Classes.SideMenu : (this.props.show) ? [Classes.SideMenu, Classes.show].join(' ') : [Classes.SideMenu, Classes.hide].join(' ')}>
                    {this.props.children}
                </div>
            </Bux>
        )
    }
};

export default SideMenu;