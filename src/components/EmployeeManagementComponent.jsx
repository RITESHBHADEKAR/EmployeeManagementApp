import Login from './Login';
import Dashboard from './Dashboard';
import React, { useState } from 'react';
const EmployeeManagementComponent = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('auth') === 'true');
  return (
    <>
      <div
        className='w-full h-screen grid'
      >
        {isAuth ? (
          <Dashboard
            onLogout={() => {
              localStorage.removeItem('auth');
              setIsAuth(false);
            }}
          />
        ) : (
          <Login
            onLogin={() => {
              localStorage.setItem('auth', 'true');
              setIsAuth(true);
            }}
          />
        )}
      </div>
    </>
  );
};

export default EmployeeManagementComponent;
