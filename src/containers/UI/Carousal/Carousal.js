import React, { Component } from 'react';

import Bux from "../../../hoc/Bux";

import axios from 'axios';

import Classes from './Carousal.css';

class Carousal extends Component {

    state = {
        current_direction: null,
        current_active_postion : this.props.position || 0
    }

    componentDidMount() {
        this.makeApiCall()
    }

    makeApiCall = () => {
        console.log("[Make API Call]");
        axios.get( '/api/test' )
        .then( response => {
            console.log(response);
        } )
        .catch(error => {
            console.log(error);
        });
    };
    
    goNext = (direction) => {
        let current_active_postion = this.state.current_active_postion;
        const total_active_positions = this.props.children.length ? this.props.children.length - 1 : 0;  

        if (!total_active_positions) return;

        if(total_active_positions && current_active_postion === total_active_positions) this.setActivePosition(0, direction); 
        else this.setActivePosition(++current_active_postion, direction);
    };

    goPrev = (direction) => {
        let current_active_postion = this.state.current_active_postion;
        const total_active_positions = this.props.children.length ? this.props.children.length - 1 : 0;

        if (!total_active_positions) return;

        if(total_active_positions && current_active_postion === 0) this.setActivePosition(total_active_positions, direction); 
        else this.setActivePosition(--current_active_postion, direction);
    };

    setActivePosition = (position = 0, direction='right') => {
        this.setState({
            ...this.state,
            current_direction: direction,
            current_active_postion : position
        });
    };

    render() {
        var panels = this.props.children ? 
                        this.props.children.map((ele, index) => {
                            return (
                                <CarousalPanel key={index} 
                                    show={(index === this.state.current_active_postion) ? true : false}
                                    showClass={(this.state.current_direction === null) ? 'static' : (index === this.state.current_active_postion && this.state.current_direction === 'left') ? 'showLeft' : 'showRight'}
                                    hideClass={(this.state.current_direction === null) ? '' : (index !== this.state.current_active_postion && this.state.current_direction === 'left') ? 'hideLeft' : 'hideRight'}
                                    bgColor={this.props.children[index].props["bg-color"] || '#ffc107'}
                                    next={(direction) => this.goNext(direction)}
                                    prev={(direction) => this.goPrev(direction)}>
                                    {this.props.children[index]}
                                </CarousalPanel>
                            )
                        })
                        : null;

        return (
            <Bux>
                {panels}
                <CarousalNavigation active={this.state.current_active_postion} 
                                    total={(this.props.children.length) ? this.props.children.length : 0}
                                    next={(direction) => this.goNext(direction)}
                                    prev={(direction) => this.goPrev(direction)}
                                    gotoPane={this.setActivePosition}/>
            </Bux>
        );
    }
};

class CarousalPanel extends Component {
    touchstartX = 0;
    touchendX = 0;
    touchOffset = 250;

    handelSwipeStart = (event) => {
        this.touchstartX = event.changedTouches[0].screenX;
    };

    handelSwipeMove = (event) => {
        this.touchendX = event.changedTouches[0].screenX;
    };

    handelSwipeEnd = (event) => {
        this.handelSwipeComplete();
    };

    handelSwipeComplete() {
        if(this.touchendX && (this.touchendX > this.touchstartX) && (this.touchendX - this.touchstartX) > this.touchOffset) {
            this.props.next('right');
        } else if(this.touchendX && (this.touchendX < this.touchstartX) && (this.touchstartX - this.touchendX)  -this.touchOffset) {
            this.props.prev('left');
        }

        this.touchstartX = 0;
        this.touchendX = 0;
    }


    render() {
        let all_classes = [Classes.CarousalPanel];
        (this.props.show) ? all_classes.push(Classes[this.props.showClass]) : all_classes.push(Classes[this.props.hideClass]);
        all_classes = all_classes.join(' ');

        return (
            <div className={all_classes} 
                style= {{
                    backgroundColor : (this.props.bgColor) ? this.props.bgColor : null
                }}
                onTouchStart={this.handelSwipeStart.bind(this)}
                onTouchMove={this.handelSwipeMove.bind(this)}
                onTouchEnd={this.handelSwipeEnd.bind(this)}>
                {this.props.children}
            </div>
        );
        
    }
}

class CarousalNavigation extends Component {
    
    config = {
        'RIGHT_KEY' : 39,
        'LEFT_KEY' : 37
    };

    handelKeyDown =  (event) => {
        switch( event.keyCode ) {
            case this.config['RIGHT_KEY']:
                this.props.next('right');
                break;
            case this.config['LEFT_KEY']:
                this.props.prev('left');
                break;
            default: 
                break;
        }
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handelKeyDown.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handelKeyDown.bind(this));
    }

    render() {
        const placeholder = Array(this.props.total);
        placeholder.fill(0);
        const navigation = placeholder.map((_, index) => {
            return (
               <div key={index} 
                    className={(this.props.active === index) ? Classes.active : null}
                    onClick={() => this.props.gotoPane(index)}></div>
            )
        });

        return (
            <div className={Classes.CarousalNavigation}>
               {navigation}
            </div>
        )
    }
}

export default Carousal;

