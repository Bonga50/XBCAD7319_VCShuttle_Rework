import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Shuttle } from '../../../models/Shuttle';
import { ShuttleDataHandler } from '../../../Data/ShuttleDataHandler';

const AdminAddSuttleForm: React.FC = () => {
    const [shuttleName, setShuttleName] = useState('');
    const [driverID, setDriverID] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState(0);
    const [status, setStatus] = useState('');
    const shuttleDataHandler =  ShuttleDataHandler.getInstance();
    
    const handleSubmit = () => {
        const shuttleID = shuttleDataHandler.generateRandomShuttleID(); // Generate a random ID
        const shuttle: Shuttle = {
          shuttleID,
          shuttleName,
          driverID,
          numberOfseats: numberOfSeats,
          status,
        };
        console.log(shuttle);
      };
    

    return (
      <div>
        <IonItem>
          <IonLabel position="stacked">Shuttle Name</IonLabel>
          <IonInput
          label=''
            value={shuttleName}
            onIonChange={(e) => setShuttleName(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Driver ID</IonLabel>
          <IonInput
          label=''
            value={driverID}
            onIonChange={(e) => setDriverID(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Number of Seats</IonLabel>
          <IonInput
          label=''
            type="number"
            value={numberOfSeats}
            onIonChange={(e) => setNumberOfSeats(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Status</IonLabel>
          <IonInput
          label=''
            value={status}
            onIonChange={(e) => setStatus(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonButton expand="full" onClick={handleSubmit}>
          Submit
        </IonButton>
      </div>
    );
};

export default AdminAddSuttleForm;