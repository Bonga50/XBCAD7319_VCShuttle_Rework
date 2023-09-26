import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ShuttleDropDown from '../../components/ShuttleDropDown/ShuttleDropDownForm';
import ScheduleDropDown from '../../components/ScheduleDropDown/ScheduleDropDown';


const ShuttleBookingPage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Shuttle Booking</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <ShuttleDropDown/>
              <ScheduleDropDown/>
             
            </IonContent>
        </IonPage>
    );
};

export default ShuttleBookingPage;