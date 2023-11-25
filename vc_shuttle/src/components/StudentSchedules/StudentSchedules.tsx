import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { DriverRouteHandler } from "../../Data/DriverRoutehandler";
import { DriverRoute } from "../../models/DriverRoute";
interface ContainerProps {
  startLocationId: number;
  endLocationId: number;
}
import { LocationHandler } from "../../Data/LocationHandler";
import { UserDataHandler } from '../../Data/UserDataHandler';
import {Booking} from '../../models/Booking';

const StudentSchedules: React.FC<ContainerProps> = ({
  startLocationId,
  endLocationId,
}) => {
  const [driverRoutes, setDriverRoutes] = useState<DriverRoute[]>([]);
  const routeHandler = DriverRouteHandler.getInstance();
  const locationdataHandler = LocationHandler.getInstance();
  const userdataHandler = UserDataHandler.getInstance();
  const [bookings,setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    setDriverRoutes(
      routeHandler.getRoutesByStartAndEndLocation(
        startLocationId,
        endLocationId
      )
    );
  }, [startLocationId, endLocationId]);

  return (
    <div className="ion-padding">
      <IonList>
        {driverRoutes.map((route) => (
          <IonItem key={route.driverRouteID}>
            <IonLabel>{route.driverName}</IonLabel>
            <IonLabel>
              { locationdataHandler.getLocationByID(route.startLocationID)?.locationName}
                --to--{ locationdataHandler.getLocationByID(route.endLocationID)?.locationName}
            </IonLabel>
            <IonLabel>Leaving at ,
              {new Date(route.departureTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default StudentSchedules;
