import { IonButton, IonButtons, IonContent, IonHeader, IonLabel, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef } from 'react';
import { Schedule } from '../../../models/Schedule';
interface AdminViewScheduleDetailsProps {
    schedule: Schedule | undefined;
}
const AdminViewScheduleDetails: React.FC<AdminViewScheduleDetailsProps> = ({schedule}: {schedule: Schedule|undefined}) => {

    const modal = useRef<HTMLIonModalElement>(null);

    


    return (
        <IonModal ref={modal} trigger="open-AddScheduleModal">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton onClick={() => modal.current?.dismiss()}>
                        Cancel
                    </IonButton>
                </IonButtons>
                <IonTitle>Schedule Details</IonTitle>
               
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonLabel>Schedule ID: {schedule ? schedule.scheduleID : 'N/A'}</IonLabel>
            <br/>
            <IonLabel>Schedule Name: {schedule ? schedule.scheduleName : 'N/A'}</IonLabel>
            <br/>
            <IonLabel>Start Time: {schedule ? new Date(schedule.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A'}</IonLabel>
            <br/>
            <IonLabel>End Time: {schedule ? new Date(schedule.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })    : 'N/A'}</IonLabel>
            <br/>
            
        </IonContent>
    </IonModal>
    );
};

export default AdminViewScheduleDetails;