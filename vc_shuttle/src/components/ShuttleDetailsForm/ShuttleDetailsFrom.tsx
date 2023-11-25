import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonHeader,
  IonProgressBar
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import busIcon from "../../resources/images/iconbus.png";
import { DriverRoute } from "../../models/DriverRoute";
import { Locations } from "../../models/Locations";
import { ShuttleDataHandler } from "../../Data/ShuttleDataHandler";
import { LocationHandler } from "../../Data/LocationHandler";
import { DriverRouteHandler } from "../../Data/DriverRoutehandler";
import { BookDataHandler } from "../../Data/BookDataHandler";
import { ScheduleDataHandler } from "../../Data/ScheduleDataHandler";
import { Schedule } from "../../models/Schedule";
import './ShuttleDetailsForm.css';
import { MapHandler } from "../../Data/MapHandler";
import { useHistory } from 'react-router';

interface ContainerProps {
  trip: DriverRoute | undefined;
}
const ShuttleDetailsForm: React.FC<ContainerProps> = ({
  trip
}: {
  trip: DriverRoute | undefined;
}) => {
  const [startLocation, setStartLocation] = useState<Locations>();
  const [endLocation, setEndLocation] = useState<Locations>();
  const [numberOfSeats, setnumberOfSeats] = useState<number>();
  const [numberOfBookedSeats, setnumberOfBookedSeats] = useState<number>();
  const [selectedschedule, setSelectedschedule] = useState<Schedule>();
  const shuttledataHandler = ShuttleDataHandler.getInstance();
  const boookingdataHandler = BookDataHandler.getInstance();
  const routedataHandler = DriverRouteHandler.getInstance();
  const locationdataHandler = LocationHandler.getInstance();
  const scheduledataHandler = ScheduleDataHandler.getInstance();
  const mapHandler = MapHandler.getInstance();

  
  const history = useHistory();
  const handleTrackLocation = () => {
    if(startLocation && endLocation) {
      mapHandler.setStartEndLocation(startLocation, endLocation);
  }
  history.push('/StudentMap');
}

  useEffect(() => {
    console.log("Trip" + trip);
    if (trip) {
      setStartLocation(
        locationdataHandler.getLocationByID(trip ? trip.startLocationID : 1)
      );
      setEndLocation(
        locationdataHandler.getLocationByID(trip ? trip.endLocationID : 1)
      );
      setnumberOfSeats(
        shuttledataHandler.getSeatsByShuttleID(trip ? trip.shuttleID : 1)
      );
      setnumberOfBookedSeats(
        boookingdataHandler.getNumberOfBookingsForTrip(
          trip ? trip.driverRouteID : ""
        )
      );
      setSelectedschedule(
        scheduledataHandler.getScheduleByID(trip ? trip.scheduleID : 1)
      );
    }
  }, [trip]);

  return (
    <div>
      <IonCard>
        <IonHeader title="Title">
          <IonCardTitle className="ion-padding flex-container">
            <div>
              <img src={busIcon} alt="BusIcon" />
            </div>
            {trip ? numberOfBookedSeats : "N/A"} /{" "}
            {trip ? numberOfSeats : "N/A"} Seats
          </IonCardTitle>
        </IonHeader>
        <IonCardSubtitle className="ion-padding">
          {" "}
          {trip ? startLocation?.locationName : "N/A"} -{" "}
          {trip ? endLocation?.locationName : "N/A"}
        </IonCardSubtitle>
        <IonProgressBar>
          https://ionicframework.com/docs/api/progress-bar
        </IonProgressBar>
        <IonCardSubtitle className="ion-padding">
          Departure time:{" "}
          {trip
            ? new Date(trip.departureTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            : "N/A"}
        </IonCardSubtitle>
        <IonCardSubtitle className="ion-padding">
            Shuttle : {trip? trip.shuttleID: "N/A"}
        </IonCardSubtitle>
        <IonButton onClick={handleTrackLocation} className="ion-padding">
          Track
        </IonButton>
      </IonCard>
    </div>
  );
};

export default ShuttleDetailsForm;
