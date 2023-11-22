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
import ScheduleDropDown from "../../components/ScheduleDropDown/ScheduleDropDown";
import LoctionDropDownForm from "../../components/LocationDropDown/LocationDropdownForm";
import { DriverRouteHandler } from "../../Data/DriverRoutehandler";
import { ScheduleDataHandler } from "../../Data/ScheduleDataHandler";
import { LocationHandler } from "../../Data/LocationHandler";
import DriverSettings from "../../components/DriverSettings/DriverSettings";
import { UserDataHandler } from "../../Data/UserDataHandler";

const DriverCreateRoutePage: React.FC = () => {
  const [selectedSchedule, setSelectedSchedule] = useState<number | null>(null);
  const [selectedStartLocation, setSelectedStartLocation] = useState<
    number | null
  >(null);
  const [selectedEndLocation, setSelectedEndLocation] = useState<number | null>(
    null
  );
  const driverRouteHandler = DriverRouteHandler.getInstance();
  const scheduleDataHandler = ScheduleDataHandler.getInstance();
  const locationDataHandler = LocationHandler.getInstance();
  const userDataHandler = UserDataHandler.getInstance();
  const handleSubmit = () => {
    if (selectedSchedule && selectedStartLocation && selectedEndLocation) {
      const duration = 30 * 60; // Replace with actual duration
      const waitTime = 5 * 60; // Replace with actual wait time
      const shuttleID = 1; // Replace with actual shuttle ID
      const selectedSession =
        scheduleDataHandler.getScheduleByID(selectedSchedule);
      const start = locationDataHandler.getLocationByID(selectedStartLocation);
      const end = locationDataHandler.getLocationByID(selectedEndLocation);
      const routes = driverRouteHandler.generateRoutes(
        duration,
        waitTime,
        start!!,
        end!!,
        shuttleID,
        userDataHandler.getLoggedUser()!!,
        selectedSession!!
      );
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
