import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminAddBookingForm from '../../../components/AdminBooking/AdminAddBookingForm/AdminAddbookingForm';

const AdminAddBookingSubPage: React.FC = () => {

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