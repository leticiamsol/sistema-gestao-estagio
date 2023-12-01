import React, { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faLock } from '@fortawesome/free-solid-svg-icons';

const icons = {
  fontSize: 15,
  color: '#606060',
}

function Recover() {
  
  const [email, setEmail] = useState('');

  async function handleLoginFormSubmit(event: FormEvent) {

    event.preventDefault();

    const data = {
        email,
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

            <label htmlFor="" className='recuperar_senha'>
                <b>Esqueceu sua senha?</b> Sem problemas. Basta nos informar seu endereço de e-mail e enviaremos 
                por e-mail um link de redefinição de senha que permitirá que você escolha uma nova.
            </label>
          
            <input type="email" placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
            <button type='submit'>Recuperar Senha</button>

            <ul className='auth_options'>
                <a href="/login">
                    <div className='auth_options_icons'>
                      <FontAwesomeIcon style={icons} icon={faKey} />
                      <a>Login</a>
                    </div>
                </a>

                <a href="/registar">
                    <div className='auth_options_icons'>
                      <FontAwesomeIcon style={icons} color='#606060' icon={faLock} />
                      <a>Registar</a>
                    </div>
                </a>
            </ul>
          
        </form>

      </div>

    </div>
  );
}

export default Recover;
