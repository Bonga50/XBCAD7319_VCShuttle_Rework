import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import AdminLocationList from '../../../components/AdminLocations/AdminLocationList/AdminLocationList';
import AdminAddLocation from '../../../components/AdminLocations/AdminAddLocation/AdminAddLocation';
import { Redirect } from 'react-router';
import { UserDataHandler } from '../../../Data/UserDataHandler';

const AdminAddLocationSubPage: React.FC = () => {
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
                        <IonTitle>Add Location</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <AdminAddLocation/>
                </IonContent>
            </IonPage>
            <AdminSettingsList />
        </>
    );
};

export default AdminAddLocationSubPage;