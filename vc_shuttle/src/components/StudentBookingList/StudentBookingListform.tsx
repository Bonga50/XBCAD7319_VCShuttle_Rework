import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {BookDataHandler} from '../../Data/BookDataHandler';
import {Booking} from '../../models/Booking';
import { DriverRouteHandler } from '../../Data/DriverRoutehandler';
import { LocationHandler } from '../../Data/LocationHandler';
import { UserDataHandler } from '../../Data/UserDataHandler';

interface ContainerProps { }
const StudentBookingListForm: React.FC<ContainerProps> = () => {

    
    const [bookings,setBookings] = useState<Booking[]>([]);
    const [activebookings,setActiveBookings] = useState<Booking[]>([]);
    const [routes,setRoutes] = useState<Booking[]>([]);
    
    const dataHandler = BookDataHandler.getInstance();
    const routerdataHandler = DriverRouteHandler.getInstance();
    const locationdataHandler = LocationHandler.getInstance();
    const userdataHandler = UserDataHandler.getInstance();


    useEffect(() => {
      const fetchBooking = async () => {
        setBookings(await dataHandler.getBookings());
      }
      fetchBooking();
        setActiveBookings(dataHandler.getBookingsByUserId(userdataHandler.getLoggedUser()!!));
       
      }, []);
    
      

    return (
      <div>
        <IonText className="ion-padding">Active</IonText>
        <IonList inset={true}>
        {activebookings.map((activebookings) => (
            <IonItem key={activebookings.bookingid}>
              <IonLabel>
                {activebookings.bookingid}
              </IonLabel>
              <IonLabel>
                { locationdataHandler.getLocationByID(activebookings.startLocation)?.locationName}
                 to {locationdataHandler.getLocationByID(activebookings.endLocation)?.locationName}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonText className="ion-padding">All Bookings</IonText>
        <IonList inset={true}>
        {bookings.map((bookings) => (
            <IonItem key={bookings.bookingid}>
               
              <IonLabel>
                {bookings.bookingid}
              </IonLabel>
              <IonLabel>
                { locationdataHandler.getLocationByID(bookings.startLocation)?.locationName}
                 to {locationdataHandler.getLocationByID(bookings.endLocation)?.locationName}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </div>
    );
};

export default StudentBookingListForm;