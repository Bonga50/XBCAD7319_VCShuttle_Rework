import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { ScheduleDataHandler } from '../../../Data/ScheduleDataHandler';
import { Schedule } from '../../../models/Schedule';
import AdminViewScheduleDetails from '../AdminViewScheduleDetails/AdminViewScheduleDetails';

const AdminViewScheduleList: React.FC = () => {

    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const dataHandler = ScheduleDataHandler.getInstance(); // Replace with your actual data handler
    const [selectedSchedule, setSelectedSchedule] = useState<Schedule>();

    useEffect(() => {
        setSchedules(dataHandler.getSchedules());
    }, []);

    useEffect(() => {
        console.log(selectedSchedule);
    }, [selectedSchedule]);

    function setSelectedItem(scheduleID: number) {
        setSelectedSchedule(dataHandler.getScheduleByID(scheduleID));
    }

    return (
        <div>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Schedules</IonTitle>
            </IonToolbar>
            <IonButtons slot="end">
                <IonButton routerLink="/AdminAddSchedules">ADD</IonButton> {/* Update the routerLink */}
            </IonButtons>
            <IonToolbar>
                <IonSearchbar></IonSearchbar>
            </IonToolbar>
        </IonHeader>

        <IonList id="open-AddScheduleModal" inset={true}>
            {schedules.map((schedule) => (
                <IonItem button key={schedule.scheduleID} onClick={() => setSelectedItem(schedule.scheduleID)}>
                    <IonLabel>{schedule.scheduleName}</IonLabel>
                </IonItem>
            ))}
        </IonList>

        {selectedSchedule && <AdminViewScheduleDetails schedule={selectedSchedule} />} {/* Update with your schedule details component */}
    </div>
    );
};

export default AdminViewScheduleList;