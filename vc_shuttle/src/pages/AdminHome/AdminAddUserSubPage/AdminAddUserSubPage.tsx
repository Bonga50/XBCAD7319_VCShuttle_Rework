import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminAddUsersForm from '../../../components/AdminUsers/AdminAddUser/AdminAddUserForm';

const AdminAddUserSubPage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <AdminAddUsersForm/>
            </IonContent>
        </IonPage>
    );
};

export default AdminAddUserSubPage;