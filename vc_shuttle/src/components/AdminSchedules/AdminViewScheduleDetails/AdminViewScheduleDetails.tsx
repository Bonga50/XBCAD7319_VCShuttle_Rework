import { IonButton, IonButtons, IonContent, IonHeader, IonLabel, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef } from 'react';
import { Schedule } from '../../../models/Schedule';
interface AdminViewScheduleDetailsProps {
    schedule: Schedule | undefined;
}
const AdminViewScheduleDetails: React.FC<AdminViewScheduleDetailsProps> = ({schedule}: {schedule: Schedule|undefined}) => {

    const modal = useRef<HTMLIonModalElement>(null);

    const handleEdit = () => {
        // Handle edit action here
    };

    const handleDelete = () => {
        // Handle delete action here
    };

    const handleClose = () => {
        // Handle close action here
    };


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
                <IonButtons slot="end">
                    <IonButton strong={true} onClick={handleClose}>
                        Close
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonLabel>Schedule ID: {schedule ? schedule.scheduleID : 'N/A'}</IonLabel>
            <IonLabel>Schedule Name: {schedule ? schedule.scheduleName : 'N/A'}</IonLabel>
            <IonLabel>Start Time: {schedule ? schedule.startTime.toISOString() : 'N/A'}</IonLabel>
            <IonLabel>End Time: {schedule ? schedule.endTime.toISOString() : 'N/A'}</IonLabel>

            <IonButton expand="full" onClick={handleEdit}>
                Edit
            </IonButton>
            <IonButton expand="full" onClick={handleDelete}>
                Delete
            </IonButton>
        </IonContent>
    </IonModal>
    );
};

export default AdminViewScheduleDetails;