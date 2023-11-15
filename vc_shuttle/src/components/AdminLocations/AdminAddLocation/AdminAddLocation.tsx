import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { LocationHandler } from '../../../Data/LocationHandler';

const AdminAddLocation: React.FC = () => {


    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [description, setDescription] = useState('');
    const [locationName, setLocationName] = useState('');
    const locationDataHandler = LocationHandler.getInstance();

    const handleSubmit = () => {
        const locationId = locationDataHandler.generateRandomLocationID(); // Generate a random ID
        const location = {
            locationId,
            latitude,
            longitude,
            description,
            locationName,
        };
        console.log(location);
        // You can now pass 'location' to your data handler for further processing
    };

    return (
        <div>
            <IonItem>
                <IonLabel position="stacked">Location Name</IonLabel>
                <IonInput
                    label=""
                    value={locationName}
                    onIonChange={(e) => setLocationName(e.detail.value!)}
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Latitude</IonLabel>
                <IonInput
                    label=""
                    type="number"
                    value={latitude}
                    onIonChange={(e) => setLatitude(parseFloat(e.detail.value!))}
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Longitude</IonLabel>
                <IonInput
                    label=""
                    type="number"
                    value={longitude}
                    onIonChange={(e) => setLongitude(parseFloat(e.detail.value!))}
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Description</IonLabel>
                <IonInput
                    label=""
                    value={description}
                    onIonChange={(e) => setDescription(e.detail.value!)}
                ></IonInput>
            </IonItem>
            <IonButton expand="full" onClick={handleSubmit}>
                Submit
            </IonButton>
        </div>
    );
};

export default AdminAddLocation;