import { IonContent, IonHeader, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { DriverRouteHandler } from '../../Data/DriverRoutehandler';
import { DriverRoute } from '../../models/DriverRoute';

interface DriverRouteDropDownProps  { 
    shuttleId: number;
    onDriverRouteSelect: (driverRouteID: string) => void;
}
const DriverAllRouteDropDown: React.FC<DriverRouteDropDownProps> = ({shuttleId, onDriverRouteSelect}) => {

    const dataHandler = DriverRouteHandler.getInstance();
  
    const [driverRoute, setDriverRoute] = useState<DriverRoute[]>([]);

    useEffect(() => {
       dataHandler.fetchDriverRoutes();
      setDriverRoute(dataHandler.getRoutesByShuttleID(shuttleId));
    }, []);

    const handleDriverRouteChange = (e: CustomEvent) => {
        const selectedDriverRoute = e.detail.value as string;
        onDriverRouteSelect(selectedDriverRoute);
    };

    return (
        <div>
            <IonList>
                <IonItem className='ion-padding'>
                    <IonSelect aria-label="Driver Route" placeholder="Driver Route" onIonChange={handleDriverRouteChange}>
                        {driverRoute!!.map((route) => (
                        <IonSelectOption key={route.driverRouteID} value={route.driverRouteID}>
                          {`Departure Time: ${new Date(route.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, Seats Booked: ${route.seatsBooked}`}
                        </IonSelectOption>
                        ))}
                    </IonSelect>
                </IonItem>
            </IonList> 
        </div>
    );
};;

export default DriverAllRouteDropDown;