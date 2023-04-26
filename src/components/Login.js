import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setEmail] = useState('');
  const [loginPassword, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!loginEmail) {
      errors.email = 'Email is required';
    }
    if (!loginPassword) {
      errors.password = 'Password is required';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const hr = await axios.get(`/api/Ai/HR?email=${loginEmail}&password=${loginPassword}`);
      if (hr.data.length) {
        navigate.push(`/hr/${loginEmail}`);
        return;
      }

      const user = await axios.get(`/api/Ai/users?email=${loginEmail}&password=${loginPassword}`);
      if (user.data.length) {
        navigate.push(`/user/${loginEmail}`);
        return;
      }

      errors.email = 'Email or password is incorrect';
      setErrors(errors);
    } catch (error) {
      errors.email = 'An error occurred';
      setErrors(errors);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    // handle forgot password logic
  };

  const isFormValid = () => {
    return loginEmail && loginPassword && Object.keys(errors).length === 0;
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-1/4">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginEmail}
              onChange={handleEmailChange}
              className="border rounded-lg py-2 px-3 w-full"
            />
             {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={loginPassword}
                onChange={handlePasswordChange}
                className="border rounded-lg py-2 px-3 w-full pr-10"
              />
              <button
                type="button"
                onClick={handleShowPasswordToggle}
                className="absolute top-0 right-0 h-full  text-gray-500 hover:text-gray-700 flex items-center justify-center"
              >
                {showPassword ? (
                  <span class="material-icons-outlined">
                    visibility_off
                  </span>
                ) : (
                  <span class="material-icons-outlined">visibility</span>
              )}
              </button>
            </div>
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm">
              <button
                type="button"
                onClick={handleForgotPasswordClick}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                Forgot your password?
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => handleLogin(e)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none w-full"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;