import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {BookDataHandler} from '../../Data/BookDataHandler';
import {Booking} from '../../models/Booking';

interface ContainerProps { }
const StudentBookingListForm: React.FC<ContainerProps> = () => {

    
    const [bookings,setBookings] = useState<Booking[]>([]);
    const [activebookings,setActiveBookings] = useState<Booking[]>([]);
    const dataHandler = BookDataHandler.getInstance();

    useEffect(() => {
        setBookings(dataHandler.getBookings());
        setActiveBookings(dataHandler.getActiveBookings());
      }, []);
    
      

    return (
      <div>
        <IonText className="ion-padding">Active</IonText>
        <IonList inset={true}>
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
        <IonList inset={true}>
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