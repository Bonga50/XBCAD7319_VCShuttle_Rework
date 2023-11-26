import { IonContent, IonHeader, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { DriverRouteHandler } from '../../Data/DriverRoutehandler';
import { DriverRoute } from '../../models/DriverRoute';

interface DriverRouteDropDownProps  { 
    startLocation: number;
    endLocation: number;
    onDriverRouteSelect: (driverRouteID: string) => void;
}
const DriverRouteDropDown: React.FC<DriverRouteDropDownProps> = ({startLocation, endLocation, onDriverRouteSelect}) => {

    const [driverRoutes, setDriverRoutes] = useState<DriverRoute[]>([]);
    const dataHandler = DriverRouteHandler.getInstance();
  
    useEffect(() => {
        setDriverRoutes(dataHandler.getRoutesByStartAndEndLocation(startLocation, endLocation));
    }, [startLocation, endLocation]);

    const handleDriverRouteChange = (e: CustomEvent) => {
        const selectedDriverRoute = e.detail.value as string;
        onDriverRouteSelect(selectedDriverRoute);
    };

    return (
        <div>
            <IonList>
                <IonItem className='ion-padding'>
                    <IonSelect aria-label="Driver Route" placeholder="Driver Route" onIonChange={handleDriverRouteChange}>
                        {driverRoutes.map((route) => (
                        <IonSelectOption key={route.driverRouteID} value={route.driverRouteID}>
                          {`Departure Time: ${new Date(route.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                        </IonSelectOption>
                        ))}
                    </IonSelect>
                </IonItem>
            </IonList> 
        </div>
    );
};;

export default DriverRouteDropDown;