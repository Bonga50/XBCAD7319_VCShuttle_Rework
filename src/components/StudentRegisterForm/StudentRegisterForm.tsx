import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { UserDataHandler } from "../../Data/UserDataHandler";
import PlaceHolderLogo from "../../resources/images/logo.png";
import { User } from "../../models/User";
import { useHistory } from "react-router";

const StudentRegisterForm: React.FC = () => {
  const [name, setName] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const data = UserDataHandler.getInstance();
  const [usernameError, setUsernameError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();


  const history = useHistory();
  const handleNameInputChange = (event: CustomEvent) => {
    setName(event.detail.value);
  };
  const handleUsernameInputChange = (event: CustomEvent) => {
    setUsername(event.detail.value);
  };
  const handlePasswordInputChange = (event: CustomEvent) => {
    setPassword(event.detail.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset error messages
    setUsernameError(undefined);
    setPasswordError(undefined);

    // Check if username and password are not empty
    if (!username || !password||!name) {
      setUsernameError("Username and password or name cannot be empty");
      return;
    }

    // Check if password is longer than 8 characters and contains at least 1 uppercase letter, 1 lowercase letter, and 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be longer than 8 characters and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number"
      );
      return;
    }

    // Check for SQL injection
    const sqlInjectionRegex = /^(\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( INTO){0,1}|MERGE|SELECT|UPDATE|UNION( ALL){0,1})\b)|(\%27)/;
    if (sqlInjectionRegex.test(username) || sqlInjectionRegex.test(password)) {
      setUsernameError("Invalid characters detected");
      setPasswordError("Invalid characters detected");
      return;
    }
    const newUser = {
      id: data.generateRandomUserId(),
      name: name!!,
      email: username!!,
      password: password,
      role: "user",
      status: "active",
    };

    data.addUsertoDatabase(newUser);
    history.push('/');
  };

  return (
    <div>
      <h4 className="ion-text-center ion-margin-top">VC Shuttle</h4>
      <form onSubmit={handleSubmit}>
        <IonGrid>
          <IonRow
            className="ion-justify-content-center ion-align-items-center"
            style={{ height: "10%" }}
          >
            <IonCol size="12" sizeMd="6" sizeLg="4" sizeXl="3">
              <div className="ion-text-center ion-padding">
                <img
                  src={PlaceHolderLogo}
                  alt="Place holder logo"
                  width="50%"
                />
              </div>
              <IonInput
                className="ion-margin-top"
                label="Name"
                label-placement="floating"
                type="text"
                fill="outline"
                placeholder="Enter Name"
                value={name}
                onIonChange={handleNameInputChange}
              ></IonInput>
              <IonInput
                className="ion-margin-top"
                label="Email"
                label-placement="floating"
                type="email"
                fill="outline"
                placeholder="Enter email"
                value={username}
                onIonChange={handleUsernameInputChange}
              ></IonInput>
              {usernameError && <p>{usernameError}</p>}
              <IonInput
                className="ion-margin-top"
                label="Password"
                label-placement="floating"
                type="password"
                fill="outline"
                placeholder="Enter Password"
                value={password}
                onIonChange={handlePasswordInputChange}
              ></IonInput>
              {passwordError && <p>{passwordError}</p>}
              <IonButton
                className="ion-margin-top"
                type="submit"
                expand="block"
              >
                Register
              </IonButton>
              <IonButton
                className="ion-margin-top"
                routerLink="/"
                expand="block"
              >
                Log In
              </IonButton>

              {/* <IonButton routerLink='/StudentHome' className='ion-margin-top'  expand="block" >Log In</IonButton>   */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </form>
    </div>
  );
};

export default StudentRegisterForm;
