import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminSettingsList from '../../../components/AdminSettingsList/AdminSettingsListComp';
import AdminBookingList from '../../../components/AdminBooking/AdminBookingList/AdminBookingList';

const AdminBookingSubPage: React.FC = () => {

    return (
        <>
        <IonPage id="main-content">
              <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Admin</IonTitle>
                    </IonToolbar>
                </IonHeader>
            <IonContent className="ion-padding">
                <AdminBookingList/>
            </IonContent>
        </IonPage>
        <AdminSettingsList/>
        </>
    );
};

export default AdminBookingSubPage;