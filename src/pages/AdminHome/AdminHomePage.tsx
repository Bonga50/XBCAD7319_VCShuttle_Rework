import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonSegment, IonSegmentButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import BookingGraphComponent from '../../components/BookingsGraph/BookingGraphComponent';
import AdminSettingsList from '../../components/AdminSettingsList/AdminSettingsListComp';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import AdminBookingList from '../../components/AdminBooking/AdminBookingList/AdminBookingList';
import AdminBookingSubPage from './AdminBookingSubPage/AdminBookingSubPage';
import { MapHandler } from '../../Data/MapHandler';
import { LocationHandler } from '../../Data/LocationHandler';

const AdminHomePage: React.FC = () => {
    
    const [travelTimes, setTravelTimes] = useState<Map<string, number>>(new Map());
    const mapDataHandler = MapHandler.getInstance();
    const LocationDataHandler = LocationHandler.getInstance();

    useEffect(() => {
        const fetchTravelTimes = async () => {
            const locations = await LocationDataHandler.getLocations(); // Replace this with your function to fetch locations
            const times = await mapDataHandler.getETATravelTimes(locations, 'Varsity College Sandton'); // Replace 'Start Location Name' with your actual start location name
            setTravelTimes(times);
        };

        fetchTravelTimes();
    }, []);
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
                    <p>Estimated travel time </p>
                    <ul>
                        {Array.from(travelTimes, ([key, value]) => (
                            <li key={key}>{key}: { mapDataHandler.formatDuration(value)}</li>
                        ))}
                    </ul>
                </IonContent>
            </IonPage>
            <AdminSettingsList/>
        </>
    );
};

export default AdminHomePage;