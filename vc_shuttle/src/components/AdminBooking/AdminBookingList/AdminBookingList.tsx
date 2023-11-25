import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import AdminViewBookingDetails from '../AdminVIewBookingDetails/AdminViewBookingDetails';
import { BookDataHandler } from '../../../Data/BookDataHandler';
import { Booking } from '../../../models/Booking';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { DriverRouteHandler } from '../../../Data/DriverRoutehandler';
import { LocationHandler } from '../../../Data/LocationHandler';

const AdminBookingList: React.FC = () => {

      
    const [bookings,setBookings] = useState<Booking[]>([]);
    const [activebookings,setActiveBookings] = useState<Booking[]>([]);
    const dataHandler = BookDataHandler.getInstance();
    const routerdataHandler = DriverRouteHandler.getInstance();
    const locationdataHandler = LocationHandler.getInstance();


    const [selectedBookings,setSelectedBooking] = useState<Booking>();

    useEffect(() => {
      const fetchBooking = async () => {
        setBookings(await dataHandler.());
      }
      fetchBooking();
        setActiveBookings(dataHandler.getActiveBookings());
      }, []);

      const modal = useRef<HTMLIonModalElement>(null);
      const input = useRef<HTMLIonInputElement>(null);
    
      const [message, setMessage] = useState(
        'This modal example uses triggers to automatically open a modal when the button is clicked.'
      );
    
      function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
      }

      function setSelectedItem(id:string){
        setSelectedBooking(dataHandler.getBookingById(id))
        console.log(selectedBookings);
      }
    
      function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
          setMessage(`Hello, ${ev.detail.data}!`);
          
        }
      }
    

    return (
        <div>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Bookings</IonTitle>
                </IonToolbar>
                <IonButtons slot="End">
                    <IonButton routerLink="AdminAddBooking">ADD</IonButton>
                </IonButtons>
                <IonToolbar>
                    <IonSearchbar></IonSearchbar>
                </IonToolbar>
            </IonHeader>

            <IonList id="open-AddBookingmodal" inset={true}>
        {bookings.map((bookings) => (
            <IonItem button key={bookings.bookingid}  onClick={() => setSelectedItem(bookings.bookingid)} >
              <IonLabel>
                {bookings.bookingid}
              </IonLabel>
              <IonLabel>
                {locationdataHandler.getLocationByID(bookings.startLocation)?.locationName} to 
                {locationdataHandler.getLocationByID(bookings.endLocation)?.locationName}
              </IonLabel>
              <IonLabel>
                {bookings.userId} 
              </IonLabel>
            </IonItem>
          ))}
               
        </IonList>

        <AdminViewBookingDetails booking={selectedBookings!!} />
      

        </div>
    );
};

export default AdminBookingList;