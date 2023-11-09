import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Booking } from '../../../models/Booking';
interface ContainerProps { 
    booking: Booking;
}

const AdminViewBookingDetails: React.FC<ContainerProps>  = ({booking}: {booking: Booking}) => {
    const handleEdit = () => {
        // Handle edit action here
    };

    const handleDelete = () => {
        // Handle delete action here
    };

    const handleClose = () => {
        // Handle close action here
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLabel>Booking ID: {booking.bookingId}</IonLabel>
                <IonLabel>Session: {booking.session}</IonLabel>
                <IonLabel>Shuttle ID: {booking.shuttleID}</IonLabel>
                <IonLabel>Booking Status: {booking.bookingStatus}</IonLabel>
                <IonLabel>Start Location: {booking.startLocation}</IonLabel>
                <IonLabel>End Location: {booking.endLocation}</IonLabel>
                <IonLabel>Booking Time: {booking.bookingTime.toString()}</IonLabel>

                <IonButton expand="full" onClick={handleEdit}>Edit</IonButton>
                <IonButton expand="full" onClick={handleDelete}>Delete</IonButton>
                <IonButton expand="full" onClick={handleClose}>Close</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default AdminViewBookingDetails;