import React, { Component } from 'react';
import './Headline.css';
import './Grid.css';
import './Card.css';

class Testimonials extends Component {
  
  render() {
    const persons = this.props.user.map((item, i) => {
      return <div key="i" className="d-flex">
        <img className="img-circle" src={item.picture.thumbnail} alt={item.name.first} />
        <div className="ml-md">
          <div className="text-name">{item.name.first} {item.name.last}</div>
          <div className="text-muted">{item.email}</div>
        </div>
      </div>
    });
    return (
      <header className="Headline bg-info">
        <div className="Container">
          <h1 className="text-center text-white mb-xs">What We Love</h1>
          <p className="text-subheader text-white text-center mb-lg">
            We are driven by creating experiences that deliver results for <br/> your business and for your consumers
          </p>
          <ul className="Grid">
            <li>
              <div className="Card">
                <div className="mb-md">{ persons }</div>
                <p>Great talents are the most lovely and often the <a>#most</a> dangerous fruits on the tree of humanity</p>
                <p className="text-muted">18 Aug 2016</p>
              </div>
            </li>
            <li>
              <div className="Card">
                <div className="mb-md">{ persons }</div>
                <p>It's nice having such fast and responsive support. Support is top notch. Keep up the good work.</p>
                <p className="text-muted">5 Jun 2016</p>
              </div>
            </li>
            <li>
              <div className="Card">
                <div className="mb-md">{ persons }</div>
                <p><a>#Uiio</a> understands the correlation between a customer's needs and the work agreement</p>
                <p className="text-muted">3 Jun 2016</p>
              </div>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Testimonials;
