import React, { useState } from 'react';
import { FiArrowDown } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import './styles.css'

import iconImg from '../../assets/icon.png';

function Login() {
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '1998') {
      localStorage.setItem('authorization', 'autorizado')
      history.push('/membros')
    } else {
      alert('SENHA INCORRETA')
    }
  }

  return(
    <div className='Login'>
      <div className='dialog'>
        <img width='150px' height='150px' src={iconImg}/>
        <h1>INSIRA A SENHA</h1>
        <FiArrowDown className='arrow'/>
        <form onSubmit={handleSubmit}>
          <input value={password} onChange={handleChange} type='password'/>
          <button type='submit'>ENTRAR</button>
        </form>

        <a className='cta' href='https://wa.me/5581995272225' target='_blank'>INSCREVA-SE</a>

      </div>
    </div>
  );
}

export default Login;
