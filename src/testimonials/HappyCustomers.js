import React, { Component } from 'react';
import '../css/Headline.css';
import '../css/Grid.css';
import '../css/Card.css';

class HappyCustomers extends Component {
  
  render() {
    const persons = this.props.user.map((item, i) => {
      const date = item.registered
      const formatDate = (new Date(date)).toUTCString().split(' ').slice(0, 4).join(' ');
      return (
        <li key={i}>
          <div className="Card">
            <div className="mb-md">
              <div className="d-flex">
                <img className="img-circle" src={item.picture.thumbnail} alt={item.name.first} />
                <div className="ml-md">
                  <div className="text-name">{item.name.first} {item.name.last}</div>
                  <div className="text-muted">{item.email}</div>
                </div>
              </div>
            </div>
            <p>Great talents are the most lovely and often the <a>#most</a> dangerous fruits on the tree of humanity</p>
            <p className="text-muted">{formatDate}</p>
          </div>
        </li>
      )
    });
    return (
      <header className="Headline bg-info">
        <div className="Container">
          <h1 className="text-center text-white mb-xs">Happy Customers</h1>
          <p className="text-subheader text-white text-center mb-lg">
            Co-ordinate campaigns and product launches, with improved <br/>overall communication.
          </p>
          <ul className="Grid">
            {persons}
          </ul>
        </div>
      </header>
    );
  }
}

export default HappyCustomers;
