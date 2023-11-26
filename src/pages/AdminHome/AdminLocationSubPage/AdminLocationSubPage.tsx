import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import AdminLocationList from '../../../components/AdminLocations/AdminLocationList/AdminLocationList';

const AdminLocationSubPage: React.FC = () => {

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