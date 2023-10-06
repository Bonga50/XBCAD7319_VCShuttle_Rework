import { IonButton, IonCol, IonGrid, IonInput, IonRow, } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import PlaceHolderLogo from '../../resources/images/placeholderimage_logo.png';
import './LoginForm.css'
import { User } from '../../models/User';
import { UserDataHandler } from '../../Data/UserDataHandler';
import { useHistory } from 'react-router-dom';


interface ContainerProps { }
const LoginForm: React.FC<ContainerProps> = () => {

    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const data = new UserDataHandler();
    

    const handleUsernameInputChange = (event: CustomEvent) => {
        setUsername(event.detail.value);
      };


      const history = useHistory();
    //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     // Your form submission logic here
    //     console.log('Form submitted');
    //   };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (username === null){
            console.log("Invalid username")
        }else{
            var user = data.findUser("");
            console.log(user);
            if(user?.role == "driver"){
                history.push('/DriverHomePage'); // Redirect to admin page
            }else if(user?.role=="user"){
                history.push('/StudentHome');
            }
        }
        
        
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
                             <IonInput className='ion-margin-top' label="Password" label-placement="floating" type='password' fill="outline" placeholder="Enter Password"></IonInput>
                             <IonButton className='ion-margin-top' type='submit'  expand="block" >Log In</IonButton> 
                             {/* <IonButton routerLink='/StudentHome' className='ion-margin-top'  expand="block" >Log In</IonButton>   */}
                             
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