import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { ShuttleDataHandler } from '../../../Data/ShuttleDataHandler';
import { Shuttle } from '../../../models/Shuttle';
import AdminViewShuttleDetails from '../AdminViewShuttleDetails/AdminViewShuttleDetails';

const AdminShuttleList: React.FC = () => {
    const [shuttles,setShuttles] = useState<Shuttle[]>([]);
    const dataHandler = ShuttleDataHandler.getInstance();
    const [selectedShuttles,setSelectedShuttles] = useState<Shuttle>();

    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
    useEffect(() => {
        setShuttles(dataHandler.getShuttles());
      }, []);



      useEffect(() => {
        console.log(selectedShuttles);
      }, [selectedShuttles]);

      function setSelectedItem(id:number){
        setSelectedShuttles(dataHandler.getShuttleByID(id))
      }
      

    return (
    <div>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Shuttles</IonTitle>
                </IonToolbar>
                <IonButtons slot="End">
                    <IonButton routerLink="AdminAddShuttle">ADD</IonButton>
                </IonButtons>
                <IonToolbar>
                    <IonSearchbar></IonSearchbar>
                </IonToolbar>
            </IonHeader>
            
            <IonList id="open-AddShuttleModal" inset={true}>
        {shuttles.map((shuttles) => (
            <IonItem button key={shuttles.shuttleID}  onClick={() => setSelectedItem(shuttles.shuttleID)} >
              <IonLabel>
                {shuttles.shuttleName}
              </IonLabel>
            </IonItem>
          ))}
               
        </IonList>
        <AdminViewShuttleDetails shuttle={selectedShuttles!!}/>
    </div>
    );
};

export default AdminShuttleList;