import { IonContent, IonHeader, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Shuttle } from '../../models/Shuttle';
import { ShuttleDataHandler } from '../../Data/ShuttleDataHandler';

interface ContainerProps { }
const ShuttleDropDown: React.FC<ContainerProps> = () => {

        const [shuttles, setShuttles] = useState<Shuttle[]>([]);
        const dataHandler = new ShuttleDataHandler();
      
        useEffect(() => {
          setShuttles(dataHandler.getShuttles());
        }, []);
      

    return (
        <div>
            <IonList>
                <IonItem className='ion-padding'>
                    <IonSelect aria-label="Shuttles" placeholder="Select a Shuttle">
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