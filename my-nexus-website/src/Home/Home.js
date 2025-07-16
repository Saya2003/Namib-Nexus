import React from 'react';
import '../Home/Home.css'; // Assuming you have a CSS file for styles
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="pages-container" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
      {/* Animated gradient border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
        opacity: 0.5,
        filter: 'blur(2px)'
      }} />
      <div className="home-content" style={{ width: '100%', maxWidth: 900, margin: '0 auto', background: 'rgba(255,255,255,0.92)', borderRadius: 24, boxShadow: '0 8px 32px rgba(43,88,118,0.10)', padding: '32px 0', position: 'relative' }}>
        <h1 className="home-title" style={{ marginTop: 0 }}>Namib Nexus</h1>
        <div className="home-desc-wrapper">
          <div className="home-desc" style={{ textAlign: 'center', margin: '0 auto', maxWidth: 700, background: 'rgba(255,255,255,0.85)', border: '2px solid #e0eafc', boxShadow: '0 2px 12px rgba(43,88,118,0.10)' }}>
            <span className="home-highlight" style={{ fontSize: '1.3rem', fontWeight: 700 }}>Welcome to Namib Nexus!</span><br /><br />
            <span className="home-desc-sub">An interactive web app to learn about electricity sources, compare them, and test your knowledge.</span><br /><br />
            <strong className="home-desc-highlight">How it works:</strong>
            <ul className="home-desc-list" style={{ margin: '18px auto', background: 'rgba(255,255,255,0.7)', border: '1px solid #cfdef3', borderRadius: 10, padding: 16, maxWidth: 480 }}>
              <li>Click <b>Learn</b> to explore reference info about solar, wind, hydro, and more. Sources: <a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#2b5876', textDecoration: 'underline', fontWeight: 600 }}>IEA</a>, <a href="https://www.energy.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#2b5876', textDecoration: 'underline', fontWeight: 600 }}>U.S. Department of Energy</a>, <a href="https://www.nrel.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#2b5876', textDecoration: 'underline', fontWeight: 600 }}>NREL</a>.</li>
              <li>Click <b>Quiz</b> to answer questions, compare sources, and solve problems. Get a rating at the end!</li>
              <li>Use the buttons below to navigate.</li>
            </ul>
            <span className="home-desc-highlight" style={{ display: 'block', marginTop: 18 }}>Start your journey to understanding electricity sources and their impact!</span>
          </div>
        </div>
        <div className="home-sections" style={{ display: 'flex', gap: 32, margin: '2.5em 0 2em 0', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="home-card" style={{ minWidth: 220, maxWidth: 260, background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)', boxShadow: '0 4px 16px rgba(43,88,118,0.12)', border: '1.5px solid #b0c4de', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s' }}>
            <span style={{ position: 'absolute', top: 18, right: 18, fontSize: 28, color: '#2b5876', opacity: 0.18 }}>🏢</span>
            <h2 className="home-card-title">Business Directory</h2>
            <p className="home-card-desc">Find and support local businesses across Namibia.</p>
          </div>
          <div className="home-card" style={{ minWidth: 220, maxWidth: 260, background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)', boxShadow: '0 4px 16px rgba(43,88,118,0.12)', border: '1.5px solid #b0c4de', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s' }}>
            <span style={{ position: 'absolute', top: 18, right: 18, fontSize: 28, color: '#2b5876', opacity: 0.18 }}>🤝</span>
            <h2 className="home-card-title">Community Hub</h2>
            <p className="home-card-desc">Connect, share, and grow with fellow Namibians.</p>
          </div>
          <div className="home-card" style={{ minWidth: 220, maxWidth: 260, background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)', boxShadow: '0 4px 16px rgba(43,88,118,0.12)', border: '1.5px solid #b0c4de', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s' }}>
            <span style={{ position: 'absolute', top: 18, right: 18, fontSize: 28, color: '#2b5876', opacity: 0.18 }}>🌍</span>
            <h2 className="home-card-title">Opportunities</h2>
            <p className="home-card-desc">Explore jobs, events, and more happening near you.</p>
          </div>
        </div>
        <div className="home-buttons" style={{ margin: '32px 0 0 0', display: 'flex', gap: 32, justifyContent: 'center', width: '100%' }}>
          <button className="home-button" style={{ fontSize: '1.15rem', minWidth: 160, boxShadow: '0 2px 12px rgba(43,88,118,0.12)' }} onClick={() => navigate('/learn')}>Learn</button>
          <button className="home-button" style={{ fontSize: '1.15rem', minWidth: 160, boxShadow: '0 2px 12px rgba(43,88,118,0.12)' }} onClick={() => navigate('/quiz')}>Quiz</button>
        </div>
        <footer className="home-footer" style={{ marginTop: 32, background: 'rgba(255,255,255,0.7)', border: '1px solid #e0eafc', borderRadius: 10, padding: '10px 0', fontWeight: 500, fontSize: '1.05rem', color: '#2b5876', letterSpacing: 1 }}>
          &copy; {new Date().getFullYear()} Namib Nexus. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Home;