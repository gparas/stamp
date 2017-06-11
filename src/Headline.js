import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from './UserList';
import './Headline.css';
import './Grid.css';

class Headline extends Component {
  render() {
    return (
      <header className={`Headline ${this.props.class}`}>
        <div className="Container">
          <h1 className="text-center text-white mb-xs">What We Love</h1>
          <p className="text-subheader text-white text-center mb-lg">
            We are driven by creating experiences that deliver results for <br/> your business and for your consumers
          </p>
          <ul className="Grid">
            <li>
              <UserList date="18 Aug 2016">
                Great talents are the most lovely and often the <a>#most</a> dangerous fruits on the tree of humanity
              </UserList>
            </li>
            <li>
              <UserList date="5 Jun 2016">
                It's nice having such fast and responsive support. Support is top notch. Keep up the good work.
              </UserList>
            </li>
            <li>
              <UserList date="3 Jun 2016">
                <a>#Uiio</a> understands the correlation between a customer's needs and the work agreement
              </UserList>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

Headline.propTypes = {
  class: PropTypes.string.isRequired
};

export default Headline;
