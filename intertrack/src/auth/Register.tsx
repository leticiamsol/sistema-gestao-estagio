import React, { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faLock } from '@fortawesome/free-solid-svg-icons';

const icons = {
  fontSize: 15,
  color: '#606060',
}

function Register() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  async function handleLoginFormSubmit(event: FormEvent) {

    event.preventDefault();

    const data = {
        name,
        email,
        password,
        confirm_password
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

            <img src="/isla.png" className='isla_logo' alt="Isla Logo" />

            <label htmlFor="" className='text_label'>Registar</label>
          
            <input type="email" placeholder='Your Name' value={name} onChange={event => setName(event.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
            <input type="text" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            <input type="text" placeholder='Confirm Password' value={confirm_password} onChange={e => setConfirmPassword(e.target.value)} />
            <button type='submit'>Registar</button>

            <ul className='auth_options'>
                <a href="/recuperar_senha">
                  <div className='auth_options_icons'>
                    <FontAwesomeIcon style={icons} icon={faKey} />
                    <a>Recuperar Senha</a>
                  </div>
                </a>

                <a href="/login">
                  <div className='auth_options_icons'>
                    <FontAwesomeIcon style={icons} color='#606060' icon={faLock} />
                    <a>Login</a>
                  </div>
                </a>
            </ul>
          
        </form>

      </div>

    </div>
  );
}

export default Register;
