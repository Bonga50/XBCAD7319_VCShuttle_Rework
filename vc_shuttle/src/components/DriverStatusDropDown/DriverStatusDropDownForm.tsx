import {  IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { UserDataHandler } from '../../Data/UserDataHandler';

interface StatusDropDownProps  { 
    onDriverStatusSelect: (status: string) => void;
}
const DriverStatusDropDown: React.FC<StatusDropDownProps> = ({onDriverStatusSelect}) => {

    const [status, setStatuses] = useState<string[]>([]);
        const dataHandler = new UserDataHandler();
      
        useEffect(() => {
            setStatuses(dataHandler.getStatuses());
        }, []);

        const handleStatusChange = (e: CustomEvent) => {
            const selectedStatus = e.detail.value as string;
            onDriverStatusSelect(selectedStatus);
          };
    return (
        <div>

            <IonList>
                <IonItem className='ion-padding'>
                    <IonSelect aria-label="Status" placeholder="Status" onIonChange={handleStatusChange}>
                        {status.map((status) => (
                        <IonSelectOption key={status} value={status}>
                          {status}
                        </IonSelectOption>
                        ))}
                    </IonSelect>
                </IonItem>
            </IonList> 

        </div>
    );
};

export default DriverStatusDropDown;