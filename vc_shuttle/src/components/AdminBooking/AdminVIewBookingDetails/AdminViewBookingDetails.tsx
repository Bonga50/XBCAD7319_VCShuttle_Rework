import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { Booking } from '../../../models/Booking';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
interface ContainerProps { 
    booking: Booking;
}

const AdminViewBookingDetails: React.FC<ContainerProps>  = ({booking}: {booking: Booking|undefined}) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

   
      
        const [message, setMessage] = useState(
          'This modal example uses triggers to automatically open a modal when the button is clicked.'
        );
      
        function confirm() {
          modal.current?.dismiss(input.current?.value, 'confirm');
        }
      
        function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
          if (ev.detail.role === 'confirm') {
            setMessage(`Hello, ${ev.detail.data}!`);
          }
        }


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
        // <IonPage>
        //     <IonHeader>
        //         <IonToolbar>
        //             <IonTitle>Page Title</IonTitle>
        //         </IonToolbar>
        //     </IonHeader>
        //     <IonContent className="ion-padding">
        //         <IonLabel>Booking ID: {booking.bookingId}</IonLabel>
        //         <IonLabel>Session: {booking.session}</IonLabel>
        //         <IonLabel>Shuttle ID: {booking.shuttleID}</IonLabel>
        //         <IonLabel>Booking Status: {booking.bookingStatus}</IonLabel>
        //         <IonLabel>Start Location: {booking.startLocation}</IonLabel>
        //         <IonLabel>End Location: {booking.endLocation}</IonLabel>
        //         <IonLabel>Booking Time: {booking.bookingTime.toString()}</IonLabel>

        //         <IonButton expand="full" onClick={handleEdit}>Edit</IonButton>
        //         <IonButton expand="full" onClick={handleDelete}>Delete</IonButton>
        //         <IonButton expand="full" onClick={handleClose}>Close</IonButton>
        //     </IonContent>

            <IonModal ref={modal} trigger="open-AddBookingmodal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>Welcome</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Confirm
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">

          <IonLabel>Booking ID: {booking ? booking.bookingId : 'N/A'}</IonLabel>
            <IonLabel>Session: {booking ? booking.session : 'N/A'}</IonLabel>
            <IonLabel>Shuttle ID: {booking ? booking.shuttleID : 'N/A'}</IonLabel>
            <IonLabel>Booking Status: {booking ? booking.bookingStatus : 'N/A'}</IonLabel>
            <IonLabel>Start Location: {booking ? booking.startLocation : 'N/A'}</IonLabel>
            <IonLabel>End Location: {booking ? booking.endLocation : 'N/A'}</IonLabel>
            <IonLabel>Booking Time: {booking ? booking.bookingTime.toString() : 'N/A'}</IonLabel>


               <IonButton expand="full" onClick={handleEdit}>Edit</IonButton>
               <IonButton expand="full" onClick={handleDelete}>Delete</IonButton>
               <IonButton expand="full" onClick={handleClose}>Close</IonButton>
          </IonContent>
        </IonModal>




        // </IonPage>
    );
};

export default AdminViewBookingDetails;