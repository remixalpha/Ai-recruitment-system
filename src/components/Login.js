import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setEmail] = useState("");
  const [loginPassword, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [userToken, setUserToken] = useState(false);
  const [adminToken, setAdminToken] = useState(false);

  const navigate = useNavigate();
  const URL = "http://localhost:5000/";

  // B (Login)
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    // try {
    //   const userResponse = await axios.post(`${URL}users/login`, {
    //     email: loginEmail,
    //     password: loginPassword,
    //   });
    //   const hrResponse = await axios.post(`${URL}hr/login`, {
    //     email: loginEmail,
    //     password: loginPassword,
    //   });
    //   if (userResponse?.data?.token) {
    //     // Redirect to User home page
    //     navigate("/user");
    //   } else if (hrResponse?.data?.token) {
    //     navigate("/hrhome");
    //   } else {
    //     console.log("hi hello how are you");
    //   }
    // } catch (error) {
    //   console.log(error.response.data);
    //   setErrors({ message: error.response.data.message });
    // }
    try {
      axios
        .post("http://localhost:5000/users/login", {
          email: loginEmail,
          password: loginPassword,
        })
        .then((res) => {
          if (res) {
            setUserToken(res.data.token);
          } else {
          }
        });
      axios
        .post("http://localhost:5000/hr/login", {
          email: loginEmail,
          password: loginPassword,
        })
        .then((res) => {
          if (res) {
            setAdminToken(res.data.token);
          } else {
            setAdminToken(false);
          }
        });

      if (userToken) {
        // Redirect to User home page
        navigate("/user");
      }
      if (adminToken) {
        navigate("/hrhome");
      }
    } catch (error) {
      console.error(error);
      console.log("An error occurred while logging in.");
    }
  };
  //

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
    let errors = {};
    let isValid = true;

    if (!loginEmail) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!loginPassword) {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-1/4">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
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
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
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
                  <span className="material-icons-outlined">
                    visibility_off
                  </span>
                ) : (
                  <span className="material-icons-outlined">visibility</span>
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
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
            type="submit"
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
