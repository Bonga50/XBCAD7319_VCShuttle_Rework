import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { UserDataHandler } from '../../../Data/UserDataHandler';
import { User } from '../../../models/User';
import AdminViewUserDetails from '../AdminViewUserDetails/AdminViewUserDetails';

const AdminGetUserList: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]); 
    const [selectedUser, setSelectedUser] = useState<User>();
    const userDataHandler = UserDataHandler.getInstance(); 
  
   
    useEffect(() => {
        setUsers(userDataHandler.getUsers());
    }, []);

    const handleUserClick = (userEmail:string, userPassword:string) => {
      const userDetails = userDataHandler.findUser(userEmail,userPassword); 
      setSelectedUser(userDetails);
    };
    return (
        <div>
            <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
        <IonButtons slot="end">
          <IonButton routerLink="/AdminAddUser">ADD</IonButton> {/* Update the routerLink */}
        </IonButtons>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonList id="open-AddUserModal" inset={true}>
        {users!!.map((user) => (
          <IonItem button key={user.id} onClick={() => handleUserClick(user.email, user.password)}>
            <IonLabel>{user.name}</IonLabel>
          </IonItem>
        ))}
      </IonList>

      {selectedUser && <AdminViewUserDetails user={selectedUser} />} {/* Update with your user details component */}
    </div>
        </div>
    );
};

export default AdminGetUserList;