import React, { Component } from 'react';

import Layout from "./components/Layouts/PrimeLayout/PrimeLayout";
import { Carousal, Panel} from "./containers/UI/Carousal/Carousal";
import Modal from './containers/UI/Modal/Modal';

import Login from "./components/Login/Login";
import Banner from "./components/Banner/Banner";
import Profile from './components/Profile/Profile';
import Timeline from './components/Timeline/Timeline';

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
          <Panel bg-color="rgba(47, 89, 152, 0.28)" font-color="#fff" bg-image={hobbiesImage}>
              <Banner title="What i like."></Banner>
          </Panel>
          <Panel bg-color="rgba(47, 89, 152, 0.28)" font-color="#fff" bg-image={lifeImage}>
              <Banner title="Who am i."></Banner>
          </Panel>
          <Panel bg-color="rgba(47, 89, 152, 0.28)" font-color="#fff" bg-image={workImage}>
              <Banner title="What i do."></Banner>
          </Panel>
          <Panel bg-color="rgba(47, 89, 152, 0.28)" font-color="#fff" bg-image={portfolioImage}>
              <Banner title="My Portfolio."></Banner>
          </Panel>
          <Panel bg-color="rgba(47, 89, 152, 0.28)" font-color="#fff" bg-image={contactImage}>
              <Banner title="Contact me."></Banner>
          </Panel>
        </Carousal>

        <div>
          <Profile />
          <Timeline />
        </div>

      </Layout>
    );
  }
}

export default App;
