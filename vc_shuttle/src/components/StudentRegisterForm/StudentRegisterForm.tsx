import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { UserDataHandler } from '../../Data/UserDataHandler';
import PlaceHolderLogo from '../../resources/images/placeholderimage_logo.png';


const StudentRegisterForm: React.FC = () => {

    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const data = UserDataHandler.getInstance();
    

    const handleUsernameInputChange = (event: CustomEvent) => {
        setUsername(event.detail.value);
      };
      const handlePasswordInputChange = (event: CustomEvent) => {
        setPassword(event.detail.value);
      };

      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    }

    return (
        <div >
        <h4 className="ion-text-center ion-margin-top">VC Shuttle</h4>
        <form onSubmit={handleSubmit}>
            <IonGrid>
                 <IonRow className="ion-justify-content-center ion-align-items-center" style={{height: "10%"}}>
                     <IonCol  size="12" sizeMd="6" sizeLg="4" sizeXl="3">
                        <div className='ion-text-center ion-padding'>
                         <img src={PlaceHolderLogo} alt="Place holder logo" width="50%"  />
                         </div>
                         
                         <IonInput className='ion-margin-top' label="Email" label-placement="floating" type='email'  fill="outline" placeholder="Enter email" value={username} onIonChange={handleUsernameInputChange} ></IonInput>
                         <IonInput className='ion-margin-top' label="Password" label-placement="floating" type='password' fill="outline" placeholder="Enter Password" value={password} onIonChange={handlePasswordInputChange}  ></IonInput>
                         <IonButton className='ion-margin-top' type='submit'  expand="block" >Register</IonButton> 
                         <IonButton className='ion-margin-top' routerLink='/'  expand="block" >Log In</IonButton> 

                         {/* <IonButton routerLink='/StudentHome' className='ion-margin-top'  expand="block" >Log In</IonButton>   */}
                         
                     </IonCol>
                </IonRow>
            </IonGrid>
        </form>
    
    </div>
   
    );
};

export default StudentRegisterForm;