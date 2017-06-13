import React, { Component } from 'react';
import '../css/Headline.css';
import '../css/Grid.css';
import '../css/Card.css';

class OurClients extends Component {
  
  render() {
    const persons = this.props.user.map((item, i) => {
      return (
        <li key={i}>
          <div className="Card text-center">
            <div className="mb-xl">
              <img className="img-circle" src={item.picture.medium} alt={item.name.first} />
            </div>
            <p className="mb-xl">Uiio has eased the client intake process and allowed me ditch that constant stream of emails that build up from clients during a project</p>
            <div className="text-name">{item.name.first} {item.name.last}</div>
            <div>Head Developer</div>
          </div>
        </li>
      )
    });
    return (
      <header className="Headline bg-warning">
        <div className="Container">
          <h3 className="mb-md mx-auto text-center">Our clients</h3>
          <p className="mb-xxl text-center text-subheader">
            Choose amongst the free guided meditations on mindfulness, <br/>breathing, body scans.
          </p>
          <ul className="Grid">
            {persons}
          </ul>
        </div>
      </header>
    );
  }
}

export default OurClients;
