import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoSignOut } from 'react-icons/go';
import { MdAdminPanelSettings } from 'react-icons/md';
import { RiMenu3Line } from 'react-icons/ri';
import { getOut } from '../../api';
import cls from './Navbar.module.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const user = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const signOut = () => {
    getOut({refreshToken})
    .then(() => {
      localStorage.clear();
      setToggle(!toggle);
      navigate('/auth/register');
    });
  };

  return (
    <nav className={toggle ? cls.toggle : undefined}>
      <div className={cls.navbar}>
        <div>
          <Link to="/">TODO API</Link>
        </div>
        <div className={toggle ? cls.buttons_active : cls.buttons}>
          <Link onClick={() => setToggle(false)} to="/admin" className={cls.btn_success}>
            <MdAdminPanelSettings/> Admin
          </Link>
          <Link to className={cls.btn_danger} onClick={signOut}>
            <GoSignOut/> Sign out
          </Link>
        </div>
        {user && user !== 'undefined' && (
          <div className={cls.burger}>
            <RiMenu3Line onClick={() => setToggle(!toggle)} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
