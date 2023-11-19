import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ScheduleDropDown from '../../components/ScheduleDropDown/ScheduleDropDown';
import LoctionDropDownForm from '../../components/LocationDropDown/LocationDropdownForm';
import { DriverRouteHandler } from '../../Data/DriverRoutehandler';


const DriverCreateRoutePage: React.FC = () => {

    const [selectedSchedule, setSelectedSchedule] = useState<string | null>(null);
    const [selectedStartLocation, setSelectedStartLocation] = useState<string | null>(null);
    const [selectedEndLocation, setSelectedEndLocation] = useState<string | null>(null);
    const driverRouteHandler  = DriverRouteHandler.getInstance()
    const handleSubmit = () => {
        if (selectedSchedule && selectedStartLocation && selectedEndLocation) {
            const duration = 30 * 60; // Replace with actual duration
            const waitTime = 5 * 60; // Replace with actual wait time
            const shuttleID = 1; // Replace with actual shuttle ID

            const routes = driverRouteHandler.generateRoutes(duration, waitTime, selectedStartLocation, selectedEndLocation, shuttleID,"", selectedSchedule);

            // Do something with routes...
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Route</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <ScheduleDropDown onScheduleSelect={setSelectedSchedule}/>
                Start Location 
                <LoctionDropDownForm onLocationSelect={setSelectedStartLocation}/>
                End Location 
                <LoctionDropDownForm onLocationSelect={setSelectedEndLocation}/>
                <IonButton className='ion-margin-top' type='submit'  onClick={handleSubmit}>Submit</IonButton> 
            </IonContent>
        </IonPage>
    );
};

export default DriverCreateRoutePage;