import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import styles from './loginPage.css'


function LoginPage(){
    const navigate = useNavigate();
    //validação de login
    const [registration, setRegistration] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
          const res = await fetch('http://localhost:3000/employee/login', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ registration, password })
          });

          const data = await res.json();

          if(res.ok){
            navigate('/HomePage');
          }else{
            setMessage(data.message)
          }

        }catch(err){
            setMessage(`Error ao fazer login`)
        }
    };
        

    return(
    <div className='login'>
      <div >
        <div className='container'>
          <h1 className='welcome'>Bem vindo</h1>
          <form className='loginForm' action="" onSubmit={handleSubmit}>
                <label>Matricula</label>
                <input
                  type="text"
                  placeholder="000.000-0"
                  value={registration}
                  onChange={(e) => setRegistration(e.target.value)}
                  required
                />
                <label>Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type='submit'>Entrar</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
    );
}

export default LoginPage;