import { IonContent, IonHeader, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Locations } from '../../models/Locations';
import { LocationHandler } from '../../Data/LocationHandler';
interface LoctionDropDownFormProps {
    onLocationSelect: (locationId: number) => void;
}
const LoctionDropDownForm: React.FC<LoctionDropDownFormProps>= ({ onLocationSelect }) => {

    const [locations,setLocation] = useState<Locations[]>([]);
    const dataHandler = new LocationHandler();

    useEffect(() => {
        setLocation(dataHandler.getLocations());
      }, []);

    return (
        <div>
        <IonList>
            <IonItem className='ion-padding'>
                <IonSelect aria-label="Locations" placeholder="Select a Location" onIonChange={e => onLocationSelect(e.detail.value)}>
                    {locations.map((locations) => (
                    <IonSelectOption key={locations.locationId} value={locations.locationId} >
                      {locations.locationName}
                    </IonSelectOption>
                    ))}
                </IonSelect>
            </IonItem>
        </IonList> 
    </div>
    );
};

export default LoctionDropDownForm;