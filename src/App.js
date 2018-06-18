import React, { Component } from 'react';

import Layout from "./components/Layouts/PrimeLayout/PrimeLayout";
import Carousal from "./containers/UI/Carousal/Carousal";
import Modal from './containers/UI/Modal/Modal';

import { Button } from 'reactstrap';

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
      <Layout> 
        <Modal show={this.state.open} toggle={this.toggleModal}>
            <form>
              <fieldset>  
                <input type="text" placeholder="Username/Email" />
                <input type="password" placeholder="Password" />
              </fieldset>
              <Button color="primary">Log In</Button>
            </form>
        </Modal>
        <Carousal>
          <div bg-color="#4ae8b6">
            <button onClick={this.toggleModal}>Open Modal</button>
          </div>
          <div bg-color="#4a8fe8">
            Hello World! inside carousal 2
          </div>
          <div bg-color="#e87e4a">
            Hello World! inside carousal 3
          </div>
          <div bg-color="#e84a7f">
            Hello World! inside carousal 4
          </div>
          <div>
            Hello World! inside carousal 5
          </div>
        </Carousal>
      </Layout>
    );
  }
}

export default App;
