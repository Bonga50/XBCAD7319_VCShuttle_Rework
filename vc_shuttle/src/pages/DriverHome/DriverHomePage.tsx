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

const DriverHomePage: React.FC = () => {
  const [selectedDriverStatus, setDriverStatus] = useState<string>();
  const [selectedRoute, setSelectedRoute] = useState<DriverRoute | null>(null);
  const [selectedDriverRouteID, setSelectedDriverRouteID] = useState<string | null>(
    null
  );
  
  const driverRouteDatahandler = DriverRouteHandler.getInstance();

  const handleDriverStatusSelect = (status: string) => {
    setDriverStatus(status);
    console.log("Selected Driver Status:", status); // Logging the selected driver status
  };

  useEffect(() => {
    
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
          <DriverAllRouteDropDown shuttleId={1} onDriverRouteSelect={setSelectedDriverRouteID}/>

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
