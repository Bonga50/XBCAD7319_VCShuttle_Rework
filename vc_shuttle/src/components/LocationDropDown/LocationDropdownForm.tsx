import { IonContent, IonHeader, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Locations } from '../../models/Locations';
import { LocationHandler } from '../../Data/LocationHandler';

interface ContainerProps { }

const LoctionDropDownForm: React.FC<ContainerProps> = () => {

    const [locations,setLocation] = useState<Locations[]>([]);
    const dataHandler = new LocationHandler();

    useEffect(() => {
        setLocation(dataHandler.getLocations());
      }, []);

    return (
        <div>
        <IonList>
            <IonItem className='ion-padding'>
                <IonSelect aria-label="Locations" placeholder="Select a Location">
                    {locations.map((locations) => (
                    <IonSelectOption key={locations.locationId} value={locations.locationName}>
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