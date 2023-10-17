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
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
