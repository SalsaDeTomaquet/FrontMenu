import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import './Home.styles.css'
import { loginUser } from '../../app/services/user';

const Home = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ nickname: username, password });
      if (response.status === 200) {
        navigate('/listaeventos');
      } else {
        alert('Usuario no encontrado');
      }
    } catch (err) {
      alert('Usuario o contraseña incorrectos');
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className='login-container'>
        <div className='top'>
          <h1 className='title'>EVENTS</h1>
          <h4>Introduce tus credenciales:</h4>
        </div>
        <form action="/login" method='post'>

          <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />

          <div className='password-container'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
            <span className='toggle-password' onClick={togglePasswordVisibility}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <button className='submit' onClick={handleLogin}>Enviar</button>
          <p>No tienes cuenta? <Link to="register">Pulsa aquí!</Link></p></form>
      </div>
    </div>



  )
};

export default Home;
