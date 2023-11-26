import { IonButton, IonButtons, IonContent, IonHeader, IonLabel, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { Shuttle } from '../../../models/Shuttle';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
interface ContainerProps { 
    shuttle: Shuttle;
}
const AdminViewShuttleDetails: React.FC<ContainerProps> = ({shuttle}: {shuttle: Shuttle|undefined}) => {

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



    return (
        <IonModal
        ref={modal}
        trigger="open-AddShuttleModal"
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
          <IonLabel>Shuttle ID: {shuttle ? shuttle.shuttleID : "N/A"}</IonLabel>
          <br/>
          <IonLabel>Shuttle Name: {shuttle ? shuttle.shuttleName : "N/A"}</IonLabel>
          <br/>
          <IonLabel>Driver ID: {shuttle ? shuttle.driverID : "N/A"}</IonLabel>
          <br/>
          <IonLabel>Number of Seats: {shuttle ? shuttle.numberOfseats : "N/A"}</IonLabel>
          <br/>
          <IonLabel>Status: {shuttle ? shuttle.status : "N/A"}</IonLabel>
      
    
        </IonContent>
      </IonModal>
    );
};

export default AdminViewShuttleDetails;