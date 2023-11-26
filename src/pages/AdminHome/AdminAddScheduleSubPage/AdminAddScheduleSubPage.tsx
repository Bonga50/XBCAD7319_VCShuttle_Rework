import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import AdminAddSchedule from '../../../components/AdminSchedules/AdminAddSchedule/AdminAddSchedule';
import { Redirect } from 'react-router';
import { UserDataHandler } from '../../../Data/UserDataHandler';

const AdminAddScheduleSubPage: React.FC = () => {
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
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <AdminAddSchedule/>
            </IonContent>
        </IonPage>
        <AdminSettingsList />
        </>
    );
};

export default AdminAddScheduleSubPage;