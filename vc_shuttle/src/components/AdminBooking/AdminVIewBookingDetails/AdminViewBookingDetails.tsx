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
      <IonModal
        ref={modal}
        trigger="open-AddBookingmodal"
        onWillDismiss={(ev) => onWillDismiss(ev)}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Cancel
              </IonButton>
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
          <IonLabel>Booking ID: {booking ? booking.bookingid : "N/A"}</IonLabel>
          <br/>
          <IonLabel>Session: {booking ? booking.session : "N/A"}</IonLabel>
          <br/>
          <IonLabel>Shuttle ID: {booking ? booking.shuttleID : "N/A"}</IonLabel>
          <br/>
          <IonLabel>
            Booking Status: {booking ? booking.bookingStatus : "N/A"}
          </IonLabel>
          <br/>
          <IonLabel>
            Start Location: {booking ? booking.startLocation : "N/A"}
          </IonLabel>
          <br/>
          <IonLabel>
            End Location: {booking ? booking.endLocation : "N/A"}
          </IonLabel>
          <br/>
          <IonLabel>
            Booking Time: {booking ? booking.bookingTime.toString() : "N/A"}
          </IonLabel>
          <br/>

          <IonButton expand="full" onClick={handleDelete}>
            Delete
          </IonButton>
         
        </IonContent>
      </IonModal>
    );
};

export default AdminViewBookingDetails;