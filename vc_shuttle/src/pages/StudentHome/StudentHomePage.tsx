import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ShuttleDropDown from '../../components/ShuttleDropDown/ShuttleDropDownForm';
import ShuttleDetailsForm from '../../components/ShuttleDetailsForm/ShuttleDetailsFrom';
import BookingListForm from '../../components/BookingListForm/BookingListForm';
const StudentHome: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton routerLink='/ShuttleBooking' className='ion-padding'>Book</IonButton>
                <ShuttleDropDown/>
                <ShuttleDetailsForm/>
                <BookingListForm/>
            </IonContent>
        </IonPage>
    );
};

export default StudentHome;