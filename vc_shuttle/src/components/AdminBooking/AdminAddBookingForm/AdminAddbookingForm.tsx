import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

const AdminAddBookingForm: React.FC = () => {

    const [studentNumber, setStudentNumber] = useState('');
    const [schedule, setSchedule] = useState('');
    const [shuttle, setShuttle] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const saveData = () => {
        // Save data here
        console.log(studentNumber, schedule, shuttle, origin, destination);
    };
    return (
        <form>
            <h3>New Booking</h3>
            <IonContent className="ion-padding">
                <IonLabel>Student Number:</IonLabel>
                <IonInput value={studentNumber} onIonChange={e => setStudentNumber(e.detail.value||'')}></IonInput>

                <IonLabel>Schedule:</IonLabel>
                <IonInput value={schedule} onIonChange={e => setSchedule(e.detail.value||'')}></IonInput>

                <IonLabel>Shuttle:</IonLabel>
                <IonInput value={shuttle} onIonChange={e => setShuttle(e.detail.value||'')}></IonInput>

                <IonLabel>Origin:</IonLabel>
                <IonInput value={origin} onIonChange={e => setOrigin(e.detail.value||'')}></IonInput>

                <IonLabel>Destination:</IonLabel>
                <IonInput value={destination} onIonChange={e => setDestination(e.detail.value||'')}></IonInput>

                <IonButton expand="full" onClick={saveData}>Save</IonButton>
            </IonContent>
        </form>
    );
};

export default AdminAddBookingForm;