import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { DriverRouteHandler } from '../../Data/DriverRoutehandler';
import { DriverRoute } from '../../models/DriverRoute';
interface ContainerProps {
    startLocationId: number;
    endLocationId: number;
  }
  
const StudentSchedules: React.FC<ContainerProps> = ({ startLocationId, endLocationId }) => {

    const [driverRoutes, setDriverRoutes] = useState<DriverRoute[]>([]);
    const routeHandler = new DriverRouteHandler();

    useEffect(() => {
        setDriverRoutes(routeHandler.getRoutesByStartAndEndLocation(startLocationId, endLocationId));
    }, [startLocationId, endLocationId]);

    return (
      <div className="ion-padding">
        <IonList>
          {driverRoutes.map((route) => (
            <IonItem key={route.driverRouteID}>
              <IonLabel>
                {route.driverName}
              </IonLabel>
              <IonLabel>
                {route.startLocationID} to {route.endLocationID}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </div>
    );
};

export default StudentSchedules;