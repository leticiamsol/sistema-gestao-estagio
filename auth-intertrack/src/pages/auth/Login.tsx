import React, { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/isla.png';

const icons = {
  fontSize: 15,
  color: '#606060',
}

function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginFormSubmit(event: FormEvent) {

    event.preventDefault();

    const data = {
        email,
        password
    }

    const response = await fetch('http://127.0.0.1:3333/sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    const responseJson = await response.json();

    console.log(responseJson);

    localStorage.setItem('token', responseJson.token);

  }

  return (
    <div>

      <div className='auth_area'>

        <form onSubmit={handleLoginFormSubmit}>

            <img src={logo} className='isla_logo' alt="Isla Logo" />

            <label htmlFor="" className='text_label'>Fazer Login</label>
          
            <input type="email" placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
            <input type="text" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit'>Login</button>

            <ul className='auth_options'>
                <a href="/recuperar_senha">
                  <div className='auth_options_icons'>
                    <FontAwesomeIcon style={icons} icon={faKey} />
                    <a>Recuperar Senha</a>
                  </div>
                </a>

                <a href="/registar">
                  <div className='auth_options_icons'>
                    <FontAwesomeIcon style={icons} color='#606060' icon={faUserPlus} />
                    <a>Registar</a>
                  </div>
                </a>
            </ul>
          
        </form>

      </div>

    </div>
  );
}

export default Login;
