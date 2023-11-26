import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminAddSuttleForm from '../../../components/AdminShuttles/AdminAddShuttleForm/AdminAddSuttleForm';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';

const AdminAddShuttleSubPage: React.FC = () => {

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