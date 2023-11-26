import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminAddSuttleForm from '../../../components/AdminShuttles/AdminAddShuttleForm/AdminAddSuttleForm';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import { Redirect } from 'react-router';
import { UserDataHandler } from '../../../Data/UserDataHandler';

const AdminAddShuttleSubPage: React.FC = () => {
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
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                    <IonTitle>Add Shuttle</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <AdminAddSuttleForm/>
            </IonContent>
        </IonPage>
        <AdminSettingsList/>
        </>

    );
};

export default AdminAddShuttleSubPage;