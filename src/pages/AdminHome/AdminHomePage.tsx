import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonSegment, IonSegmentButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import BookingGraphComponent from '../../components/BookingsGraph/BookingGraphComponent';
import AdminSettingsList from '../../components/AdminSettingsList/AdminSettingsListComp';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import AdminBookingList from '../../components/AdminBooking/AdminBookingList/AdminBookingList';
import AdminBookingSubPage from './AdminBookingSubPage/AdminBookingSubPage';

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
                    <p>Bookings x Date </p>
                    <BookingGraphComponent />
                    <br />
                    
                </IonContent>
            </IonPage>
            <AdminSettingsList/>
        </>
    );
};

export default AdminHomePage;