import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const AdminSettingsList: React.FC = () => {

    return (
       <div>
         <IonList inset={true}>
        <IonItem>
          <IonLabel>Student Bookings</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Shuttles</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Locations</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Schedules</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Students</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Reviews</IonLabel>
        </IonItem>
      </IonList>
       </div>
    );
};

export default AdminSettingsList;