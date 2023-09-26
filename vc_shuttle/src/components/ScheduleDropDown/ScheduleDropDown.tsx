import {  IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { ScheduleDataHandler } from '../../Data/ScheduleDataHandler';
import { Schedule } from '../../models/Schedule';
interface ContainerProps { }
const ScheduleDropDown: React.FC<ContainerProps> = () => {

        const [schedules, setSchedules] = useState<Schedule[]>([]);
        const dataHandler = new ScheduleDataHandler();
      
        useEffect(() => {
            setSchedules(dataHandler.getSchedules());
        }, []);
      

    return (
        <div>
            <IonList>
                <IonItem className='ion-padding'>
                    <IonSelect aria-label="Schedules" placeholder="Select a Time slot">
                        {schedules.map((schedules) => (
                        <IonSelectOption key={schedules.scheduleID} value={schedules.scheduleName}>
                          {schedules.scheduleName}
                        </IonSelectOption>
                        ))}
                    </IonSelect>
                </IonItem>
            </IonList> 
        </div>
    );
};

export default ScheduleDropDown;