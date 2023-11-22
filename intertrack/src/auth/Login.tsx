import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() 
{

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
      
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
      
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
      
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
        const response = await fetch('https://192.168.56.1:7092/api/Registration/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
    
        if (response.ok) {
       
            navigate('/');
        } else {
      
            setError('Credenciais inválidas');
        }
        } catch (error) {
        console.error('Erro ao fazer login:', error);
        setError('Erro ao fazer login. Tente novamente mais tarde.');
        }
    };

    return (
        <div className="main-content">
            <div className="page-content">
               <div className="container-fluid">

                    <form style={{ display:'flex', flexDirection: 'column', gap: 20, maxWidth: 600}}
                    onSubmit={handleSubmit}
                    >
                        <input type="text" placeholder='email' value={email} onChange={handleEmailChange} />
                        <input type="text" placeholder='senha'  value={password} onChange={handlePasswordChange} />
                        <input type="submit" value={'login'} />

                        {error && <div style={{ color: 'red' }}>{error}</div>}
                    </form>

                </div>
            </div>
        </div>



    
    )
}

export default Login;