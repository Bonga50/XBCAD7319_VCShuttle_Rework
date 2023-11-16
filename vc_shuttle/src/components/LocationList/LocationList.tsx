import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { LocationHandler } from '../../Data/LocationHandler';
import { Locations } from '../../models/Locations';
import LocationDetails from '../LocationdetailsModal/LocationdetailsModal';

const LocationList: React.FC = () => {

    const [locations,setLocations] = useState<Locations[]>([]);
    const dataHandler = new LocationHandler();
    const [selectedLocation, setSelectedLocation] = useState<Locations>();
    
    useEffect(() => {
        setLocations(dataHandler.getLocations());
      }, []);

    useEffect(() => {
        console.log(selectedLocation);
      }, [selectedLocation]);
    
      function setSelectedItem(locationId: number) {
        setSelectedLocation(dataHandler.getLocationByID(locationId));
      }
      

    return (
        <div  >
            <IonList id="open-ShowLocationModal" inset={true}>
          {locations.map((locations) => (
            <IonItem button key={locations.locationId} onClick={() => setSelectedItem(locations.locationId)}>
              <IonLabel>
                {locations.locationName}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <LocationDetails location={selectedLocation}/>
        </div>
    );
};

export default LocationList;