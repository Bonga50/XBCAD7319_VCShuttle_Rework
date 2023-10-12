import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonHeader,  IonProgressBar } from '@ionic/react';
import React from 'react';
import busIcon from '../../resources/images/iconbus.png'

interface ContainerProps { }

const DriverRouteDetailsForm: React.FC<ContainerProps> = () => {

    return (
        <div>
            <IonCard>
                <IonHeader>
                    <IonCardTitle className='ion-padding'>
                        4 / 24 Seats
                    </IonCardTitle>
                </IonHeader>
                <IonCardContent>
                Session : Morning (06:00-09:00)
                </IonCardContent>
                <IonCardContent>
                My status: Active
                </IonCardContent>
                <IonCardContent>
                Start location - end Location
                </IonCardContent>
                
                <IonButton routerLink='/StudentMap' className='ion-padding'>MAP</IonButton>

            </IonCard>

        </div>
    );
};

export default DriverRouteDetailsForm;