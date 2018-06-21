import React, { Component } from 'react';

import Layout from "./components/Layouts/PrimeLayout/PrimeLayout";
import Carousal from "./containers/UI/Carousal/Carousal";
import Modal from './containers/UI/Modal/Modal';

import Login from "./components/Login/Login";

class App extends Component {

  state = {
    open : false
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      open : !this.state.open
    });
  };

  selectedPanel = (slide) => {
    console.log('[Application] [Selected Panel] : ', slide);
  };

  gotoCarousalPosition = (position) => {
    if (this.refs.carousal) this.refs.carousal.setActivePosition(position);
  };

  render() {
    return (
      <Layout toggleModal={this.toggleModal}> 
        <Modal show={this.state.open} toggle={this.toggleModal}>
            <Login />
        </Modal>
        <Carousal height="50%" width="100%" 
                  current={(slide) => this.selectedPanel(slide)}
                  position="2"
                  ref={'carousal'}>
          <div bg-color="#ff9b71" font-color="#3c3c3c">
            Hello World! inside carousal 1
          </div>
          <div bg-color="#fffc82" font-color="#3c3c3c">
            Hello World! inside carousal 2
          </div>
          <div bg-color="#e84855" font-color="#3c3c3c">
            Hello World! inside carousal 3
          </div>
          <div bg-color="#b56b45" font-color="#3c3c3c">
            Hello World! inside carousal 4
          </div>
          <div bg-color="#f5f7dc" font-color="#3c3c3c">
            Hello World! inside carousal 5
          </div>
        </Carousal>
      </Layout>
    );
  }
}

export default App;
