import { IonButton, IonCol, IonGrid, IonInput, IonRow, } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import PlaceHolderLogo from '../../resources/images/logo.png';
import './LoginForm.css'
import { User } from '../../models/User';
import { UserDataHandler } from '../../Data/UserDataHandler';
import { useHistory } from 'react-router-dom';


interface ContainerProps { }
const LoginForm: React.FC<ContainerProps> = () => {

    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const data = UserDataHandler.getInstance();
    

    const handleUsernameInputChange = (event: CustomEvent) => {
        setUsername(event.detail.value);
      };
      const handlePasswordInputChange = (event: CustomEvent) => {
        setPassword(event.detail.value);
      };


      const history = useHistory();
    //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     // Your form submission logic here
    //     console.log('Form submitted');
    //   };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (username === null){
            console.log("Invalid username or password")
        }else{
            console.log(username+" "+password);
            var user = data.findUser(username!!,password!!);
            console.log(user)
            if(user){
                data.setLogedInUser(user.email)
                console.log(user);
                if(user?.role == "driver"){
                    history.push('/DriverHomePage'); // Redirect to admin page
                }else if(user?.role=="user"){
                    history.push('/StudentHome');
                }else if(user?.role=="admin"){
                    history.push('/AdminHomePage');
                }
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
                             <IonInput className='ion-margin-top' label="Password" label-placement="floating" type='password' fill="outline" placeholder="Enter Password" value={password} onIonChange={handlePasswordInputChange}  ></IonInput>
                             <IonButton className='ion-margin-top' type='submit'  expand="block" >Log In</IonButton> 
                             <IonButton className='ion-margin-top'  routerLink='/StudentRegister' expand="block" >Sign Up</IonButton> 
                             {/* <IonButton routerLink='/StudentHome' className='ion-margin-top'  expand="block" >Log In</IonButton>   */}
                             
                         </IonCol>
                    </IonRow>
                </IonGrid>
            </form>
        
        </div>
       
    );
};

export default LoginForm;