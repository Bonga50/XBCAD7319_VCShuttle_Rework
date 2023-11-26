import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminShuttleSubPage from '../AdminShuttleSubPage/AdminShuttleSubPage';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import AdminGetUserList from '../../../components/AdminUsers/AdminGetUsersList/AdminGetUsersList';
import { UserDataHandler } from '../../../Data/UserDataHandler';
import { Redirect, Route } from "react-router";

const AdminUserSubPage: React.FC = () => {
    const userdataHandler = UserDataHandler.getInstance();
    if (userdataHandler.getLoggedRole() !== "admin") {
      return <Redirect to="/" />;
    }
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