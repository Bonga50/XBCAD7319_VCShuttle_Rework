import {IonItem, IonLabel,IonList} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Booking } from '../../models/Booking';
import { BookDataHandler } from '../../Data/BookDataHandler';

interface ContainerProps { }
const BookingListForm: React.FC<ContainerProps> = () => {

    const [bookings,setBookings] = useState<Booking[]>([]);
    const dataHandler = new BookDataHandler();
      

    useEffect(() => {
        setBookings(dataHandler.getActiveBookings());
        dataHandler.fetchBookingsForUser("st123");
      }, []);
    return (
      <div className="ion-padding">
        <IonList>
          {bookings.map((booking) => (
            <IonItem key={booking.bookingId}>
              <IonLabel>
                {booking.session}
              </IonLabel>
              <IonLabel>
                {booking.startLocation} to {booking.endLocation}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </div>
    );
};

export default BookingListForm;