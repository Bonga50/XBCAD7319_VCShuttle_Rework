import {
    IonButton,
    IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import { Locations } from "../../models/Locations";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { MapHandler } from "../../Data/MapHandler";
import { useHistory } from "react-router";
interface ViewLocationDetailsProps {
  location: Locations | undefined;
}

const LocationDetails: React.FC<ViewLocationDetailsProps> = ({
  location,
}: {
  location: Locations | undefined;
}) => {

    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
    const mapdataHandler = MapHandler.getInstance();
    const [message, setMessage] = useState('This modal example uses triggers to automatically open a modal when the button is clicked.');

    function confirm() {
        

        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
            setMessage(`Hello, ${ev.detail.data}!`);
        }
    }
    const history = useHistory();
    const handleGoToLocations = () => {

        mapdataHandler.setTravelEndLocation(location!!);
        history.push('/MapNavigation');
        modal.current?.dismiss(input.current?.value, 'confirm');
        
    };

  


  return (
    <div>
         <IonModal ref={modal} trigger="open-ShowLocationModal"  onWillDismiss={(ev) => onWillDismiss(ev)}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => modal.current?.dismiss()}>
                            Cancel
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{location?.locationName}</IonTitle>
                    
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLabel>Location Name: {location ? location.locationName : 'N/A'}</IonLabel>
                <br/>
                <IonLabel>Latitude: {location ? location.latitude : 'N/A'}</IonLabel>
                <br/>
                <IonLabel>Longitude: {location ? location.longitude : 'N/A'}</IonLabel>
                <br/>
                <IonLabel>Description: {location ? location.description : 'N/A'}</IonLabel>

                <IonButton expand="full" onClick={handleGoToLocations}>
                    Go To Location
                </IonButton>
            </IonContent>
        </IonModal>
    </div>
  );
};

export default LocationDetails;
