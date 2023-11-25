import {  IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { ScheduleDataHandler } from '../../Data/ScheduleDataHandler';
import { Schedule } from '../../models/Schedule';
interface ScheduleDropDownProps  { 
    onScheduleSelect: (scheduleName: number) => void;
}
const ScheduleDropDown: React.FC<ScheduleDropDownProps>  = ({ onScheduleSelect })=> {

        const [schedules, setSchedules] = useState<Schedule[]>([]);
        const dataHandler = new ScheduleDataHandler();
      
        useEffect(() => {
           
            const fetchSchedules= async () => {
                const allSchedules = await dataHandler.getSchedules();
                setSchedules(allSchedules);
              }
              fetchSchedules();
        }, []);
      

    return (
        <div>
            <IonList>
                <IonItem className='ion-padding'>
                    <IonSelect aria-label="Schedules" placeholder="Select a Time slot" onIonChange={e => onScheduleSelect(e.detail.value)}>
                        {schedules.map((schedules) => (
                        <IonSelectOption key={schedules.scheduleID} value={schedules.scheduleID}>
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