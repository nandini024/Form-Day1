import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [signupData, setSignup] = useState({
    name: '', email: '', password: '', location: '', role: ''
  });

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    let signLocalData = JSON.parse(localStorage.getItem("signupData")) || [];

    const existingUser = signLocalData.find(
      (s) => s.email === signupData.email && s.password === signupData.password
    );

    if (existingUser) {
      alert("User already exists!");
    } else {
      signLocalData.push(signupData);
      localStorage.setItem("signupData", JSON.stringify(signLocalData));
      alert("Signup successful!");
      navigate('/login');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Create Account</h2>

        <input type="text" placeholder="Enter Name" required
          onChange={(e) => setSignup({ ...signupData, name: e.target.value })} />

        <input type="email" placeholder="Enter Email" required
          onChange={(e) => setSignup({ ...signupData, email: e.target.value })} />

        <input type="password" placeholder="Enter Password" required
          onChange={(e) => setSignup({ ...signupData, password: e.target.value })} />

        <input type="text" placeholder="Enter Your Location" required
          onChange={(e) => setSignup({ ...signupData, location: e.target.value })} />

        <select required onChange={(e) => setSignup({ ...signupData, role: e.target.value })}>
          <option value="">Choose Your Role</option>
          <option value="seller">Seller</option>
          <option value="buyer">Buyer</option>
        </select>

        <button type="submit">Sign Up 🚀</button>

        <p className="redirect-text">
          Already registered? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
