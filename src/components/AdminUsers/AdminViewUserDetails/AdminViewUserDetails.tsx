import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { UserDataHandler } from '../../../Data/UserDataHandler';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { User } from '../../../models/User';

interface ContainerProps { 
  user: User;
}
const AdminViewUserDetails: React.FC<ContainerProps> = ({user}: {user: User|undefined}) => {

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    modal.current?.dismiss(null, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  const handleEdit = () => {
    // Handle edit action here
};

const handleDelete = () => {
    // Handle delete action here
};

const handleClose = () => {
    // Handle close action here
};
    return (
      <div>
        <IonModal ref={modal} trigger="open-AddUserModal" onWillDismiss={(ev) => onWillDismiss(ev)}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
          </IonButtons>
          <IonTitle>Welcome</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={() => confirm()}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLabel>User ID: {user ? user.id : 'N/A'}</IonLabel>
        <br/>
        <IonLabel>Name: {user ? user.name : 'N/A'}</IonLabel>
        <br/>
        <IonLabel>Email: {user ? user.email : 'N/A'}</IonLabel>
        <br/>
        <IonLabel>Password: {user ? user.password : 'N/A'}</IonLabel>
        <br/>
        <IonLabel>Role: {user ? user.role : 'N/A'}</IonLabel>
        <br/>
        <IonLabel>Status: {user ? user.status : 'N/A'}</IonLabel>
        

        <IonButton expand="full" onClick={handleEdit}>
          Edit
        </IonButton>
        <IonButton expand="full" onClick={handleDelete}>
          Delete
        </IonButton>
        <IonButton expand="full" onClick={handleClose}>
          Close
        </IonButton>
      </IonContent>
    </IonModal>
      </div>
    );
};

export default AdminViewUserDetails;