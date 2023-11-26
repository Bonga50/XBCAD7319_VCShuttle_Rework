import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import LoginForm from '../../components/LoginForm/LoginForm'; 

const LoginPage: React.FC = () => (
  <IonPage>
    <IonHeader>
    </IonHeader>
    <IonContent>
    <LoginForm/>
    </IonContent>
  </IonPage>
);

export default LoginPage;
