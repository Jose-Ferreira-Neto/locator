import './App.css';
import PropTypes from 'prop-types' 
import React, {useState} from 'react';

function handleClick(e){
  alert('ENVIADO AO BACKEND');
  e.preventDefault();
}
function convert(text){
  let cripto = '';
  for(let i=0; i<text.length;i++){
    cripto+='*'
  }
  return(cripto)
}

function App(){
    const [name, setName]=useState('');
    const [password, setPass]=useState('');
    return (
     <>
     <h1>FORM</h1>
     <form >
       <label htmlFor='labelDoNome'>NOME: 
       <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
     </label>
     <br/>
     <label htmlFor='labelDaSenha'>SENHA: 
       <input type='password' value={password} onChange={e=>setPass(e.target.value)}/>
     </label>
     <button type='submit' value='enviar' onClick={handleClick}>ENVIAR</button>
     </form>
     {name}:{password?convert(password):''}
     </>
    );
  }

App.propTypes= {
  nome: PropTypes.string.isRequired,
  profissao: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired
}
App.defaultProps={
  nome:'JOSE',
  profissao:'dev',
  local:'Boston'
}
export default App;