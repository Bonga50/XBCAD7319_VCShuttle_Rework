import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminAddUsersForm from '../../../components/AdminUsers/AdminAddUser/AdminAddUserForm';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';

const AdminAddUserSubPage: React.FC = () => {

    return (
        <>
        <IonPage id="main-content">
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
        <AdminSettingsList/>

        </>
    );
};

export default AdminAddUserSubPage;