import React, { Component } from 'react';

import Icon from '../icons/Icon';
import dji from './dji.png';

class FeatureDji extends Component {
  render() {
    return (
      <section className="section py-5">
        <div className="page-width">
          <div className="grid align-items-center">
            <div className="grid-item width-lg-1-2">
              <img src={dji} alt="dji"/>
            </div>
            <div className="grid-item width-lg-1-2">
              <h2 className="fw-n h3 mb-1">
                DJI Controllers Keeps Reality Closer Than Ever
              </h2>
              <p>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. </p>
              <div className="grid">  
                <div className="grid-item width-sm-1-2 mt-4 mt-sm-5">
                  <p><Icon icon="backpack" size="48" className="text-primary" /></p>
                  <p className="text-headline mb-1">Designing & Developing</p>
                  <p>Uiio designs the experience in 3 steps, each increasing in detail, from the flow to the wireframes and from pen and paper</p>
                  <a href="https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792">Read more</a>
                </div>
                <div className="grid-item width-sm-1-2 mt-5">
                  <p><Icon icon="gauge" size="48" className="text-primary" /></p>
                  <p className="text-headline mb-1">Architect & Prototyping</p>
                  <p>Our designers are Italian and are characterized by having an eye for beauty that is unparalleled</p>
                  <a href="https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeatureDji
