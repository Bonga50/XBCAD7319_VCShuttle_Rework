import {
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useState } from "react";

const AdminAddSchedule: React.FC = () => {
  const [scheduleID, setScheduleID] = useState<number>(0);
  const [scheduleName, setScheduleName] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const handleSubmit = () => {
    // Handle form submission here
    console.log({
      scheduleID,
      scheduleName,
      startTime: new Date(startTime),
      endTime: new Date(endTime)
    });
  };

  return (
    <div>
      <IonItem>
        <IonLabel position="stacked">Schedule ID</IonLabel>
        <IonInput
          value={scheduleID}
          onIonChange={(e) => setScheduleID(Number(e.detail.value!))}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Schedule Name</IonLabel>
        <IonInput
          value={scheduleName}
          onIonChange={(e) => setScheduleName(e.detail.value!)}
        ></IonInput>
      </IonItem>

      <IonLabel position="stacked">Start Time</IonLabel>
      <IonItem>
        <IonDatetime
          presentation="time"
          value={startTime}
          onIonChange={(e) =>
            setStartTime(
              Array.isArray(e.detail.value)
                ? e.detail.value[0]
                : e.detail.value!!
            )
          }
        ></IonDatetime>
      </IonItem>

      <IonLabel position="stacked">End Time</IonLabel>
      <br/>
      <IonItem>
       
        <IonDatetime
          presentation="time"
          value={endTime}
          onIonChange={(e) =>
            setEndTime(
              Array.isArray(e.detail.value)
                ? e.detail.value[0]
                : e.detail.value!!
            )
          }
        ></IonDatetime>
      </IonItem>

      <IonButton expand="full" onClick={handleSubmit}>
        Submit
      </IonButton>
    </div>
  );
};

export default AdminAddSchedule;
