
import './LoginStyle.css';
import React, { useState } from 'react';
import User from '../../models/User';
import { IonContent, IonInput, IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAndroid, setIsAndroid] = useState(false); // State variable to track Android platform


  const handleSubmit = event => {
    event.preventDefault();
    const user = new User(username, password);
    // Handle form submission here
  };

  return (
    <div className='login-form-container'>
      <h2>VC Shuttle</h2>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            id='username'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group-button'>
          <input type='submit' value='Login' />
        </div>
      </form>
    </div>
  );
}


export default LoginForm;
