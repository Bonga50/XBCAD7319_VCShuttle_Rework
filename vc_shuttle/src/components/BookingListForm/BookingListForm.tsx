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
    const routeDataHandler = DriverRouteHandler.getInstance();
    const locationdataHandler = LocationHandler.getInstance();
      

    useEffect(() => {
        setBookings(dataHandler.getBookingsForToday(userDataHandler.getLoggedUser()!!));
      }, []);
    return (
      <div className="ion-padding">
        <IonList>
          {bookings.map((booking) => (
            <IonItem key={booking.bookingid}>
              <IonLabel>
                Departing - { new Date(routeDataHandler.getByDriverRouteID(booking.tripId)!!.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })  }
              </IonLabel>
              <IonLabel>
              { locationdataHandler.getLocationByID(booking.startLocation)?.locationName}
                 - {locationdataHandler.getLocationByID(booking.endLocation)?.locationName}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </div>
    );
};

export default BookingListForm;