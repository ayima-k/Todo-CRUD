import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { createTodo } from '../../../api';
import { useForm } from 'react-hook-form';
import { BsCheck } from 'react-icons/bs';
import './Admin.scss';

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onBlur',
  });
  const [loading, setLoading] = React.useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setLoading(true);
    createTodo(accessToken, data)
    .then(() => navigate('/'))
    .finally(() => setLoading(false));
  };

  return (
    <section>
      {loading ? <Loader /> : ''}
      <div className="container">
        <div className="card">
          <h4>Admin</h4>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Title *"
                {...register('title', {
                  required: 'Required field!',
                  minLength: {
                    value: 4,
                    message: 'Minimum 4 symbols!',
                  },
                })}
              />
              <p style={{ color: 'red', textAlign: 'center' }}>
                {errors?.title && errors.title.message}
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Content *"
                {...register('content', {
                  required: 'Required field!',
                  minLength: {
                    value: 4,
                    message: 'Minimum 4 symbols!',
                  },
                })}
              />
              <p style={{ color: 'red', textAlign: 'center' }}>
                {errors?.content && errors.content.message}
              </p>
            </div>
            <div>
              <input
                type="date"
                placeholder="Date *"
                {...register('date', {
                  required: 'Required field!',
                })}
              />
              <p style={{ color: 'red', textAlign: 'center' }}>
                {errors?.date && errors.date.message}
              </p>
            </div>
            {isValid && (
              <p style={{ color: 'green', textAlign: 'center' }}>
                Success <BsCheck />
              </p>
            )}
            <div className="btn">
              <button disabled={!isValid} type="submit" className="btn_primary">
                Adding
              </button>
            </div>
          </form>

          <div className="to_auth">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
