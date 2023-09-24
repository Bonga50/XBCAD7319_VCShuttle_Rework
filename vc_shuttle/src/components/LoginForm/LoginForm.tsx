import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import PlaceHolderLogo from '../../resources/images/placeholderimage_logo.png';
import './LoginForm.css'
import { User } from '../../models/User';

interface ContainerProps { }
const LoginForm: React.FC<ContainerProps> = () => {

    return (
        <div >
            <h4 className="ion-text-center ion-margin-top">VC Shuttle</h4>
            <form >
                <IonGrid>
                     <IonRow className="ion-justify-content-center ion-align-items-center" style={{height: "10%"}}>
                         <IonCol  size="12" sizeMd="6" sizeLg="4" sizeXl="3">
                            <div className='ion-text-center ion-padding'>
                             <img src={PlaceHolderLogo} alt="Place holder logo" width="50%"  />
                             </div>
                             <form>
                             <IonInput className='ion-margin-top' label="Email" label-placement="floating" type='email'  fill="outline" placeholder="Enter email"></IonInput>
                             <IonInput className='ion-margin-top' label="Password" label-placement="floating" type='password' fill="outline" placeholder="Enter Password"></IonInput>
                             {/* <IonButton className='ion-margin-top' type='submit'  expand="block" >Log In</IonButton>  */}
                             <IonButton routerLink='/StudentHome' className='ion-margin-top'  expand="block" >Log In</IonButton>  
                             </form>
                         </IonCol>
                    </IonRow>
                </IonGrid>
            </form>
        
        </div>
        // <div id='container'>
        // <IonPage >
        //     VC Shuttle
        //     <IonHeader >
        //     <IonTitle >VC Shuttle</IonTitle>
        //     </IonHeader>
        //     <IonContent className="ion-padding">
        //         <IonLabel>Login</IonLabel>
        //         <IonGrid>
        //             <IonRow className="ion-justify-content-center ion-align-items-center" style={{height: "10%"}}>
        //                 <IonCol  size="12" sizeMd="6" sizeLg="4" sizeXl="3">
        //                     <IonImg src={PlaceHolderLogo} alt="Place holder logo"  />
        //                     <form>
        //                     <IonInput className='ion-margin-top' label="Email" label-placement="floating" type='email'  fill="outline" placeholder="Enter email"></IonInput>
        //                     <IonInput className='ion-margin-top' label="Password" label-placement="floating" type='password' fill="outline" placeholder="Enter Password"></IonInput>
        //                     <IonButton className='ion-margin-top' type='submit'  expand="block" >Log In</IonButton>  
        //                     </form>
        //                 </IonCol>
        //         </IonRow>
        //     </IonGrid>
        //     </IonContent>
        // </IonPage>
        // </div>
    );
};

export default LoginForm;