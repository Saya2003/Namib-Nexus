import React, { useState } from 'react';
import '../Pages.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../lib/firebase';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Login successful!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pages-container">
      <h1 className="pages-title" style={{ fontSize: '2.2rem' }}>Login to Namib Nexus</h1>
      <p className="pages-desc" style={{ fontSize: '1.1rem', maxWidth: '500px' }}>
        Access your account to connect with the community, explore opportunities, and manage your profile.
      </p>
      <form onSubmit={handleSubmit} className="pages-form">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="pages-input" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="pages-input" />
        <button type="submit" className="pages-button">Login</button>
        {error && <p className="pages-error">{error}</p>}
        {success && <p className="pages-success">{success}</p>}
      </form>
      <footer className="pages-footer">
        &copy; {new Date().getFullYear()} Namib Nexus. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
