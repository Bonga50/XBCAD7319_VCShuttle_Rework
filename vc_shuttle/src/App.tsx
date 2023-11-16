import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login/LoginPage';
import StudentHome from './pages/StudentHome/StudentHomePage';
import ShuttleBookingPage from './pages/ShuttleBooking/ShuttleBookingPage';
import StudentBookingList from './pages/StudentBookingList/StudentBookingList';
import DriverHomePage from './pages/DriverHome/DriverHomePage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import StudentMapPage from './pages/StudentMap/StudentMapPage';
import AdminHomePage from './pages/AdminHome/AdminHomePage';
import DriverCreateRoutePage from './pages/DriverCreateRoute/DriverCreateRoutePage';
import AdminBookingSubPage from './pages/AdminHome/AdminBookingSubPage/AdminBookingSubPage';
import AdminAddBookingSubPage from './pages/AdminHome/AdminAddBookingSubPage/AdminAddBookingSubPage';
import AdminAddShuttleSubPage from './pages/AdminHome/AdminAddShuttleSubPage/AdminAddShuttleSubPage';
import AdminShuttleSubPage from './pages/AdminHome/AdminShuttleSubPage/AdminShuttleSubPage';
import AdminUserSubPage from './pages/AdminHome/AdminUsersSubPage/AdminUsersSubPage';
import AdminAddUserSubPage from './pages/AdminHome/AdminAddUserSubPage/AdminAddUserSubPage';
import AdminAddLocationSubPage from './pages/AdminHome/AdminAddLocationSubPage/AdminAddLocationSubPage';
import AdminLocationSubPage from './pages/AdminHome/AdminLocationSubPage/AdminLocationSubPage';
import MapNavigationPage from './pages/MapNavigationPage/MapNavigationPage';
import LocationListPage from './pages/LocationListPage/LocationListPage';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/StudentHome">
          <StudentHome />
        </Route>
        <Route exact path="/DriverCreateRoute">
          <DriverCreateRoutePage />
        </Route>
        <Route exact path="/DriverHomePage">
          <DriverHomePage />
        </Route>
        <Route exact path="/AdminHomePage">
          <AdminHomePage  />
        </Route>
        <Route exact path="/ShuttleBooking">
          <ShuttleBookingPage />
        </Route>
        <Route exact path="/StudentBookingList">
          <StudentBookingList />
        </Route>
        <Route exact path="/StudentMap">
          <StudentMapPage/>
        </Route>
        <Route exact path="/AdminBooking">
          <AdminBookingSubPage/>
        </Route>
        <Route exact path="/AdminShuttle">
          <AdminShuttleSubPage/>
        </Route>
        <Route exact path="/AdminUsers">
          <AdminUserSubPage/>
        </Route>
        <Route exact path="/AdminLocations">
          <AdminLocationSubPage/>
        </Route>
        <Route exact path="/AdminAddBooking">
          <AdminAddBookingSubPage/>
        </Route>
        <Route exact path="/AdminAddShuttle">
          <AdminAddShuttleSubPage/>
        </Route>
        <Route exact path="/AdminAddUser">
          <AdminAddUserSubPage/>
        </Route>
        <Route exact path="/AdminAddLocation">
          <AdminAddLocationSubPage/>
        </Route>
        <Route exact path="/MapNavigation">
          <MapNavigationPage/>
        </Route>
        <Route exact path="/LocationsList">
          <LocationListPage/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
