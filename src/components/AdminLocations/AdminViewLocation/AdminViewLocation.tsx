import { IonButton, IonButtons, IonContent, IonHeader, IonLabel, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import React, { useRef, useState } from 'react';
import { Locations } from '../../../models/Locations';

interface AdminViewLocationDetailsProps {
    location: Locations | undefined;
  }
  
const AdminViewLocation: React.FC<AdminViewLocationDetailsProps> = ({location}: {location: Locations|undefined}) => {

    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    const [message, setMessage] = useState('This modal example uses triggers to automatically open a modal when the button is clicked.');

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
            setMessage(`Hello, ${ev.detail.data}!`);
        }
    }


    return (
        <IonModal ref={modal} trigger="open-AddLocationModal"  onWillDismiss={(ev) => onWillDismiss(ev)}>
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
                <IonLabel>Location ID: {location ? location.locationId : 'N/A'}</IonLabel>
                <br/>
                <IonLabel>Location Name: {location ? location.locationName : 'N/A'}</IonLabel>
                <br/>
                <IonLabel>Latitude: {location ? location.latitude : 'N/A'}</IonLabel>
                <br/>
                <IonLabel>Longitude: {location ? location.longitude : 'N/A'}</IonLabel>
                <br/>
                <IonLabel>Description: {location ? location.description : 'N/A'}</IonLabel>

                
            </IonContent>
        </IonModal>
    );
};

export default AdminViewLocation;