import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import AdminViewScheduleList from '../../../components/AdminSchedules/AdminViewScheduleList/AdminViewScheduleList';

const AdminScheduleSubPage: React.FC = () => {

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
                <AdminViewScheduleList/>
            </IonContent>
        </IonPage>
        <AdminSettingsList />
        </>
    );
};

export default AdminScheduleSubPage;