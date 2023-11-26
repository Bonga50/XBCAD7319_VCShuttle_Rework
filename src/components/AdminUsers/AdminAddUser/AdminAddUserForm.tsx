import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { UserDataHandler } from '../../../Data/UserDataHandler';

const AdminAddUsersForm: React.FC = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const userDataHandler = UserDataHandler.getInstance(); 


  const handleSubmit = () => {
    const userId = userDataHandler.generateRandomUserId(); // Generate a random ID
    const user = {
      id: userId,
      name,
      email,
      password,
      role,
      status,
    };
    userDataHandler.addUsertoDatabase(user);
    // You can now pass 'user' to your data handler for further processing
  };

    return (
      <div>
        <div>
      <IonItem>
        <IonLabel position="stacked">Name</IonLabel>
        <IonInput
          label=""
          value={name}
          onIonChange={(e) => setName(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Email</IonLabel>
        <IonInput
          label=""
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Password</IonLabel>
        <IonInput
          label=""
          type="password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Role</IonLabel>
        <IonInput
          label=""
          value={role}
          onIonChange={(e) => setRole(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Status</IonLabel>
        <IonInput
          label=""
          value={status}
          onIonChange={(e) => setStatus(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <IonButton expand="full" onClick={handleSubmit}>
        Submit
      </IonButton>
    </div>
      </div>
    );
};

export default AdminAddUsersForm;