import React, { Component } from 'react';

const testimonials = function () {
  const items = [
    {
      name: 'Donald Best',
      caption: 'Head Developer',
      text: 'Uiio has eased the client intake process and allowed me ditch that constant stream of emails that build up from clients during a project'
    },
    {
      name: 'Amy Honor',
      caption: 'Senior Product Designer',
      text: 'Since switching over to Uiio, my anxiety of faulty systems has washed away and my clients have remarked multiple times'
    },
    {
      name: 'Alex Douglas',
      caption: 'CTO',
      text: 'I used to spend hours creating questionnaire forms for my clients, and more than once had to explain all of their input had been lost'
    }
  ];

  return items.map((item, i) =>
    <div key={i} className="grid-item width-md-1-3">
      <div className="card mb-sm">
        <div className="card-body">
          <p>{item.text}</p>
        </div>
        <div className="card-footer card-footer-flush">
          <div className="text-name">{item.name}</div>
          <div className="text-caption">{item.caption}</div>
        </div>
      </div>
    </div>
  );
};

class OurClients extends Component {
  render() {
    return (
      <section className="section-hero bg-warning">
        <div className="page-width text-center">
          <h3>Our Clients</h3>
          <p className="text-center mb-lg">
            Choose amongst the free guided meditations on mindfulness, breathing, body scans.
          </p>
          <div className="grid">
            {testimonials()}
          </div>
        </div>
      </section>
    );
  }
}

export default OurClients
