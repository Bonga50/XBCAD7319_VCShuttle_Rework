import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import AdminLocationList from '../../../components/AdminLocations/AdminLocationList/AdminLocationList';
import { Redirect } from 'react-router';
import { UserDataHandler } from '../../../Data/UserDataHandler';

const AdminLocationSubPage: React.FC = () => {
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
                        <IonTitle>Locations</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                <AdminLocationList/>

                </IonContent>
            </IonPage>
            <AdminSettingsList />
        </>

    );
};

export default AdminLocationSubPage;