import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonSegment,
  IonSegmentButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import BookingGraphComponent from "../../components/BookingsGraph/BookingGraphComponent";
import AdminSettingsList from "../../components/AdminSettingsList/AdminSettingsListComp";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import AdminBookingList from "../../components/AdminBooking/AdminBookingList/AdminBookingList";
import AdminBookingSubPage from "./AdminBookingSubPage/AdminBookingSubPage";
import { MapHandler } from "../../Data/MapHandler";
import { LocationHandler } from "../../Data/LocationHandler";
import SessionsGraph from "../../components/SessionsGraph/SessionsGraph";
import { UserDataHandler } from "../../Data/UserDataHandler";

const AdminHomePage: React.FC = () => {
  const userdataHandler = UserDataHandler.getInstance();
  if (userdataHandler.getLoggedRole() !== "admin") {
    return <Redirect to="/" />;
  }
  const [travelTimes, setTravelTimes] = useState<Map<string, number>>(
    new Map()
  );
  const mapDataHandler = MapHandler.getInstance();
  const LocationDataHandler = LocationHandler.getInstance();

  useEffect(() => {
    const fetchTravelTimes = async () => {
      const locations = await LocationDataHandler.getLocations(); // Replace this with your function to fetch locations
      const times = await mapDataHandler.getETATravelTimes(
        locations,
        "Varsity College Sandton"
      ); // Replace 'Start Location Name' with your actual start location name
      setTravelTimes(times);
    };

    fetchTravelTimes();
  }, []);
  return (
    <>
      {/* Main page here */}

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Admin</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>Bookings x Date </p>
          <BookingGraphComponent />
          <br />
          <p>Estimated travel time </p>
          <ul>
            {Array.from(travelTimes, ([key, value]) => {
              const [startId, endId] = key.split("-").map(Number);
              const startLocationName =
                LocationDataHandler.getLocationByID(startId)?.locationName;
              const endLocationName =
                LocationDataHandler.getLocationByID(endId)?.locationName;
              return (
                <li key={key}>
                  {startLocationName}-{endLocationName}:{" "}
                  {mapDataHandler.formatDuration(value)}
                </li>
              );
            })}
          </ul>
          <br />
          <p>Peak hours </p>
          <SessionsGraph />
        </IonContent>
      </IonPage>
      <AdminSettingsList />
    </>
  );
};

export default AdminHomePage;
