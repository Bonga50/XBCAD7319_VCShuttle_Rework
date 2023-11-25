import React, { useEffect, useRef, useState } from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { Locations } from '../../../models/Locations';
import { LocationHandler } from '../../../Data/LocationHandler';
import AdminViewLocation from '../AdminViewLocation/AdminViewLocation';

const AdminLocationList: React.FC = () => {

    const [locations, setLocations] = useState<Locations[]>([]);
    const [searchTerm, setSearchTerm] = useState(''); // Add this line
    const dataHandler = LocationHandler.getInstance(); // Replace with your actual data handler
    const [selectedLocation, setSelectedLocation] = useState<Locations>();

    const modal = useRef<HTMLIonModalElement>(null);

    useEffect(() => {
        const fetchLocations = async () => {
            const locs = await dataHandler.getLocations();
            setLocations(locs);
        }
        fetchLocations();
    }, []);

    useEffect(() => {
        console.log(selectedLocation);
    }, [selectedLocation]);

    function setSelectedItem(locationId: number) {
        setSelectedLocation(dataHandler.getLocationByID(locationId));
    }

    // Filter locations based on search term
    const filteredLocations = locations.filter(location =>
        location.locationName.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    <IonSearchbar value={searchTerm} onIonChange={(e) => setSearchTerm(e.detail.value!)}></IonSearchbar>
                </IonToolbar>
            </IonHeader>

            <IonList id="open-AddLocationModal" inset={true}>
                {filteredLocations.map((location) => (
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
