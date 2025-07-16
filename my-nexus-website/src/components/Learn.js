import React, { useState } from 'react';
import '../Pages.css';


const sources = [
  {
    name: 'Solar',
    facts: [
      'Solar energy is harnessed from sunlight using photovoltaic cells.',
      'It is clean, renewable, and becoming more affordable.',
      'Best suited for sunny regions and rooftops.'
    ],
    link: 'https://www.energy.gov/eere/solar/solar-energy-technologies-office',
    advantages: 'No emissions, renewable, scalable.',
    disadvantages: 'Intermittent (depends on sunlight), requires space.'
  },
  {
    name: 'Wind',
    facts: [
      'Wind turbines convert kinetic energy from wind into electricity.',
      'Wind farms can be onshore or offshore.',
      'Wind energy is one of the fastest-growing renewables.'
    ],
    link: 'https://www.energy.gov/eere/wind/how-do-wind-turbines-work',
    advantages: 'No emissions, renewable, efficient in windy areas.',
    disadvantages: 'Intermittent, visual impact, noise.'
  },
  {
    name: 'Hydro',
    facts: [
      'Hydropower uses flowing water to spin turbines and generate electricity.',
      'It is the largest source of renewable electricity worldwide.',
      'Can provide baseload and peak power.'
    ],
    link: 'https://www.energy.gov/eere/water/hydropower-basics',
    advantages: 'Reliable, renewable, flexible.',
    disadvantages: 'Environmental impact, location-dependent.'
  },
  {
    name: 'Coal',
    facts: [
      'Coal-fired power plants burn coal to produce steam and generate electricity.',
      'Coal is abundant but produces significant emissions.',
      'Used for baseload power in many countries.'
    ],
    link: 'https://www.iea.org/energy-system/fossil-fuels/coal',
    advantages: 'Reliable, established infrastructure.',
    disadvantages: 'High emissions, environmental impact.'
  },
  {
    name: 'Nuclear',
    facts: [
      'Nuclear power uses fission to generate heat and produce electricity.',
      'Produces no direct CO2 emissions.',
      'Requires careful management of radioactive waste.'
    ],
    link: 'https://www.energy.gov/ne/nuclear-reactor-technologies',
    advantages: 'Low emissions, reliable, high output.',
    disadvantages: 'Radioactive waste, safety concerns.'
  }
];

const Learn = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = idx => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div className="pages-container">
      <h1 className="pages-title">Learn About Electricity Sources</h1>
      <div className="pages-desc">
        <p>
          Click on each card to explore facts, advantages, disadvantages, and reference links for different electricity sources.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            justifyItems: 'center',
            margin: '32px 0'
          }}
        >
          {sources.map((src, idx) => (
            <div
              key={src.name}
              className="pages-card"
              style={{
                width: '260px',
                background: expanded === idx ? 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)' : '#fff',
                boxShadow: '0 2px 8px rgba(43,88,118,0.10)',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'background 0.3s',
                padding: '18px',
                position: 'relative'
              }}
              onClick={() => handleExpand(idx)}
            >
              <h2 style={{ color: '#2b5876', marginBottom: '12px', fontSize: '1.2rem' }}>{src.name}</h2>
              {expanded === idx ? (
                <div>
                  <ul style={{ marginBottom: '12px' }}>
                    {src.facts.map((fact, i) => <li key={i}>{fact}</li>)}
                  </ul>
                  <div style={{ marginBottom: '8px' }}><b>Advantages:</b> {src.advantages}</div>
                  <div style={{ marginBottom: '8px' }}><b>Disadvantages:</b> {src.disadvantages}</div>
                  <a href={src.link} target="_blank" rel="noopener noreferrer" style={{ color: '#4e4376', textDecoration: 'underline' }}>Learn more</a>
                </div>
              ) : (
                <div style={{ color: '#4e4376', fontWeight: 500, fontSize: '1rem' }}>Click to expand</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '24px' }}>
          <b style={{ fontSize: '1.1rem', color: '#2b5876' }}>Reference Links:</b>
          <div style={{ display: 'flex', gap: '18px', marginTop: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://www.iea.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #2b5876 0%, #4e4376 100%)',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500,
                boxShadow: '0 2px 8px rgba(43,88,118,0.10)',
                transition: 'background 0.2s, color 0.2s',
                fontSize: '1rem'
              }}
              onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #4e4376 0%, #2b5876 100%)'}
              onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #2b5876 0%, #4e4376 100%)'}
            >
              International Energy Agency (IEA)
            </a>
            <a
              href="https://www.energy.gov/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #2b5876 0%, #4e4376 100%)',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500,
                boxShadow: '0 2px 8px rgba(43,88,118,0.10)',
                transition: 'background 0.2s, color 0.2s',
                fontSize: '1rem'
              }}
              onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #4e4376 0%, #2b5876 100%)'}
              onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #2b5876 0%, #4e4376 100%)'}
            >
              U.S. Department of Energy
            </a>
            <a
              href="https://www.nrel.gov/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #2b5876 0%, #4e4376 100%)',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500,
                boxShadow: '0 2px 8px rgba(43,88,118,0.10)',
                transition: 'background 0.2s, color 0.2s',
                fontSize: '1rem'
              }}
              onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #4e4376 0%, #2b5876 100%)'}
              onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #2b5876 0%, #4e4376 100%)'}
            >
              National Renewable Energy Laboratory (NREL)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
