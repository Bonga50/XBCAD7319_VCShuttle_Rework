import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import AdminLocationList from '../../../components/AdminLocations/AdminLocationList/AdminLocationList';
import AdminAddLocation from '../../../components/AdminLocations/AdminAddLocation/AdminAddLocation';

const AdminAddLocationSubPage: React.FC = () => {

    return (
        <>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Page Title</IonTitle>
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