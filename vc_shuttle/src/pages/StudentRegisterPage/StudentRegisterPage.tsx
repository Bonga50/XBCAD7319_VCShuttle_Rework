import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import StudentRegisterForm from '../../components/StudentRegisterForm/StudentRegisterForm';

const StudentRegisterPage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
               <StudentRegisterForm/>
            </IonContent>
        </IonPage>
    );
};

export default StudentRegisterPage;