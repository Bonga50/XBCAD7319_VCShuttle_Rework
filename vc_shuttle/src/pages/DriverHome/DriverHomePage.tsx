import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import DriverStatusDropDown from "../../components/DriverStatusDropDown/DriverStatusDropDownForm";
import DriverRouteDetailsForm from "../../components/RouteDetailsForm/DriverRouteDetailsForm";
import DriverSettings from "../../components/DriverSettings/DriverSettings";
import DriverAllRouteDropDown from "../../components/DriverAllRouteDropDown/DriverAllRouteDropDown";
import { DriverRouteHandler } from "../../Data/DriverRoutehandler";
import { DriverRoute } from "../../models/DriverRoute";
import { ShuttleDataHandler } from "../../Data/ShuttleDataHandler";
import { UserDataHandler } from "../../Data/UserDataHandler";
import { BookDataHandler } from "../../Data/BookDataHandler";

const DriverHomePage: React.FC = () => {
  const [selectedDriverStatus, setDriverStatus] = useState<string>();
  const [selectedRoute, setSelectedRoute] = useState<DriverRoute | null>(null);
  const [selectedDriverRouteID, setSelectedDriverRouteID] = useState<string | null>(
    null
  );

  const [driverShuttleID, setdriverShuttleID] = useState<number>();

  
  const driverRouteDatahandler = DriverRouteHandler.getInstance();
  const shuttleDatahandler = ShuttleDataHandler.getInstance();
  const userDatahandler = UserDataHandler.getInstance();
  const bookingdataHandler = BookDataHandler.getInstance();

  const handleDriverStatusSelect = (status: string) => {
    setDriverStatus(status);
    console.log("Selected Driver Status:", status); // Logging the selected driver status
  };
  
useEffect(() => {
  console.log('useEffect 1 is running');
  console.log("Logged user" + userDatahandler.getLoggedUser());
  console.log("Driver Shuttle " + shuttleDatahandler.getShuttleByDriverID(userDatahandler.getLoggedUser()!!)?.shuttleID)
  const shuttle = shuttleDatahandler.getShuttleByDriverID(userDatahandler.getLoggedUser()!!)?.shuttleID
  setdriverShuttleID(shuttleDatahandler.getShuttleByDriverID(userDatahandler.getLoggedUser()!!)?.shuttleID)
  console.log("selected shuttle = "+ shuttle);
  driverRouteDatahandler.fetchDriverRoutes();
},[]);

  useEffect(() => {
    console.log('useEffect 2 is running');
    if (selectedDriverRouteID){
      const foundRoute = driverRouteDatahandler.getByDriverRouteID(selectedDriverRouteID)
      setSelectedRoute(foundRoute!!);
      console.log("Selected Route"+selectedRoute)
    }  
},[selectedDriverRouteID]);



  return (
    <>
      <IonPage id="main-Drivercontent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Driver</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {/* <DriverStatusDropDown
            onDriverStatusSelect={handleDriverStatusSelect}
          /> */}
          <DriverAllRouteDropDown shuttleId={driverShuttleID!!} onDriverRouteSelect={setSelectedDriverRouteID}/>

          <IonButton routerLink="/DriverCreateRoute" className="ion-padding">
            ROUTE
          </IonButton>
          <DriverRouteDetailsForm  trip={selectedRoute? selectedRoute:undefined}/>
        </IonContent>
      </IonPage>
      <DriverSettings />
    </>
  );
};

export default DriverHomePage;
