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
import { UserDataHandler } from "../../Data/UserDataHandler";

const DriverSettings: React.FC = () => {
  const userDataHandeler = UserDataHandler.getInstance();
  const handleLogout = () => {
    // Clear local storage
    userDataHandeler.logOutUser()
    localStorage.clear();

    // You can add more logout logic here if needed
  };

  return (
    <div>
      <IonMenu contentId="main-Drivercontent">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/DriverHomePage">Home</IonItem>
            <IonItem routerLink="/DriverCreateRoute">Trips</IonItem>
            <IonItem routerLink="/" onClick={handleLogout}>
              Logout
            </IonItem>{" "}
          </IonList>
        </IonContent>
      </IonMenu>
    </div>
  );
};

export default DriverSettings;
