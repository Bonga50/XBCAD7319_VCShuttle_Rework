import { IonContent, IonHeader, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

interface ContainerProps { }
const ShuttleDropDown: React.FC<ContainerProps> = () => {

    return (
        <div>
            <IonList>
                <IonItem>
                    <IonSelect aria-label="Shuttles" placeholder="Select a Shuttle">
                        <IonSelectOption value="apple">apple</IonSelectOption>
                    </IonSelect>
                </IonItem>
            </IonList> 
        </div>
    );
};

export default ShuttleDropDown;