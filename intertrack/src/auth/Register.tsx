import React, { useState } from 'react';
import axios from 'axios';

function Register() 
{
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (senha !== confirmarSenha) {
        setError('As senhas não coincidem.');
        return;
        }

        try {
        const response = await axios.post('https://192.168.56.1:7092/api/Registration/registration', {
            nome,
            email,
            senha,
        });

        if (response.status === 200) {
            console.log('Registro bem-sucedido!');
        } else {
            setError('Falha no registro. Tente novamente mais tarde.');
        }
        } catch (error) {
        console.error('Erro durante o registro:', error);
        setError('Erro durante o registro. Tente novamente mais tarde.');
        }
    };
    
    return (
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <form
                style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 600 }}
                onSubmit={handleSubmit}
              >
                <input type="text" placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <input
                    type="password"
                    placeholder="confirmar senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                />

                <input type="submit" value="registrar" />
                {error && <div style={{ color: 'red' }}>{error}</div>}
              </form>
            </div>
          </div>
        </div>
    );
}

export default Register;