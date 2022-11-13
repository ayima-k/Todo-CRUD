import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRegister } from '../../../api';
import cls from './Register.module.scss';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.value !== '' && password.value !== '') {
      getRegister({
        email,
        password,
      }).then((res) => {
        console.log(res);
        if (res) {
          setAlert(true);
          localStorage.setItem('user', JSON.stringify(res.user));
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem('isActivated', res.user.isActivated);
        }
      });
    }
  };

  return (
    <div className={cls.container}>
      <div className={cls.card}>
        <h4>Registration</h4>
        <hr />
        <form>
          <div>
            <input
              type="email"
              placeholder="Email *"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password *"
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {
            alert && (
              <>
                <div>На вашу почту отправлено, ссылка на активацию аккаунта</div>
                <p className={cls.text_muted}>Прежде чем перейти на Главную, активируйте аккаунт</p>
              </>
            )
          }
        </form>
        <div className={cls.btn}>
          <button 
            onClick={handleRegister} 
            disabled={email === '' || password === ''}
          >
            Registration
          </button>
        </div>

        <div className={cls.to_auth}>
          <Link to="/auth/login">Have already an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
