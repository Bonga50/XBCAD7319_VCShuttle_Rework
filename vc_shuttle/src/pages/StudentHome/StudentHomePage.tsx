import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import ShuttleDropDown from "../../components/ShuttleDropDown/ShuttleDropDownForm";
import ShuttleDetailsForm from "../../components/ShuttleDetailsForm/ShuttleDetailsFrom";
import BookingListForm from "../../components/BookingListForm/BookingListForm";
import listIcon from "../../resources/images/listicon.png";
import clockIcon from "../../resources/images/clockicon.png";
import mapPinicon from "../../resources/images/mapblackpin.png";
import StudentSettings from "../../components/StudentSettings/StudentSettings";
import { DriverRouteHandler } from "../../Data/DriverRoutehandler";
import { DriverRoute } from "../../models/DriverRoute";
import { BookDataHandler } from "../../Data/BookDataHandler";
import LoctionDropDownForm from "../../components/LocationDropDown/LocationDropdownForm";
import DriverRouteDropDown from "../../components/DriverRouterDropDown/DriverRouterDropDown";
import "./StudentHomePage.css";
const StudentHome: React.FC = () => {
  const [selectedShuttle, setSelectedShuttle] = useState<number | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<DriverRoute | null>(null);

  const [selectedStartLocation, setSelectedStartLocation] = useState<
    number | null
  >(null);
  const [selectedEndLocation, setSelectedEndLocation] = useState<number | null>(
    null
  );
  const [selectedDriverRouteID, setSelectedDriverRouteID] = useState<
    string | null
  >(null);

  const routedataHandler = DriverRouteHandler.getInstance();
  const bookingdataHandler = BookDataHandler.getInstance();

  useEffect(() => {
    if (selectedDriverRouteID) {
      console.log("Selected Route id " + selectedDriverRouteID);
      const foundRoute = routedataHandler.getByDriverRouteID(
        selectedDriverRouteID
      );
      setSelectedRoute(foundRoute!!);
      console.log("Selected Route" + foundRoute?.departureTime);
    }
  }, [selectedDriverRouteID]);

  return (
    <>
      <IonPage id="main-studentcontent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <section>
          <IonLabel className="ion-padding textio">Start location</IonLabel>
            <section className="sectionio ion-padding">
              <LoctionDropDownForm 
                onLocationSelect={setSelectedStartLocation}
              />
              <IonButton routerLink="/ShuttleBooking" className="ion-padding">
                Book
              </IonButton>
            </section>
            <IonLabel className="ion-padding textiog">End location</IonLabel>
            <div className="ion-padding">
            <LoctionDropDownForm onLocationSelect={setSelectedEndLocation} />
            </div>
            <div className="ion-padding">
              
              <DriverRouteDropDown
                onDriverRouteSelect={setSelectedDriverRouteID}
                startLocation={
                  selectedStartLocation ? selectedStartLocation : 0
                }
                endLocation={selectedEndLocation ? selectedEndLocation : 0}
              />
            </div>
          </section>

          <ShuttleDetailsForm
            trip={selectedRoute ? selectedRoute : undefined}
          />
          <div className="button-container">
            {/* Button to show list of Bookings */}
            <IonButton routerLink="/StudentBookingList">
              <div>
                <img src={listIcon} height="48px" alt="Bookings" />
              </div>
            </IonButton>
            {/* Button to show list of Locations */}
            <IonButton routerLink="/LocationsList">
              <div>
                <img src={mapPinicon} height="48px" alt="Locations" />
              </div>
            </IonButton>
            {/* Button to show list of past schedules */}
            <IonButton routerLink="/StudentScheduledTrips">
              <div>
                <img src={clockIcon} height="48px" alt="Schedules" />
              </div>
            </IonButton>
          </div>
          <BookingListForm />
        </IonContent>
      </IonPage>
      <StudentSettings />
    </>
  );
};

export default StudentHome;
