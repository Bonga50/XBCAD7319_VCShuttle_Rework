import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import AdminShuttleList from '../../../components/AdminShuttles/AdminShuttleList/AdminShuttleList';
import { Redirect } from 'react-router';
import { UserDataHandler } from '../../../Data/UserDataHandler';

const AdminShuttleSubPage: React.FC = () => {
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
              <IonTitle>Shuttles</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <AdminShuttleList/>
          </IonContent>
        </IonPage>
        <AdminSettingsList />
      </>
    );
};

export default AdminShuttleSubPage;