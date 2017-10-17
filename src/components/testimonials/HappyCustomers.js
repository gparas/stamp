import React, { Component } from 'react';

const testimonials = function () {
  const items = [
    {
      name: 'Amy Honor',
      caption: '@a.honor',
      date: '18 Aug 2016',
      text: 'Great talents are the most lovely and often the #most dangerous fruits on the tree of humanity'
    },
    {
      name: 'Alex Douglas',
      caption: '@a.doug',
      date: '5 Jun 2016',
      text: 'It is nice having such fast and responsive support. Support is top notch'
    },
    {
      name: 'Donald Best',
      caption: '@bestofthebest',
      date: '3 Jun 2016',
      text: '#Uiio understands the correlation between a customers needs and the work agreement'
    }
  ];

  return items.map((item, i) =>
    <div key={i} className="grid-item width-md-1-3">
      <div className="card mb-sm">
        <div className="card-body">
          <div className="text-name">{item.name}</div>
          <p className="text-caption text-muted">{item.caption}</p>
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
          <p className="text-subheader text-white text-center mb-lg">
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
