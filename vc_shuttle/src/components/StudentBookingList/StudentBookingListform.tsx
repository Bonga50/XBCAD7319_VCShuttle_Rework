import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {BookDataHandler} from '../../Data/BookDataHandler';
import {Booking} from '../../models/Booking';

interface ContainerProps { }
const StudentBookingListForm: React.FC<ContainerProps> = () => {

    
    const [bookings,setBookings] = useState<Booking[]>([]);
    const [activebookings,setActiveBookings] = useState<Booking[]>([]);
    const dataHandler = new BookDataHandler();

    useEffect(() => {
        setBookings(dataHandler.getBookings());
        
      }, []);
      useEffect(() => {
        setActiveBookings(dataHandler.getActiveBookings());
      }, []);
      

    return (
      <div>
        <IonText className="ion-padding">Active</IonText>
        <IonList>
        {activebookings.map((activebookings) => (
            <IonItem key={activebookings.bookingId}>
              <IonLabel>
                {activebookings.session}
              </IonLabel>
              <IonLabel>
                {activebookings.startLocation} to {activebookings.endLocation}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonText className="ion-padding">All Bookings</IonText>
        <IonList>
        {bookings.map((bookings) => (
            <IonItem key={bookings.bookingId}>
               
              <IonLabel>
                {bookings.session}
              </IonLabel>
              <IonLabel>
                {bookings.startLocation} to {bookings.endLocation}
              </IonLabel>
              <IonLabel>
                {bookings.bookingStatus} 
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </div>
    );
};

export default StudentBookingListForm;