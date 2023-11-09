import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import BookingGraphComponent from '../../components/BookingsGraph/BookingGraphComponent';
import AdminSettingsList from '../../components/AdminSettingsList/AdminSettingsListComp';

const AdminHomePage: React.FC = () => {

    return (
        <>
            {/* Main page here */}
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Admin</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">
                    <p>Bookings</p>
                    <BookingGraphComponent />
                    <br />
                    <p>Menu</p>
                    <AdminSettingsList />
                </IonContent>
            </IonPage>
            {/* Slide out menu */}
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>Home</IonItem>
                        <IonItem>Bookings</IonItem>
                        <IonItem>Shuttles</IonItem>
                        <IonItem>Locations</IonItem>
                        <IonItem>Schedules</IonItem>
                        <IonItem>Students</IonItem>
                        <IonItem>Reviews</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
        </>
    );
};

export default AdminHomePage;