import React, { useState } from 'react';
import '../Pages.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../lib/firebase';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Registration successful!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pages-container">
      <h1 className="pages-title" style={{ fontSize: '2.2rem' }}>Create Your Account</h1>
      <p className="pages-desc" style={{ fontSize: '1.1rem', maxWidth: '500px' }}>
        Register to join Namib Nexus and unlock access to business listings, community features, and more.
      </p>
      <form onSubmit={handleSubmit} className="pages-form">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="pages-input" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="pages-input" />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="pages-input" />
        <button type="submit" className="pages-button">Register</button>
        {error && <p className="pages-error">{error}</p>}
        {success && <p className="pages-success">{success}</p>}
      </form>
      <footer className="pages-footer">
        &copy; {new Date().getFullYear()} Namib Nexus. All rights reserved.
      </footer>
    </div>
  );
};

export default Register;
