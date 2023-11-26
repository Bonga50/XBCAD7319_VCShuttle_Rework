import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import StudentBookingListForm from "../../components/StudentBookingList/StudentBookingListform";
import StudentSettings from "../../components/StudentSettings/StudentSettings";
const StudentBookingList: React.FC = () => {
  return (
    <>
    <IonPage id="main-studentcontent">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Booking list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <StudentBookingListForm />
      </IonContent>
    </IonPage>
    <StudentSettings/>
    </>
  );
};

export default StudentBookingList;
