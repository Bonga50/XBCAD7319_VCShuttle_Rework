import {IonItem, IonLabel,IonList} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Booking } from '../../models/Booking';
import { BookDataHandler } from '../../Data/BookDataHandler';
import { UserDataHandler } from '../../Data/UserDataHandler';
import { DriverRouteHandler } from '../../Data/DriverRoutehandler';
import { LocationHandler } from '../../Data/LocationHandler';

interface ContainerProps { }
const BookingListForm: React.FC<ContainerProps> = () => {

    const [bookings,setBookings] = useState<Booking[]>([]);
    const dataHandler = BookDataHandler.getInstance();
    const userDataHandler = UserDataHandler.getInstance();
    const bookDataHandler = BookDataHandler.getInstance();
    const locationDataHandler = LocationHandler.getInstance();

    const routeDataHandler = DriverRouteHandler.getInstance();


    useEffect(() => {
        dataHandler.fetchBookings();
        const fetchBook = async () => {
          const activeBook = await dataHandler.getActiveBookings(userDataHandler.getLoggedUser()!!)
          setBookings(activeBook);
        }

        fetchBook();
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
                {locationDataHandler.getLocationByID(booking.startLocation)?.locationName}
                 - {locationDataHandler.getLocationByID(booking.endLocation)?.locationName}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </div>
    );
};

export default BookingListForm;