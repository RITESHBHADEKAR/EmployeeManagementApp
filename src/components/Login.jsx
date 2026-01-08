import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [user, setUser] = useState({
    Username: '',
    password: '',
  });
  const [error, SetError] = useState({
    Username: false,
    password: false,
  });
  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onblur = (e) => {
    if (e.target.value === '') {
      SetError({ ...error, [e.target.name]: true });
    } else {
      SetError({ ...error, [e.target.name]: false });
    }
  };
  const Login = () => {
    let tempObj = {
      Username: false,
      password: false,
    };
    if (user.Username && user.password) {
      onLogin();
    } else if (user.Username == '' && user.password == '') {
      tempObj.password = true;
      tempObj.Username = true;
    } else if (user.Username == '') {
      tempObj.Username = true;
    } else if (user.password == '') {
      tempObj.password = true;
    }
    SetError(tempObj);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>

        <div className='mb-4'>
          <label className='block text-gray-600 mb-1'>Username</label>
          <input
            type='text'
            onBlur={onblur}
            placeholder='Enter Username'
            name='Username'
            onChange={(e) => handlechange(e)}
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {error.Username && (
            <p className='mt-1 text-sm text-red-500 font-medium'>
              Please enter Username
            </p>
          )}
        </div>

        <div className='mb-6'>
          <label className='block text-gray-600 mb-1'>Password</label>
          <input
            type='password'
            name='password'
            onBlur={onblur}
            placeholder='Enter password'
            onChange={(e) => handlechange(e)}
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {error.password && (
            <p className='mt-1 text-sm text-red-500 font-medium'>
              Please enter Password
            </p>
          )}
        </div>

        <button
          onClick={Login}
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'
        >
          Login
        </button>

        <p className='text-center text-sm text-gray-500 mt-4'>
          Don’t have an account?{' '}
          <span className='text-blue-500 cursor-pointer'>Sign up</span>
        </p>
      </div>
    </div>
  );
}
