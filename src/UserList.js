import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    fetch('https://randomuser.me/api/?inc=name,picture,email')
    .then(response => {
      return response.json();
    }).then((data) => {
        this.setState({ person: data.results });
      });
  }
  render() {
    const persons = this.state.person.map((item, i) => {
      return <div className="d-flex">
        <img className="img-circle" src={item.picture.thumbnail} alt={item.name.first} />
        <div className="ml-md">
          <div className="text-name">{item.name.first} {item.name.last}</div>
          <div className="text-muted">{item.email}</div>
        </div>
      </div>
    });
    return (
      <div className="Card">
        <div className="mb-md">{ persons }</div>
        <p>{this.props.children}</p>
        <p className="text-muted">{this.props.date}</p>
      </div>
    );
  }
}

UserList.propTypes = {
  children: PropTypes.node,
  date: PropTypes.string
};

export default UserList;
