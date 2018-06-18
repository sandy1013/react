import React from 'react';

import Classes from './Modal.css';

import Bux from "../../../hoc/Bux";

class Modal extends React.Component {
    render() {
        let backdropClasses =  [Classes.Backdrop];
        let modalClasses =  [Classes.Modal];

        if(this.props.show) {
            backdropClasses.push(Classes.Show);
            modalClasses.push(Classes.Show);
        } else {
            backdropClasses.push(Classes.Hide);
            modalClasses.push(Classes.Hide);
        }

        backdropClasses = backdropClasses.join(" ");
        modalClasses = modalClasses.join(" ");

        return (
            <Bux> 
                <div className={backdropClasses} onClick={this.props.toggle}></div>
                <div className={modalClasses}> 
                    {this.props.children}
                </div>
            </Bux>
        )
    }
};

export default Modal;