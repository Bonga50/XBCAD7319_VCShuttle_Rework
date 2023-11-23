import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ReviewForm from '../../components/AdminReviews/AdminReviews';
import AdminSettingsList from '../../components/AdminSettingsList/AdminSettingsListComp';

const Reviews: React.FC = () => {

    return (
        <>
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
                    <IonTitle>Reviews Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <ReviewForm/>
            </IonContent>
        </IonPage>
        <AdminSettingsList/>
        </>
        
    );
};

export default Reviews;