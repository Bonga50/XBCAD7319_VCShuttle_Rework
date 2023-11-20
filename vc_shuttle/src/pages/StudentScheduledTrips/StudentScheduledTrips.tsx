import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import LoctionDropDownForm from '../../components/LocationDropDown/LocationDropdownForm';
import StudentSchedules from '../../components/StudentSchedules/StudentSchedules';
import StudentSettings from '../../components/StudentSettings/StudentSettings';

const StudentScheduledTrips: React.FC = () => {

    const [selectedStartLocation, setSelectedStartLocation] = useState<number | null>(null);
    const [selectedEndLocation, setSelectedEndLocation] = useState<number | null>(null);

    return (
        <>
        <IonPage id="main-studentcontent">
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
                    <IonTitle>Trips</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            Start Location 
                <LoctionDropDownForm onLocationSelect={setSelectedStartLocation}/>
                End Location 
                <LoctionDropDownForm onLocationSelect={setSelectedEndLocation}/>
                Trips
                <StudentSchedules startLocationId={selectedStartLocation?selectedStartLocation:1} endLocationId={selectedEndLocation?selectedEndLocation:2}/>
            </IonContent>
        </IonPage>
        <StudentSettings/>
        </>
    );
};

export default StudentScheduledTrips;