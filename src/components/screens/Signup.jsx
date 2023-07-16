import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5006/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter valid credentials');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='form-control'
              name='name'
              onChange={onChange}
              value={credentials.name}
              placeholder='Enter name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              name='email'
              value={credentials.email}
              onChange={onChange}
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              value={credentials.password}
              onChange={onChange}
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Address</label>
            <input
              type='text'
              className='form-control'
              name='geolocation'
              value={credentials.geolocation}
              onChange={onChange}
              id='examp'
              placeholder='Enter your address'
            />
          </div>

          <button type='submit' className='btn btn-success'>
            Submit
          </button>
          <Link to='/loginuser' className='m-1 btn btn-danger'>
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}
