import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import ScheduleDropDown from "../../components/ScheduleDropDown/ScheduleDropDown";
import LoctionDropDownForm from "../../components/LocationDropDown/LocationDropdownForm";
import { DriverRouteHandler } from "../../Data/DriverRoutehandler";
import { ScheduleDataHandler } from "../../Data/ScheduleDataHandler";
import { LocationHandler } from "../../Data/LocationHandler";
import DriverSettings from "../../components/DriverSettings/DriverSettings";
import { UserDataHandler } from "../../Data/UserDataHandler";
import { Redirect, useHistory } from "react-router";
import { BookDataHandler } from "../../Data/BookDataHandler";
import { MapHandler } from "../../Data/MapHandler";
import { ShuttleDataHandler } from "../../Data/ShuttleDataHandler";

const DriverCreateRoutePage: React.FC = () => {
  const userdataHandler = UserDataHandler.getInstance();
    if (userdataHandler.getLoggedRole() !== "driver") {
      return <Redirect to="/" />;
    }
  const [selectedSchedule, setSelectedSchedule] = useState<number | null>(null);
  const [selectedStartLocation, setSelectedStartLocation] = useState<
    number | null
  >(null);
  const [selectedEndLocation, setSelectedEndLocation] = useState<number | null>(
    null
  );
  const [waitTime, setSelectedWaitTime] = useState<number | null>(
    null
  );
  const driverRouteHandler = DriverRouteHandler.getInstance();
  const scheduleDataHandler = ScheduleDataHandler.getInstance();
  const locationDataHandler = LocationHandler.getInstance();
  const userDataHandler = UserDataHandler.getInstance();
  const bookingdataHandler = BookDataHandler.getInstance();
  const mapdataHandler = MapHandler.getInstance();
  const shuttleDataHandler = ShuttleDataHandler.getInstance();
  const history = useHistory();

  const handleSubmit = () => {
    if (selectedSchedule && selectedStartLocation && selectedEndLocation&&waitTime) {
      const newwaitTime = waitTime; // Replace with actual wait time
      console.log(userDataHandler.getLoggedUser()!!)
      
      const selectedSession =scheduleDataHandler.getScheduleByID(selectedSchedule);
      console.log("Selected session "+selectedSession?.startTime);
      const start = locationDataHandler.getLocationByID(selectedStartLocation);
      const end = locationDataHandler.getLocationByID(selectedEndLocation);
      const AddRouting = async () => {
        shuttleDataHandler.getShuttlesFromDatabse();
        const duration = await mapdataHandler.getTimeToGetToDestanation(start!!,end!!);
        const shuttleID = shuttleDataHandler.getShuttleByDriverID(userDataHandler.getLoggedUser()!!)?.shuttleID; 
        const routes = driverRouteHandler.generateRoutes(
          duration!!,
          newwaitTime,
          start!!,
          end!!,
          shuttleID!!,
          userDataHandler.getLoggedUser()!!,
          selectedSession!!
        );
        driverRouteHandler.fetchDriverRoutes();
      }
      AddRouting();
     
      history.push('/DriverHomePage');
    }

    
  };

  return (
    <>
      <IonPage id="main-Drivercontent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Route</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <ScheduleDropDown onScheduleSelect={setSelectedSchedule} />
          Start Location
          <LoctionDropDownForm onLocationSelect={setSelectedStartLocation} />
          End Location
          <LoctionDropDownForm onLocationSelect={setSelectedEndLocation} />
         
            <IonItem>
          <IonLabel position="stacked">Wait time (in minutes)</IonLabel>
          <IonInput
          label=''
            type="number"
            value={waitTime}
            onIonChange={(e) => setSelectedWaitTime(parseInt(e.detail.value!))}
          ></IonInput>
        </IonItem>
         <IonButton
            className="ion-margin-top"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </IonButton>
        </IonContent>
      </IonPage>
      <DriverSettings />
    </>
  );
};

export default DriverCreateRoutePage;
