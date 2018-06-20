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

  render() {
    return (
      <Layout toggleModal={this.toggleModal}> 
        <Modal show={this.state.open} toggle={this.toggleModal}>
            <Login />
        </Modal>
        <Carousal>
        <div bg-color="#ff9b71">
            Hello World! inside carousal 1
          </div>
          <div bg-color="#fffc82">
            Hello World! inside carousal 2
          </div>
          <div bg-color="#e84855">
            Hello World! inside carousal 3
          </div>
          <div bg-color="#b56b45">
            Hello World! inside carousal 4
          </div>
          <div bg-color="#f5f7dc">
            Hello World! inside carousal 5
          </div>
        </Carousal>
      </Layout>
    );
  }
}

export default App;
