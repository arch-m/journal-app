import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { msgError, loading } = useSelector( state => state.ui );

  const [formValues, handleInputChange ] = useForm({
    email: 'nando@gmail.com',
    password: '123456'
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if(isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
      console.log('sesion tal vez iniciaa');
    }
  }
  
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const isFormValid = () => {
    if(!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if(password.trim().length === 0 || password.length < 5) {
      dispatch(setError('Invalid password'));
      return false;
    }
    
    dispatch(removeError());
    return true;
  }
  
  return (
    <>
      <h3 className="auth__title">Login</h3>

      {
        msgError &&
        <div className="auth__alert-error">
          { msgError }
        </div>
      }

      <form 
        onSubmit={ handleLogin }
        className="animate__animated animate__fadeIn animate__faster"
      >
        <input 
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />

        <input 
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={ password }
          onChange={ handleInputChange }
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={ loading }
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div 
            className="google-btn"
            onClick={ handleGoogleLogin }
          >
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with Google</b>
              </p>
          </div>
        </div>

        <Link 
          to="register"
          className="link"
        >
          Create new account 
        </Link>
      </form>
    </>
  );
}
