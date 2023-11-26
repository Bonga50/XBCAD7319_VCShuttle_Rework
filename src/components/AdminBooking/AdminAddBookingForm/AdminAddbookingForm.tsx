import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import ScheduleDropDown from '../../ScheduleDropDown/ScheduleDropDown';
import LoctionDropDownForm from '../../LocationDropDown/LocationDropdownForm';
import { BookDataHandler } from '../../../Data/BookDataHandler';
import ShuttleDropDown from '../../ShuttleDropDown/ShuttleDropDownForm';
import AdminViewBookingDetails from '../AdminVIewBookingDetails/AdminViewBookingDetails';
import { useHistory } from 'react-router';
import AvailableShuttleDropDown from '../../AvailableDriverShuttle/AvailableShuttleDropDownForm';
import DriverRouteDropDown from '../../DriverRouterDropDown/DriverRouterDropDown';

const AdminAddBookingForm: React.FC = () => {

  const bookingDataHandler = BookDataHandler.getInstance();
  const [selectedDriverRoute, setSelectedDriverRoute] = useState<string | null>(
    null
  );
  const [selectedShuttle, setSelectedShuttle] = useState<number | null>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<number | null>(null);
  const [selectedStartLocation, setSelectedStartLocation] = useState<
    number | null
  >(null);
  const [selectedEndLocation, setSelectedEndLocation] = useState<number | null>(
    null
  );
  const [studentNumber, setStudentNumber] = useState<string | null>(
    null
  );
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Save data here
        console.log(studentNumber, selectedSchedule, selectedShuttle, selectedStartLocation, selectedEndLocation);
        if (
          selectedShuttle === null||
          selectedSchedule === null ||
          selectedStartLocation === null ||
          selectedEndLocation === null||
          selectedDriverRoute===null
        ) {
          console.error("Please select all values.");
        } else {
          event.preventDefault();
    
          const newBooking = {
            bookingid: bookingDataHandler.generateBookingID(), // adjust as needed
            userId:studentNumber!!,
            session: selectedSchedule, // adjust as needed
            shuttleID: selectedShuttle, // adjust as needed
            bookingStatus: "Active", // adjust as needed
            startLocation: selectedStartLocation, // adjust as needed
            endLocation: selectedEndLocation, // adjust as needed
            bookingTime: new Date(), // adjust as needed
            tripId:selectedDriverRoute
          };
          bookingDataHandler.addBookingsForUser(newBooking);
          history.push('/');
    };
  }
    return (
      <form onSubmit={handleSubmit}>
        <div className="ion-padding">
          <IonSearchbar className="ion-padding"></IonSearchbar>
          <IonLabel>Student Numbe/email :</IonLabel>
          <IonInput 
            className='ion-padding'
            value={studentNumber}
            onIonChange={(e) => setStudentNumber(e.detail.value || "")}
          ></IonInput>
            <ScheduleDropDown onScheduleSelect={setSelectedSchedule} />
          <IonLabel>Start location</IonLabel>.
          <LoctionDropDownForm onLocationSelect={setSelectedStartLocation} />
          <IonLabel>End location</IonLabel>
          <LoctionDropDownForm onLocationSelect={setSelectedEndLocation} />
          <DriverRouteDropDown onDriverRouteSelect={setSelectedDriverRoute}
           startLocation={selectedStartLocation?selectedStartLocation:0} 
          endLocation={selectedEndLocation?selectedEndLocation:0} />

            <AvailableShuttleDropDown onShuttleSelect={setSelectedShuttle} 
            sessionId={selectedSchedule?selectedSchedule:0} 
            startLocation={selectedStartLocation?selectedStartLocation:0} 
            endLocation={selectedEndLocation?selectedEndLocation:0} />
          <IonButton expand="full"  type="submit" >
            Save
          </IonButton>
        </div>
       
      </form>
    );
};

export default AdminAddBookingForm;