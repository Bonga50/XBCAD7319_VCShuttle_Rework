import {IonItem, IonLabel,IonList} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Booking } from '../../models/Booking';
import { BookDataHandler } from '../../Data/BookDataHandler';
import { UserDataHandler } from '../../Data/UserDataHandler';
import { DriverRouteHandler } from '../../Data/DriverRoutehandler';

interface ContainerProps { }
const BookingListForm: React.FC<ContainerProps> = () => {

    const [bookings,setBookings] = useState<Booking[]>([]);
    const dataHandler = BookDataHandler.getInstance();
    const userDataHandler = UserDataHandler.getInstance();
    const routeDataHandler = DriverRouteHandler.getInstance();

      

    useEffect(() => {
        setBookings(dataHandler.getActiveBookings());
        dataHandler.getBookingsByUserId(userDataHandler.getLoggedUser()!!);
        
      }, []);
    return (
      <div className="ion-padding">
        <IonList>
          {bookings.map((booking) => (
            <IonItem key={booking.bookingid}>
              <IonLabel>
                {booking.bookingid}
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