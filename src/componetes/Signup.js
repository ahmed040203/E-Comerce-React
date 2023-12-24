import React, { useState } from 'react';
import { validateEmail, validatePassword } from './validation';

export const fakeUserData = [
  { email: 'user1@gmail.com', password: 'pass1' },
  { email: 'user2@gmail.com', password: 'pass2' },
  { email: 'user3@gmail.com', password: 'pass3' },
];

export const isEmailUnique = (email, fakeUserData) => {
  return !fakeUserData.some((user) => user.email === email);
};

const addUser = (userObject) => {
  fakeUserData.push(userObject);
};

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      setError('Invalid email or password.');
      return;
    }

    const userObject = {
      email,
      password,
    };

    console.log(email,password)
    addUser(userObject);

    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="cart">
            <div className="cart-body">
              <h2 className="cart-title text-center">Sign up</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSignup}
                  className="btn btn-primary d-block mx-auto"
                >
                  Sign up
                </button>
                {error && <p className="text-danger text-center mt-3">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
