import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Shuttle } from "../../models/Shuttle";
import { ShuttleDataHandler } from "../../Data/ShuttleDataHandler";
import { DriverRouteHandler } from "../../Data/DriverRoutehandler";

interface ShuttleDropDownProps {
  sessionId: number;
  startLocation: number;
  endLocation: number;
  onShuttleSelect: (shuttleID: number) => void;
}
const AvailableShuttleDropDown: React.FC<ShuttleDropDownProps> = ({
  sessionId,
  startLocation,
  endLocation,
  onShuttleSelect,
}) => {
  const [shuttles, setShuttles] = useState<Shuttle[]>([]);
  const [shuttlesIDs, setShuttlesIDs] = useState<number[]>([]);

  const dataHandler = ShuttleDataHandler.getInstance();
  const routedataHandler = DriverRouteHandler.getInstance();

  useEffect(() => {
    const routes = routedataHandler.getRoutesForSession(
      sessionId,
      startLocation,
      endLocation
    );
    console.log("Found" + routes.length);
    const uniqueShuttleIDs = new Set<number>();
    routes.forEach((route) => {
      if (!uniqueShuttleIDs.has(route.shuttleID)) {
        uniqueShuttleIDs.add(route.shuttleID);
      }
    });
    console.log("Available shuttleID", Array.from(uniqueShuttleIDs));

    console.log(
      "Parsed settings session: " +
        sessionId +
        " start :" +
        startLocation +
        " end: " +
        endLocation
    );
    const fetchShuttles = async () => {
      const allSchedules = await dataHandler.getShuttlesByIDs(uniqueShuttleIDs);
      setShuttles(allSchedules);
  };
  fetchShuttles();
    
  }, [sessionId, startLocation, endLocation]);

  return (
    <div>
      <IonList>
        <IonItem className="ion-padding">
          <IonSelect
            aria-label="Shuttles"
            placeholder="Select a Shuttle"
            onIonChange={(e) => onShuttleSelect(e.detail.value)}
          >
            {shuttles.map((shuttle) => (
              <IonSelectOption
                key={shuttle.shuttleID}
                value={shuttle.shuttleID}
              >
                {shuttle.shuttleName}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
      </IonList>
    </div>
  );
};

export default AvailableShuttleDropDown;
