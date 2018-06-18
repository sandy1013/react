import React, { Component } from 'react';

import Layout from "./components/Layouts/PrimeLayout/PrimeLayout";
import Carousal from "./containers/UI/Carousal/Carousal";

class App extends Component {
  render() {
    return (
      <Layout> 
        <Carousal>
          <div bg-color="#4ae8b6">
            Hello World! inside carousal 1
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
