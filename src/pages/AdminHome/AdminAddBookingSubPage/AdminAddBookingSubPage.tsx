import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminAddBookingForm from '../../../components/AdminBooking/AdminAddBookingForm/AdminAddbookingForm';
import { UserDataHandler } from '../../../Data/UserDataHandler';
import { Redirect } from 'react-router';

const AdminAddBookingSubPage: React.FC = () => {
    const userdataHandler = UserDataHandler.getInstance();
    if (userdataHandler.getLoggedRole() !== "admin") {
      return <Redirect to="/" />;
    }
    return (
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                    <IonTitle>add booking</IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonContent >
                <AdminAddBookingForm/>
            </IonContent>
        </IonPage>
    );
};

export default AdminAddBookingSubPage;