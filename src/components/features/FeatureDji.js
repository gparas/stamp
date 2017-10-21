import React, { Component } from 'react';

import Icon from '../icons/Icon';
import dji from './dji.png';

class FeatureDji extends Component {
  render() {
    return (
      <section className="main-section">
        <div className="page-width">
          <div className="grid align-items-center">
            <div className="grid-item width-md-1-2">
              <h2 className="font-weight-light">DJI Controllers Keeps Reality Closer Than Ever</h2>
              <p>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. </p>
              <div className="grid">  
                <div className="grid-item width-md-1-2 mt-lg">
                  <p><Icon icon="backpack" size="48" className="text-warning" /></p>
                  <p className="headline-text mb-xs">Designing & Developing</p>
                  <p>Uiio designs the experience in 3 steps, each increasing in detail, from the flow to the wireframes and from pen and paper</p>
                  <a href="https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792">Read more</a>
                </div>
                <div className="grid-item width-md-1-2 mt-lg">
                  <p><Icon icon="gauge" size="48" className="text-warning" /></p>
                  <p className="headline-text mb-xs">Architect & Prototyping</p>
                  <p>Our designers are Italian and are characterized by having an eye for beauty that is unparalleled</p>
                  <a href="https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792">Read more</a>
                </div>
              </div>
            </div>
            <div className="grid-item width-md-1-2">
              <img src={dji} alt="dji"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeatureDji
