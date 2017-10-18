import React, { Component } from 'react';

import wellkerned from './wellkerned.jpg';
import blumenfeld from './blumenfeld.jpg';
import davemorin from './davemorin.jpg';

const testimonials = function () {
  const items = [
    {
      name: 'Kiley Werezak',
      avatar: wellkerned,
      caption: '@well_kerned',
      date: '18 Aug 2016',
      text: 'Great talents are the most lovely and often the #most dangerous fruits on the tree of humanity'
    },
    {
      name: 'Ben Blumenfeld',
      avatar: blumenfeld,
      caption: '@blumenfeld',
      date: '5 Jun 2016',
      text: 'It is nice having such fast and responsive support. Support is top notch'
    },
    {
      name: 'Dave Morin',
      avatar: davemorin,
      caption: '@davemorin',
      date: '3 Jun 2016',
      text: '#Uiio understands the correlation between a customers needs and the work agreement'
    }
  ];

  return items.map((item, i) =>
    <div key={i} className="grid-item width-md-1-3">
      <div className="card mb-sm">
        <div className="card-body">
          <div className="media mb-md">
            <div className="media-left">
              <img className="avatar" src={item.avatar} with="48" height="48" alt={item.name}/>
            </div>
            <div className="media-body">
              <div className="text-name">{item.name}</div>
              <div className="text-caption text-muted">{item.caption}</div>
            </div>
          </div>
          <p>{item.text}</p>
          <div className="text-muted">{item.date}</div>
        </div>
      </div>
    </div>
  );
};

class HappyCustomers extends Component {
  render() {
    return (
      <section className="section-hero bg-accent">
        <div className="page-width">
          <h1 className="text-white text-center">Happy Customers</h1>
          <p className="text-subheader text-white text-center mb-lg text-faded">
            Co-ordinate campaigns and product launches, with improved overall communication.
          </p>
          <div className="grid">
            {testimonials()}
          </div>
        </div>
      </section>
    );
  }
}

export default HappyCustomers
