import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import StudentBookingListForm from '../../components/StudentBookingList/StudentBookingListform';
const StudentBookingList: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Booking list</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <StudentBookingListForm/>
            </IonContent>
        </IonPage>
    );
};

export default StudentBookingList;