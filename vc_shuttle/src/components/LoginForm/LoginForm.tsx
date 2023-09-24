import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import PlaceHolderLogo from '../../resources/images/placeholderimage_logo.png';

const LoginForm: React.FC = () => {

    return (
        <IonPage >
            <IonHeader >
            <IonTitle class="ion-text-center ion-margin-top">VC Shuttle</IonTitle>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow className="ion-justify-content-center ion-align-items-center" style={{height: "10%"}}>
                        <IonCol  size="12" sizeMd="6" sizeLg="4" sizeXl="3">
                            <IonImg src={PlaceHolderLogo} alt="Place holder logo"  />
                            <form>
                            <IonInput className='ion-margin-top' label="Email" label-placement="floating" type='email'  fill="outline" placeholder="Enter email"></IonInput>
                            <IonInput className='ion-margin-top' label="Password" label-placement="floating" type='password' fill="outline" placeholder="Enter Password"></IonInput>
                            <IonButton className='ion-margin-top' type='submit'  expand="block" >Log In</IonButton>  
                            </form>
                        </IonCol>

                </IonRow>
            </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default LoginForm;