import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonHeader,  IonProgressBar } from '@ionic/react';
import React from 'react';
import busIcon from '../../resources/images/iconbus.png'

interface ContainerProps { }
const ShuttleDetailsForm: React.FC<ContainerProps> = () => {

    return (
        <div>
            <IonCard>
                <IonHeader title="Title">
                    <IonCardTitle className='ion-padding'>
                    <div>
                        <img src={busIcon} alt='BusIcon'/>
                    </div>
                        4 / 24 Seats
                    </IonCardTitle>
                <IonCardSubtitle className='ion-padding'>VC Sancdton - Sandton Gautrain</IonCardSubtitle>
                <IonProgressBar>https://ionicframework.com/docs/api/progress-bar</IonProgressBar>
                <IonCardContent>
                Here's a small text description for the card content.
                </IonCardContent>
                <IonCardContent>
                Here's a small text description for the card content.
                </IonCardContent>
                    <IonButton className='ion-padding'>Track</IonButton>
                </IonHeader>
            </IonCard>
        </div>
    );
};

export default ShuttleDetailsForm;