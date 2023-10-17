import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ScheduleDropDown from '../../components/ScheduleDropDown/ScheduleDropDown';
import LoctionDropDownForm from '../../components/LocationDropDown/LocationDropdownForm';



const DriverCreateRoutePage: React.FC = () => {

    const [selectedSchedule, setSelectedSchedule] = useState<string | null>(null);
    const [selectedStartLocation, setSelectedStartLocation] = useState<string | null>(null);
    const [selectedEndLocation, setSelectedEndLocation] = useState<string | null>(null);

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
            </IonContent>
        </IonPage>
    );
};

export default DriverCreateRoutePage;