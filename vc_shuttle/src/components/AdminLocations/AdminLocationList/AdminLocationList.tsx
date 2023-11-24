import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { Locations } from '../../../models/Locations';
import { LocationHandler } from '../../../Data/LocationHandler';
import AdminViewLocation from '../AdminViewLocation/AdminViewLocation';

const AdminLocationList: React.FC = () => {

    const [locations, setLocations] = useState<Locations[]>([]);
  const dataHandler = LocationHandler.getInstance(); // Replace with your actual data handler
  const [selectedLocation, setSelectedLocation] = useState<Locations>();

  const modal = useRef<HTMLIonModalElement>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      const locations =  await dataHandler.getLocations();
      setLocations(locations);
     }
     fetchLocations();  }, []);

  useEffect(() => {
    console.log(selectedLocation);
  }, [selectedLocation]);

  function setSelectedItem(locationId: number) {
    setSelectedLocation(dataHandler.getLocationByID(locationId));
  }
  
    return (
        <div>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Locations</IonTitle>
          </IonToolbar>
          <IonButtons slot="end">
            <IonButton routerLink="/AdminAddLocation">ADD</IonButton> {/* Update the routerLink */}
          </IonButtons>
          <IonToolbar>
            <IonSearchbar></IonSearchbar>
          </IonToolbar>
        </IonHeader>
  
        <IonList id="open-AddLocationModal" inset={true}>
          {locations.map((location) => (
            <IonItem button key={location.locationId} onClick={() => setSelectedItem(location.locationId)}>
              <IonLabel>{location.locationName}</IonLabel>
            </IonItem>
          ))}
        </IonList>
  
        {selectedLocation && <AdminViewLocation location={selectedLocation} />} {/* Update with your location details component */}
      </div>
    );
};

export default AdminLocationList;