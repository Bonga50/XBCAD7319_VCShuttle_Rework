import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const AdminSettingsList: React.FC = () => {

    return (
       <div>
         <IonMenu contentId="main-content">
        <IonHeader>
            <IonToolbar>
                <IonTitle>Menu</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                <IonItem routerLink="/AdminHomePage">Home</IonItem>
                <IonItem routerLink="/AdminBooking">Bookings</IonItem>
                <IonItem routerLink="/AdminShuttle">Shuttles</IonItem>
                <IonItem routerLink="/AdminLocations">Locations</IonItem>
                <IonItem>Schedules</IonItem>
                <IonItem routerLink="/AdminUsers">Users</IonItem>
                <IonItem>Reviews</IonItem>
            </IonList>
        </IonContent>
    </IonMenu>
       </div>
    );
};

export default AdminSettingsList;