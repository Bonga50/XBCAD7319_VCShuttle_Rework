import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ShuttleDropDown from "../../components/ShuttleDropDown/ShuttleDropDownForm";
import ShuttleDetailsForm from "../../components/ShuttleDetailsForm/ShuttleDetailsFrom";
import BookingListForm from "../../components/BookingListForm/BookingListForm";
import listIcon from "../../resources/images/listicon.png";
import clockIcon from "../../resources/images/clockicon.png";
import mapPinicon from "../../resources/images/mapblackpin.png";
import StudentSettings from "../../components/StudentSettings/StudentSettings";

const StudentHome: React.FC = () => {
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
        <IonButton routerLink="/ShuttleBooking" className="ion-padding">
          Book
        </IonButton>
        <ShuttleDropDown
          onShuttleSelect={function (shuttleID: number): void {
            throw new Error("Function not implemented.");
          }}
        />

        <ShuttleDetailsForm />
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
        <IonButton>
          <div>
            <img src={clockIcon} height="48px" alt="Schedules" />
          </div>
        </IonButton>
        <BookingListForm />
      </IonContent>
    </IonPage>
    <StudentSettings/>
    </>
  );
};

export default StudentHome;
