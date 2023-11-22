import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonHeader,  IonProgressBar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import busIcon from '../../resources/images/iconbus.png'
import { DriverRoute } from '../../models/DriverRoute';
import { Locations } from '../../models/Locations';
import { ShuttleDataHandler } from '../../Data/ShuttleDataHandler';
import { LocationHandler } from '../../Data/LocationHandler';
import { DriverRouteHandler } from '../../Data/DriverRoutehandler';
import { BookDataHandler } from '../../Data/BookDataHandler';
import { ScheduleDataHandler } from '../../Data/ScheduleDataHandler';
import { Schedule } from '../../models/Schedule';

interface ContainerProps { 
    trip : DriverRoute | undefined
}
const ShuttleDetailsForm: React.FC<ContainerProps> = ({trip}: {trip: DriverRoute|undefined}) => {

    const [startLocation, setStartLocation] = useState<Locations>();
    const [endLocation, setEndLocation] = useState<Locations>();
    const [numberOfSeats, setnumberOfSeats] = useState<number>();
    const [numberOfBookedSeats, setnumberOfBookedSeats] = useState<number>();
    const [selectedschedule, setSelectedschedule] = useState<Schedule>();
    const shuttledataHandler = ShuttleDataHandler.getInstance();
    const boookingdataHandler = BookDataHandler.getInstance();
    const routedataHandler = DriverRouteHandler.getInstance();
    const locationdataHandler = LocationHandler.getInstance();
    const scheduledataHandler = ScheduleDataHandler.getInstance();


    useEffect(() => {
        setStartLocation(locationdataHandler.getLocationByID(trip? trip.startLocationID:1));
        setEndLocation(locationdataHandler.getLocationByID(trip? trip.endLocationID:1));
        setnumberOfBookedSeats(boookingdataHandler.getActiveBookingsCount(trip? trip.shuttleID:1));
        setnumberOfSeats(shuttledataHandler.getSeatsByShuttleID(trip? trip.shuttleID:1));
        setSelectedschedule(scheduledataHandler.getScheduleByID(trip? trip.scheduleID:1));
      }, [trip]);


    return (
        <div>
            <IonCard>
                <IonHeader title="Title">
                    <IonCardTitle className='ion-padding'>
                    <div>
                        <img src={busIcon} alt='BusIcon'/>
                    </div>
                    {trip ? numberOfBookedSeats: 'N/A'} / {trip ? numberOfSeats: 'N/A'} Seats
                    </IonCardTitle>
                    </IonHeader>
                <IonCardSubtitle className='ion-padding'> {trip ? startLocation!!.locationName : 'N/A'} - {trip ? endLocation!!.locationName : 'N/A'}</IonCardSubtitle>
                <IonProgressBar>https://ionicframework.com/docs/api/progress-bar</IonProgressBar>
                <IonCardContent>
                {trip ? selectedschedule!!.startTime.getHours(): 'N/A'}:{trip ? selectedschedule!!.startTime.getMinutes(): 'N/A'} 
                - {trip ? selectedschedule!!.endTime.getHours(): 'N/A'}:{trip ? selectedschedule!!.endTime.getMinutes(): 'N/A'}
                </IonCardContent>
                    <IonButton routerLink='/StudentMap' className='ion-padding'>Track</IonButton>
            </IonCard>
        </div>
    );
};

export default ShuttleDetailsForm;