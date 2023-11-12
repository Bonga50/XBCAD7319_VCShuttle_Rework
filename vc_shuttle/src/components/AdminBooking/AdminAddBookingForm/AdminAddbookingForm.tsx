import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import ScheduleDropDown from '../../ScheduleDropDown/ScheduleDropDown';
import LoctionDropDownForm from '../../LocationDropDown/LocationDropdownForm';
import { BookDataHandler } from '../../../Data/BookDataHandler';
import ShuttleDropDown from '../../ShuttleDropDown/ShuttleDropDownForm';
import AdminViewBookingDetails from '../AdminVIewBookingDetails/AdminViewBookingDetails';

const AdminAddBookingForm: React.FC = () => {

    const [studentNumber, setStudentNumber] = useState('');
    const bookingDataHandler =  BookDataHandler.getInstance();
    const [selectedShuttle, setSelectedShuttle] = useState<number | null>(null);
    const [selectedSchedule, setSelectedSchedule] = useState<string | null>(null);
    const [selectedStartLocation, setSelectedStartLocation] = useState<string | null>(null);
    const [selectedEndLocation, setSelectedEndLocation] = useState<string | null>(null);

    const saveData = () => {
        // Save data here
        console.log(studentNumber, selectedSchedule, selectedShuttle, selectedStartLocation, selectedEndLocation);
    };
    return (
      <form>
        <div className="ion-padding">
          <IonSearchbar className="ion-padding"></IonSearchbar>
          <IonLabel>Student Number:</IonLabel>
          <IonInput
            value={studentNumber}
            onIonChange={(e) => setStudentNumber(e.detail.value || "")}
          ></IonInput>
          <ShuttleDropDown onShuttleSelect={setSelectedShuttle} />
          <ScheduleDropDown onScheduleSelect={setSelectedSchedule} />
          <IonLabel>Start location</IonLabel>.
          <LoctionDropDownForm onLocationSelect={setSelectedStartLocation} />
          <IonLabel>End location</IonLabel>
          <LoctionDropDownForm onLocationSelect={setSelectedEndLocation} />
          <IonButton expand="full" onClick={saveData}>
            Save
          </IonButton>
        </div>
       
      </form>
    );
};

export default AdminAddBookingForm;