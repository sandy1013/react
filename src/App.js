import React, { Component } from 'react';

import Layout from "./components/Layouts/PrimeLayout/PrimeLayout";
import Carousal from "./containers/UI/Carousal/Carousal";
import Modal from './containers/UI/Modal/Modal';

import Login from "./components/Login/Login";
import CarousalHeader from "./components/CarousalHeader/CarousalHeader"

import workImage from "./Assets/images/work/work-high.jpg";
import hobbiesImage from "./Assets/images/hobbies/hobbies-high.jpeg";
import contactImage from "./Assets/images/contact/contact-high.png";
import portfolioImage from "./Assets/images/portfolio/portfolio-high.jpg";
import lifeImage from "./Assets/images/life/life-high.jpeg";

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
    //console.log('[Application] [Selected Panel] : ', slide);
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
          <div bg-color="rgba(195, 131, 39, 0.26)" font-color="#fff" bg-image={hobbiesImage}>
              <CarousalHeader title="What i like."></CarousalHeader>
          </div>
          <div bg-color="rgba(195, 131, 39, 0.26)" font-color="#fff" bg-image={lifeImage}>
              <CarousalHeader title="Who am i."></CarousalHeader>
          </div>
          <div bg-color="rgba(195, 131, 39, 0.26)" font-color="#fff" bg-image={workImage}>
              <CarousalHeader title="What i do."></CarousalHeader>
          </div>
          <div bg-color="rgba(195, 131, 39, 0.26)" font-color="#fff" bg-image={portfolioImage}>
              <CarousalHeader title="What i did."></CarousalHeader>
          </div>
          <div bg-color="rgba(195, 131, 39, 0.26)" font-color="#fff" bg-image={contactImage}>
              <CarousalHeader title="Contact me."></CarousalHeader>
          </div>
        </Carousal>
      </Layout>
    );
  }
}

export default App;
