import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const StudentSettings: React.FC = () => {
  return (
    <div>
      <IonMenu contentId="main-studentcontent">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/StudentHome">Home</IonItem>
            <IonItem routerLink="/StudentBookingList">Bookings</IonItem>
            <IonItem routerLink="/LocationsList">Locations</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </div>
  );
};

export default StudentSettings;
