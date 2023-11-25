import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { UserDataHandler } from '../../../Data/UserDataHandler';
import { User } from '../../../models/User';
import AdminViewUserDetails from '../AdminViewUserDetails/AdminViewUserDetails';


const AdminGetUserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>(''); // New state for search term
  const userDataHandler = UserDataHandler.getInstance();

  useEffect(() => {
    setUsers(userDataHandler.getUsers());
  }, []);

  const handleUserClick = (userEmail: string, userPassword: string) => {
    const userDetails = userDataHandler.findUser(userEmail, userPassword);
    setSelectedUser(userDetails);
  };

  // New function for handling search
  const handleSearch = () => {
    const filteredUsers = userDataHandler.getUsers().filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/AdminAddUser">ADD</IonButton>
            <IonButton onClick={handleSearch}>Search</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            value={searchTerm}
            onIonChange={(e) => setSearchTerm(e.detail.value!)}
            onIonClear={() => {
              setSearchTerm('');
              setUsers(userDataHandler.getUsers()); // Reset the list when clearing the search
            }}
            placeholder="Search by name"
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonList id="open-AddUserModal" inset={true}>
        {users.map((user) => (
          <IonItem
            button
            key={user.id}
            onClick={() => handleUserClick(user.email, user.password)}
          >
            <IonLabel>{user.name}</IonLabel>
          </IonItem>
        ))}
      </IonList>

      {selectedUser && <AdminViewUserDetails user={selectedUser} />}
    </div>
  );
};

export default AdminGetUserList;


