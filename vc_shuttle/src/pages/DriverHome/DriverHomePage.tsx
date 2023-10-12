import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import DriverStatusDropDown from '../../components/DriverStatusDropDown/DriverStatusDropDownForm';
import DriverRouteDetailsForm from '../../components/RouteDetailsForm/DriverRouteDetailsForm';

const DriverHomePage: React.FC = () => {
    const [selectedDriverStatus, setDriverStatus] = useState<string>();

    const handleDriverStatusSelect = (status: string) => {
        setDriverStatus(status);
        console.log('Selected Driver Status:', status); // Logging the selected driver status
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Driver</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <DriverStatusDropDown onDriverStatusSelect={handleDriverStatusSelect}/>
                <IonButton routerLink='/ShuttleBooking' className='ion-padding'>ROUTE</IonButton>
                <DriverRouteDetailsForm/>
            </IonContent>
        </IonPage>
    );
};

export default DriverHomePage;