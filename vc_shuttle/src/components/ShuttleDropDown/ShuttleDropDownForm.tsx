import {  IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Shuttle } from '../../models/Shuttle';
import { ShuttleDataHandler } from '../../Data/ShuttleDataHandler';

interface ShuttleDropDownProps  { onShuttleSelect: (shuttleID: number) => void; }
const ShuttleDropDown: React.FC<ShuttleDropDownProps> = ({ onShuttleSelect })  => {

        
        const [shuttles, setShuttles] = useState<Shuttle[]>([]);
        const dataHandler = new ShuttleDataHandler();
      
        useEffect(() => {
          setShuttles(dataHandler.getShuttles());
        }, []);
      

    return (
        <div>
            <IonList>
                <IonItem className='ion-padding'>
                    <IonSelect aria-label="Shuttles" placeholder="Select a Shuttle" onIonChange={e => onShuttleSelect(e.detail.value)}>
                        {shuttles.map((shuttle) => (
                        <IonSelectOption key={shuttle.shuttleID} value={shuttle.shuttleID}>
                          {shuttle.shuttleName}
                        </IonSelectOption>
                        ))}
                    </IonSelect>
                </IonItem>
            </IonList> 
        </div>
    );
};

export default ShuttleDropDown;