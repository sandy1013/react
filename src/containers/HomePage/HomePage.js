import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Layout from "../Layouts/PrimeLayout/PrimeLayout";
import { Carousal, Panel} from "../UI/Carousal/Carousal";
import Modal from '../UI/Modal/Modal';

import Login from "../../components/Login/Login";
import Banner from "../../components/Banner/Banner";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import HobbiesPage from "../../components/HobbiesPage/HobbiesPage";
import PortfolioPage from "../../components/PortfolioPage/PortfolioPage";
import ContactPage from "../../components/ContactPage/ContactPage";
import AboutPage from "../../components/AboutPage/AboutPage";
import PageNotFound from "../../components/PageNotFound/PageNotFound";

import workImage from "../../Assets/images/work/work-high.jpg";
import hobbiesImage from "../../Assets/images/hobbies/hobbies-high.jpeg";
import contactImage from "../../Assets/images/contact/contact-high.png";
import portfolioImage from "../../Assets/images/portfolio/portfolio-high.jpg";
import lifeImage from "../../Assets/images/life/life-high.jpeg";

class HomePage extends React.Component {

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
        switch(slide) {
            case 0 : 
                if(this.props.history) this.props.history.replace('/home/hobbies');
                break;
            case 1 : 
                if(this.props.history) this.props.history.replace('/home/about');
                break;
            case 2 : 
                if(this.props.history) this.props.history.replace('/home/profile');
                break;
            case 3 : 
                if(this.props.history) this.props.history.replace('/home/portfolio');
                break;
            case 4 : 
                if(this.props.history) this.props.history.replace('/home/contact');
                break;
            default:
                if(this.props.history) this.props.history.replace('/home/profile');
        }
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
        
                <Switch>
                    <Route path="/home/profile" exact component={ProfilePage} />
                    <Route path="/home/about" exact component={AboutPage} />
                    <Route path="/home/hobbies" exact component={HobbiesPage} />
                    <Route path="/home/portfolio" exact component={PortfolioPage} />
                    <Route path="/home/contact" exact  component={ContactPage} />
                    <Redirect to="/home/profile" />
                </Switch>
          </Layout>
        );
    }
};

export default HomePage;