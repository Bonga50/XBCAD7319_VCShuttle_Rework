import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Route } from 'react-router';
import AdminShuttleSubPage from '../AdminShuttleSubPage/AdminShuttleSubPage';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import AdminGetUserList from '../../../components/AdminUsers/AdminGetUsersList/AdminGetUsersList';

const AdminUserSubPage: React.FC = () => {

    return (
        <>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                    <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
                        <IonTitle>Users</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <AdminGetUserList/>
                </IonContent>
            </IonPage>
            <AdminSettingsList />
        </>

    );
};

export default AdminUserSubPage;