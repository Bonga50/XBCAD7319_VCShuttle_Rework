import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ShuttleDropDown from '../../components/ShuttleDropDown/ShuttleDropDownForm';
const StudentHome: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <ShuttleDropDown/>
            </IonContent>
        </IonPage>
    );
};

export default StudentHome;