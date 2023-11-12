import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AdminAddBookingForm from '../../../components/AdminBooking/AdminAddBookingForm/AdminAddbookingForm';

const AdminAddBookingSubPage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
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